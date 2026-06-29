/* ============================================================
   CULTURE ENGINE - HBO Edition
   Renders all widgets from MOCK_DATA
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    setCurrentDate();
    renderDashboard();
    renderStreamingCharts('all', 'all');
    renderOpportunities('all', 'all');
    renderSocialSection();
    renderCalendarSection();
    renderHBOPerformance();
    initFilters();
});

/* ─────────── Navigation ─────────── */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.section').forEach(s => s.classList.remove('section-active'));
            document.getElementById(`section-${section}`).classList.add('section-active');
        });
    });

    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', () => {
        refreshBtn.classList.add('spinning');
        setTimeout(() => {
            refreshBtn.classList.remove('spinning');
        }, 1500);
    });
}

function setCurrentDate() {
    const el = document.getElementById('currentDate');
    if (!el) return;
    const opts = { day: 'numeric', month: 'short', year: 'numeric' };
    el.textContent = new Date().toLocaleDateString('en-GB', opts);
}

/* ─────────── Dashboard ─────────── */
function renderDashboard() {
    renderStats();
    renderAIBriefing();
    renderSpotlight();
    renderDashboardCharts();
}

function renderStats() {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    // Titles Tracked: unique titles across every monitored chart this week
    const chartKeys = ['netflixTV', 'netflixFilm', 'amazonPrimeTV', 'amazonPrimeFilm',
        'hbomaxTV', 'hbomaxFilm', 'wikiViewsFilm', 'wikiViewsTV', 'wikiViewsPeople'];
    const titles = new Set();
    chartKeys.forEach(k => (MOCK_DATA[k] || []).forEach(i => i.title && titles.add(i.title.toLowerCase())));
    set('stat-titles', titles.size);

    // Platforms Monitored: distinct sources with data this week
    const sources = [
        MOCK_DATA.netflixTV || MOCK_DATA.netflixFilm,
        MOCK_DATA.amazonPrimeTV || MOCK_DATA.amazonPrimeFilm,
        MOCK_DATA.hbomaxTV || MOCK_DATA.hbomaxFilm,
        MOCK_DATA.wikiViewsTV || MOCK_DATA.wikiViewsFilm || MOCK_DATA.wikiViewsPeople,
        MOCK_DATA.tiktokUK || MOCK_DATA.tiktokNewsEnts
    ];
    set('stat-platforms', sources.filter(s => s && s.length).length);

    // HBO Opportunities + AI Insights: real counts
    set('stat-opportunities', (MOCK_DATA.opportunities || []).length);
    set('stat-insights', (MOCK_DATA.aiBriefing?.insights || []).length);
}

function renderAIBriefing() {
    const overview = document.getElementById('briefingOverview');
    const insights = document.getElementById('briefingInsights');
    const b = MOCK_DATA.aiBriefing;

    overview.innerHTML = `<p class="briefing-text">${b.overview}</p>`;

    insights.innerHTML = b.insights.map(i => `
        <div class="insight-chip">
            <h4>${i.title}</h4>
            <p>${i.text}</p>
        </div>
    `).join('');
}

function renderTopMovers() {
    const container = document.getElementById('topMovers');
    container.innerHTML = MOCK_DATA.topMovers.map(m => {
        const rankClass = m.direction === 'up' ? 'mover-rank-up' : m.direction === 'down' ? 'mover-rank-down' : 'mover-rank-new';
        const changeClass = m.direction === 'up' ? 'up' : m.direction === 'down' ? 'down' : 'new-entry';
        const icon = m.direction === 'up' ? '&#9650;' : m.direction === 'down' ? '&#9660;' : '&#9733;';
        return `
            <div class="mover-item">
                <div class="mover-rank ${rankClass}">${icon}</div>
                <div class="mover-info">
                    <div class="mover-title">${m.title}</div>
                    <div class="mover-meta"><span>${m.platform}</span></div>
                </div>
                <div class="mover-change ${changeClass}">${m.change}</div>
            </div>
        `;
    }).join('');
}

function renderSpotlight() {
    const container = document.getElementById('spotlightCard');
    const s = MOCK_DATA.spotlight;

    container.innerHTML = `
        <div class="spotlight-trigger">
            <div class="spotlight-trigger-icon"><i class="fas fa-fire"></i></div>
            <div class="spotlight-trigger-text">
                <div class="spotlight-trigger-label">Trending Trigger</div>
                <div class="spotlight-trigger-title">${s.trigger.title} - ${s.trigger.detail}</div>
            </div>
        </div>
        <div class="spotlight-connection">
            <div class="spotlight-connection-label"><i class="fas fa-link"></i> HBO Connection - ${s.talent}</div>
            <div class="spotlight-hbo-titles">
                ${s.hboTitles.map(t => `<span class="hbo-title-tag"><i class="fas fa-play-circle"></i> ${t}</span>`).join('')}
            </div>
        </div>
        <div class="spotlight-suggestion">
            <div class="spotlight-suggestion-label"><i class="fas fa-lightbulb"></i> Strategic Recommendation</div>
            <div class="spotlight-suggestion-text">${s.strategicRecommendation}</div>
        </div>
    `;
}

function renderDashboardCharts() {
    const platformCtx = document.getElementById('platformPieChart');
    if (platformCtx) {
        new Chart(platformCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Netflix TV', 'Netflix Film', 'Prime TV', 'Prime Film'],
                datasets: [{
                    data: [10, 10, 10, 10],
                    backgroundColor: ['#e50914', '#b20710', '#00a8e1', '#0088cc'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 16, font: { size: 11, family: 'Inter' } } }
                }
            }
        });
    }

    const genreCtx = document.getElementById('genreBarChart');
    if (genreCtx) {
        const genres = {};
        [...MOCK_DATA.netflixTV, ...MOCK_DATA.netflixFilm, ...MOCK_DATA.amazonPrimeTV, ...MOCK_DATA.amazonPrimeFilm].forEach(item => {
            if (!item.genre) return;
            const g = item.genre.split('/')[0].trim();
            genres[g] = (genres[g] || 0) + 1;
        });
        const sorted = Object.entries(genres).sort((a, b) => b[1] - a[1]).slice(0, 8);

        new Chart(genreCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: sorted.map(s => s[0]),
                datasets: [{
                    label: 'Titles',
                    data: sorted.map(s => s[1]),
                    backgroundColor: '#1a1a1a',
                    borderRadius: 6,
                    barThickness: 28
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: { display: false },
                    y: { grid: { display: false }, ticks: { font: { size: 11, family: 'Inter' } } }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

/* ─────────── HBO Catalogue Matching ─────────── */
function isOnHBO(title) {
    if (!MOCK_DATA.hboTitles) return false;
    const normalised = title.toLowerCase().replace(/['']/g, "'");
    return MOCK_DATA.hboTitles.some(hboTitle => {
        const hboNorm = hboTitle.toLowerCase().replace(/['']/g, "'");
        return normalised.includes(hboNorm) || hboNorm.includes(normalised);
    });
}

/* ─────────── Streaming Charts ─────────── */
function renderStreamingCharts(platformFilter, typeFilter) {
    const grid = document.getElementById('chartsGrid');
    let html = '';
    const search = (document.getElementById('chartSearch')?.value || '').toLowerCase();

    const lists = [];

    if (platformFilter === 'all' || platformFilter === 'netflix') {
        if (typeFilter === 'all' || typeFilter === 'series') {
            lists.push({ title: 'Netflix', subtitle: 'Top Series UK', colour: '#e50914', icon: 'N', data: filterBySearch(MOCK_DATA.netflixTV, search) });
        }
        if (typeFilter === 'all' || typeFilter === 'films') {
            lists.push({ title: 'Netflix', subtitle: 'Top Films UK', colour: '#e50914', icon: 'N', data: filterBySearch(MOCK_DATA.netflixFilm, search) });
        }
    }

    if (platformFilter === 'all' || platformFilter === 'amazon') {
        if (typeFilter === 'all' || typeFilter === 'series') {
            lists.push({ title: 'Prime Video', subtitle: 'Top Series UK', colour: '#00a8e1', icon: 'P', data: filterBySearch(MOCK_DATA.amazonPrimeTV, search) });
        }
        if (typeFilter === 'all' || typeFilter === 'films') {
            lists.push({ title: 'Prime Video', subtitle: 'Top Films UK', colour: '#00a8e1', icon: 'P', data: filterBySearch(MOCK_DATA.amazonPrimeFilm, search) });
        }
    }

    if (platformFilter === 'all' || platformFilter === 'hbomax') {
        if (typeFilter === 'all' || typeFilter === 'series') {
            lists.push({ title: 'HBO Max UK', subtitle: 'Top Series', colour: '#000000', icon: 'H', data: filterBySearch(MOCK_DATA.hbomaxTV || [], search) });
        }
        if (typeFilter === 'all' || typeFilter === 'films') {
            lists.push({ title: 'HBO Max UK', subtitle: 'Top Films', colour: '#000000', icon: 'H', data: filterBySearch(MOCK_DATA.hbomaxFilm || [], search) });
        }
    }

    lists.forEach(list => {
        html += renderChartList(list);
    });

    grid.innerHTML = html || '<p style="padding:40px;text-align:center;color:var(--text-muted);">Nothing matching that - try broadening your search.</p>';
}

function filterBySearch(data, search) {
    if (!search) return data;
    return data.filter(item => {
        const text = (item.title || item.hashtag || '').toLowerCase();
        return text.includes(search);
    });
}

function renderChartList(list) {
    const items = list.data;
    let itemsHtml = '';

    if (items.length === 0) {
        itemsHtml = '<div style="padding:24px;text-align:center;color:var(--text-muted);font-size:0.85rem;">Nothing here yet - data coming soon.</div>';
    } else {
        itemsHtml = items.map(item => {
            const movementHtml = getMovementHtml(item);
            const onHBO = item.hboLink || isOnHBO(item.title);
            const posterHtml = item.posterUrl
                ? `<img src="${item.posterUrl}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;">`
                : (item.emoji || '');
            return `
                <div class="chart-item">
                    <div class="chart-position ${item.rank <= 3 ? 'top3' : ''}">${item.rank}</div>
                    <div class="chart-movement ${item.movement}">${movementHtml}</div>
                    <div class="chart-poster">${posterHtml}</div>
                    <div class="chart-title-info">
                        <div class="chart-title-name">${item.title}</div>
                        <div class="chart-title-meta">${item.genre || ''}${item.type ? ' · ' + item.type : ''}${item.talent ? ' · ' + item.talent : ''}</div>
                    </div>
                    ${onHBO ? '<span class="chart-hbo-badge"><i class="fas fa-bolt"></i> On HBO</span>' : ''}
                    <div class="chart-days">
                        <strong>${item.daysInChart}</strong> days
                        ${item.peakPosition != null ? '<br>Peak: #' + item.peakPosition : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    return `
        <div class="chart-list-card">
            <div class="chart-list-header">
                <div class="chart-list-platform">
                    <div class="chart-list-platform-icon" style="background:${list.colour}">${list.icon}</div>
                    <div class="chart-list-platform-name">${list.title}</div>
                </div>
                <div class="chart-list-category">${list.subtitle}</div>
            </div>
            ${itemsHtml}
        </div>
    `;
}

function getMovementHtml(item) {
    if (item.movement === 'up') return `<span style="color:var(--success)">&#9650;${item.change || ''}</span>`;
    if (item.movement === 'down') return `<span style="color:var(--danger)">&#9660;${item.change || ''}</span>`;
    if (item.movement === 'new') return '<span class="new">NEW</span>';
    return '<span style="color:var(--text-muted)">-</span>';
}

/* ─────────── Opportunities ─────────── */
function renderOpportunities(urgencyFilter, typeFilter) {
    const grid = document.getElementById('opportunitiesGrid');
    let opps = MOCK_DATA.opportunities;

    if (urgencyFilter !== 'all') {
        opps = opps.filter(o => o.urgency === urgencyFilter);
    }
    if (typeFilter !== 'all') {
        opps = opps.filter(o => o.type === typeFilter);
    }

    grid.innerHTML = opps.map(o => `
        <div class="opportunity-card">
            <div class="opportunity-card-header">
                <div class="opportunity-type">
                    <div class="opportunity-type-icon" style="background:${o.trigger.platformColour}">
                        <i class="fas fa-${getTypeIcon(o.type)}"></i>
                    </div>
                    <span class="opportunity-type-label">${o.typeLabel}</span>
                </div>
                <span class="opportunity-urgency urgency-${o.urgency}">
                    ${o.urgency === 'high' ? 'High Priority' : o.urgency === 'medium' ? 'Medium' : 'Low'}
                </span>
            </div>
            <div class="opportunity-card-body">
                <div class="opportunity-trigger">
                    <div class="trigger-platform-badge" style="background:${o.trigger.platformColour}">
                        ${o.trigger.platform.charAt(0)}
                    </div>
                    <div class="trigger-text">${o.trigger.title} - ${o.trigger.detail}</div>
                </div>
                <div class="opportunity-hbo-titles">
                    <div class="opportunity-hbo-label"><i class="fas fa-play-circle"></i> HBO Titles - ${o.talent}</div>
                    <div class="opportunity-hbo-list">
                        ${o.hboTitles.map(t => `<span class="hbo-chip"><i class="fas fa-play"></i> ${t.title} <small>(${t.where})</small></span>`).join('')}
                    </div>
                </div>
                <div class="opportunity-post">
                    <div class="opportunity-post-label"><i class="fas fa-lightbulb"></i> Strategic Recommendation</div>
                    <div class="opportunity-post-text">${o.strategicRecommendation}</div>
                </div>
            </div>
            <div class="opportunity-card-footer">
                <div>
                    <span style="font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;padding:3px 8px;border-radius:20px;background:${{high:'var(--danger-light)',medium:'var(--warning-light)',low:'var(--bg-tertiary)'}[o.relevanceScore]};color:${{high:'var(--danger)',medium:'var(--warning)',low:'var(--text-muted)'}[o.relevanceScore]};">${o.relevanceScore} relevance</span>
                </div>
                <span><i class="far fa-clock"></i> ${o.timing}</span>
            </div>
        </div>
    `).join('');
}

function getTypeIcon(type) {
    const icons = { actor: 'user-tie', genre: 'masks-theater', franchise: 'link', director: 'video' };
    return icons[type] || 'star';
}

/* ─────────── Social Buzz ─────────── */
function renderSocial(platformFilter) {
    const grid = document.getElementById('socialGrid');
    if (!grid) return;
    let items = MOCK_DATA.socialBuzz;

    if (platformFilter !== 'all') {
        items = items.filter(i => i.platform === platformFilter);
    }

    grid.innerHTML = items.map(item => {
        const platformClass = `social-platform-${item.platform}`;
        const platformIcon = item.platform === 'x' ? 'fab fa-x-twitter' : item.platform === 'tiktok' ? 'fab fa-tiktok' : 'fab fa-instagram';

        return `
            <div class="social-card">
                <div class="social-card-top">
                    <div class="social-platform-icon ${platformClass}">
                        <i class="${platformIcon}"></i>
                    </div>
                    <span class="social-volume">${item.volume}</span>
                </div>
                <div class="social-topic">${item.topic}</div>
                <div class="social-description">${item.description}</div>
                <div class="social-tags">
                    ${item.tags.map(t => `<span class="social-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

/* ─────────── Filters ─────────── */
function initFilters() {
    document.querySelectorAll('.tabs-bar .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tabs-bar .tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const typeBtn = document.querySelector('.filter-btn[data-type].active');
            renderStreamingCharts(tab.dataset.platform, typeBtn?.dataset.type || 'all');
        });
    });

    document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn[data-type]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const platformTab = document.querySelector('.tabs-bar .tab.active');
            renderStreamingCharts(platformTab?.dataset.platform || 'all', btn.dataset.type);
        });
    });

    const searchInput = document.getElementById('chartSearch');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const platformTab = document.querySelector('.tabs-bar .tab.active');
            const typeBtn = document.querySelector('.filter-btn[data-type].active');
            renderStreamingCharts(platformTab?.dataset.platform || 'all', typeBtn?.dataset.type || 'all');
        });
    }

    document.querySelectorAll('.social-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.social-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSocial(tab.dataset.social);
        });
    });

    document.getElementById('urgencyFilter')?.addEventListener('change', applyOpportunityFilters);
    document.getElementById('typeFilter')?.addEventListener('change', applyOpportunityFilters);
}

function applyOpportunityFilters() {
    const urgency = document.getElementById('urgencyFilter')?.value || 'all';
    const type = document.getElementById('typeFilter')?.value || 'all';
    renderOpportunities(urgency, type);
}

/* ─────────── Social & Culture Section ─────────── */
function renderSocialSection() {
    renderWikiViews();
    renderTikTokUK();
    renderTikTokNews();
    renderRamdamTikTok();
    renderRamdamInstagram();
}

function renderWikiViews() {
    const sections = [
        { id: 'wikiFilmWidget', data: MOCK_DATA.wikiViewsFilm, subtitle: 'Film' },
        { id: 'wikiTVWidget', data: MOCK_DATA.wikiViewsTV, subtitle: 'TV' },
        { id: 'wikiPeopleWidget', data: MOCK_DATA.wikiViewsPeople, subtitle: 'People' }
    ];
    sections.forEach(sec => {
        const container = document.getElementById(sec.id);
        if (!container || !sec.data) return;
        container.innerHTML = sec.data.map(item => {
            const onHBO = isOnHBO(item.title);
            const metaParts = [item.category];
            if (item.genre) metaParts.push(item.genre);
            if (item.distributor) metaParts.push(item.distributor);
            return `
                <div class="chart-item">
                    <div class="chart-position ${item.rank <= 3 ? 'top3' : ''}">${item.rank}</div>
                    <div class="chart-title-info">
                        <div class="chart-title-name">${item.title}</div>
                        <div class="chart-title-meta">${metaParts.join(' · ')}</div>
                    </div>
                    ${onHBO ? '<span class="chart-hbo-badge"><i class="fas fa-bolt"></i> On HBO</span>' : ''}
                    <div class="chart-days">
                        <strong>${item.views}</strong> views
                    </div>
                </div>
            `;
        }).join('');
    });
}

function renderTikTokUK() {
    const container = document.getElementById('tiktokUKWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.tiktokUK.map(item => {
        const trendIcon = item.trend === 'up' ? `<span style="color:var(--success)">&#9650;${item.change || ''}</span>` :
                          item.trend === 'new' ? '<span style="color:var(--hbo-charcoal);font-weight:700;font-size:0.7rem;">NEW</span>' :
                          item.trend === 'down' ? `<span style="color:var(--danger)">&#9660;${item.change || ''}</span>` :
                          '<span style="color:var(--text-muted)">-</span>';
        return `
            <div class="chart-item">
                <div class="chart-position ${item.rank <= 3 ? 'top3' : ''}">${item.rank}</div>
                <div class="chart-movement">${trendIcon}</div>
                <div class="chart-title-info">
                    <div class="chart-title-name">${item.hashtag}</div>
                    <div class="chart-title-meta">${item.category}</div>
                </div>
                <div class="chart-days"><strong>${item.views}</strong> views</div>
            </div>
        `;
    }).join('');
}

function renderTikTokNews() {
    const container = document.getElementById('tiktokNewsWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.tiktokNewsEnts.map(item => {
        const sentimentClass = item.sentiment === 'positive' ? 'var(--success)' : item.sentiment === 'negative' ? 'var(--danger)' : 'var(--warning)';
        return `
            <div class="chart-item">
                <div class="chart-position ${item.rank <= 3 ? 'top3' : ''}">${item.rank}</div>
                <div class="chart-title-info" style="flex:2;">
                    <div class="chart-title-name">${item.hashtag}</div>
                    <div class="chart-title-meta">${item.topic}</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
                    <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);">${item.views}</span>
                    <span style="width:8px;height:8px;border-radius:50%;background:${sentimentClass};flex-shrink:0;"></span>
                </div>
            </div>
        `;
    }).join('');
}

function renderRamdamTikTok() {
    const container = document.getElementById('ramdamTikTokWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.ramdamTikTok.map(item => `
        <div class="mover-item">
            <div class="mover-rank mover-rank-new" style="font-size:0.7rem;">${item.rank}</div>
            <div class="mover-info">
                <div class="mover-title">${item.trend}</div>
                <div class="mover-meta">
                    <span>${item.engagement}</span>
                    <span style="margin-left:8px;color:var(--hbo-charcoal);">${item.category}</span>
                </div>
            </div>
        </div>
        <div style="padding:0 0 10px 42px;font-size:0.78rem;color:#555555;font-weight:500;border-bottom:1px solid var(--border-light);margin-bottom:4px;">
            <i class="fas fa-wand-magic-sparkles" style="margin-right:4px;"></i> HBO angle: ${item.hboAngle}
        </div>
    `).join('');
}

function renderRamdamInstagram() {
    const container = document.getElementById('ramdamInstagramWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.ramdamInstagram.map(item => `
        <div class="mover-item">
            <div class="mover-rank mover-rank-new" style="font-size:0.7rem;">${item.rank}</div>
            <div class="mover-info">
                <div class="mover-title">${item.trend}</div>
                <div class="mover-meta">
                    <span>${item.engagement}</span>
                    <span style="margin-left:8px;color:var(--hbo-charcoal);">${item.category}</span>
                </div>
            </div>
        </div>
        <div style="padding:0 0 10px 42px;font-size:0.78rem;color:#555555;font-weight:500;border-bottom:1px solid var(--border-light);margin-bottom:4px;">
            <i class="fas fa-wand-magic-sparkles" style="margin-right:4px;"></i> HBO angle: ${item.hboAngle}
        </div>
    `).join('');
}

/* ─────────── Calendar & Releases Section ─────────── */
function renderCalendarSection() {
    renderUpcomingReleases();
    renderRedditCalendar();
    renderTikTokCalendar();
}

function renderUpcomingReleases() {
    const container = document.getElementById('upcomingReleasesWidget');
    if (!container) return;
    const relevanceColours = { high: 'var(--danger)', medium: 'var(--warning)', low: 'var(--text-muted)' };
    const relevanceBg = { high: 'var(--danger-light)', medium: 'var(--warning-light)', low: 'var(--bg-tertiary)' };

    container.innerHTML = `
        <div style="display:grid;gap:12px;">
            ${MOCK_DATA.upcomingReleases.map(item => `
                <div style="display:flex;align-items:center;gap:16px;padding:14px;background:var(--bg-tertiary);border-radius:var(--radius-md);border-left:3px solid ${relevanceColours[item.hboRelevance]};">
                    <div style="min-width:60px;text-align:center;">
                        <div style="font-size:0.85rem;font-weight:800;color:var(--text-primary);">${item.date}</div>
                    </div>
                    <div style="flex:1;min-width:0;">
                        <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">${item.title}</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">${item.genre} &middot; ${item.talent}</div>
                    </div>
                    <div style="flex-shrink:0;text-align:right;">
                        <div style="font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;padding:3px 8px;border-radius:20px;background:${relevanceBg[item.hboRelevance]};color:${relevanceColours[item.hboRelevance]};">
                            ${item.hboRelevance} relevance
                        </div>
                        <div style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;">${item.distributor}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderRedditCalendar() {
    const container = document.getElementById('redditCalendarWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.redditCalendar.map(item => `
        <div class="mover-item">
            <div style="font-size:1.4rem;width:32px;text-align:center;flex-shrink:0;">${item.icon}</div>
            <div class="mover-info">
                <div class="mover-title">${item.event}</div>
                <div class="mover-meta">
                    <span>${item.date}</span>
                    <span style="margin-left:8px;padding:2px 6px;background:var(--bg-tertiary);border-radius:10px;font-size:0.68rem;">${item.category}</span>
                </div>
            </div>
        </div>
        <div style="padding:0 0 8px 48px;font-size:0.78rem;color:var(--hbo-charcoal);font-weight:500;border-bottom:1px solid var(--border-light);margin-bottom:4px;">
            <i class="fas fa-lightbulb" style="margin-right:4px;"></i> ${item.relevance}
        </div>
    `).join('');
}

function renderTikTokCalendar() {
    const container = document.getElementById('tiktokCalendarWidget');
    if (!container) return;
    container.innerHTML = MOCK_DATA.tiktokCalendar.map(item => `
        <div class="mover-item">
            <div style="min-width:50px;text-align:center;flex-shrink:0;">
                <div style="font-size:0.78rem;font-weight:700;color:var(--text-primary);">${item.date}</div>
            </div>
            <div class="mover-info">
                <div class="mover-title">${item.event}</div>
                <div class="mover-meta">
                    <span style="color:#555555;">${item.tiktokTrend}</span>
                    <span style="margin-left:8px;font-size:0.7rem;padding:2px 6px;background:var(--bg-tertiary);border-radius:10px;">${item.category}</span>
                </div>
            </div>
            <div style="font-size:0.72rem;color:var(--text-muted);flex-shrink:0;">${item.potentialReach}</div>
        </div>
    `).join('');
}

/* ─────────── HBO Performance Section ─────────── */
function renderHBOPerformance() {
    const container = document.getElementById('hboPostsWidget');
    if (!container) return;

    container.innerHTML = `
        <div style="display:grid;gap:16px;">
            ${MOCK_DATA.hboPosts.map((post, i) => {
                const platformIcon = post.platform === 'Instagram' ? 'fab fa-instagram' :
                                     post.platform === 'TikTok' ? 'fab fa-tiktok' : 'fab fa-x-twitter';
                const platformBg = post.platform === 'Instagram' ? 'linear-gradient(135deg, #f09433, #e6683c, #dc2743)' :
                                   post.platform === 'TikTok' ? '#ff0050' : '#1a1a2e';
                return `
                    <div style="display:flex;gap:16px;padding:18px;background:var(--bg-tertiary);border-radius:var(--radius-md);align-items:flex-start;border-left:3px solid ${post.platform === 'Instagram' ? '#e6683c' : post.platform === 'TikTok' ? '#ff0050' : '#1a1a2e'};">
                        <div style="width:36px;height:36px;border-radius:50%;background:${platformBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                            <i class="${platformIcon}" style="color:#fff;font-size:0.9rem;"></i>
                        </div>
                        <div style="flex:1;min-width:0;">
                            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                                <span style="font-size:0.72rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;">${post.platform}</span>
                                <span style="font-size:0.68rem;padding:2px 6px;background:var(--bg-secondary);border-radius:10px;color:var(--text-muted);">${post.mediaType}</span>
                            </div>
                            <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);margin-bottom:10px;line-height:1.5;">"${post.content}"</div>
                            <div style="display:flex;gap:16px;font-size:0.75rem;color:var(--text-muted);">
                                <span><i class="fas fa-chart-line" style="color:var(--hbo-charcoal);margin-right:4px;"></i> ${post.engagement} engagements</span>
                                <span><i class="fas fa-heart" style="color:#555;margin-right:4px;"></i> ${post.likes}</span>
                                <span><i class="fas fa-comment" style="margin-right:4px;"></i> ${post.comments}</span>
                                <span><i class="fas fa-share" style="margin-right:4px;"></i> ${post.shares}</span>
                            </div>
                        </div>
                        <div style="flex-shrink:0;text-align:center;">
                            <div style="font-size:1.3rem;font-weight:800;color:var(--hbo-black);">#${i + 1}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
