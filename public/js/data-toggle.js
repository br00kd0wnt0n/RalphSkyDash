/* ============================================================
   Dataset toggle - swap MOCK_DATA between MOCK_DATA_NEW and
   MOCK_DATA_PREV and re-render every widget.
   ============================================================ */
(function () {
    function rerender() {
        if (typeof renderDashboard === 'function') renderDashboard();
        if (typeof renderStreamingCharts === 'function') {
            const platformTab = document.querySelector('.tabs-bar .tab.active');
            const typeBtn = document.querySelector('.filter-btn[data-type].active');
            renderStreamingCharts(platformTab?.dataset.platform || 'all', typeBtn?.dataset.type || 'all');
        }
        if (typeof renderOpportunities === 'function') {
            renderOpportunities(
                document.getElementById('urgencyFilter')?.value || 'all',
                document.getElementById('typeFilter')?.value || 'all'
            );
        }
        if (typeof renderSocialSection === 'function') renderSocialSection();
        if (typeof renderCalendarSection === 'function') renderCalendarSection();
        if (typeof renderSkyPerformance === 'function') renderSkyPerformance();
    }

    function attach() {
        const select = document.getElementById('datasetToggle');
        if (!select) return;
        select.addEventListener('change', (e) => {
            MOCK_DATA = e.target.value === 'prev' ? MOCK_DATA_PREV : MOCK_DATA_NEW;
            rerender();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attach);
    } else {
        attach();
    }
})();
