/* ============================================================
   HBO Culture Engine - Data Overrides
   Source: HBO SHOWS.xlsx — 29 June 2026
   Patches shared streaming data (MOCK_DATA_NEW) with
   HBO Max-specific chart data and editorial content.
   ============================================================ */

(function () {
    /* ── HBO Max UK current chart titles (TV + Film) ─────────
       Used to badge "On HBO" across all streaming chart rows.  */
    MOCK_DATA_NEW.hboTitles = [
        "The Pitt",
        "House of the Dragon",
        "Life, Larry and the Pursuit of Unhappiness",
        "Rick and Morty",
        "The Killings at Parrish Station",
        "Euphoria",
        "Proud",
        "90 Day Fiancé",
        "Evil Lives Here: My Child the Killer",
        "Blade",
        "Ready Player One",
        "They Will Kill You",
        "Blade Runner",
        "Rampage",
        "I Am Legend",
        "A Dangerous Son",
        "Wonder Woman 1984",
        "The Bride!",
        "The Welcome Table"
    ];

    /* ── HBO Max TV Chart (Top 10) ───────────────────────────  */
    MOCK_DATA_NEW.hbomaxTV = [
        {"rank": 1, "title": "The Pitt",                                    "platform": "HBOMax", "movement": "same", "daysInChart": 13},
        {"rank": 2, "title": "House of the Dragon",                         "platform": "HBOMax", "movement": "same", "daysInChart": 7},
        {"rank": 3, "title": "Life, Larry and the Pursuit of Unhappiness",  "platform": "HBOMax", "movement": "new",  "daysInChart": 0},
        {"rank": 4, "title": "Rick and Morty",                              "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1},
        {"rank": 5, "title": "The Killings at Parrish Station",             "platform": "HBOMax", "movement": "down", "daysInChart": 2,  "change": 1},
        {"rank": 6, "title": "Euphoria",                                    "platform": "HBOMax", "movement": "same", "daysInChart": 13},
        {"rank": 7, "title": "Proud",                                       "platform": "HBOMax", "movement": "down", "daysInChart": 9,  "change": 2},
        {"rank": 8, "title": "The Pitt",                                    "platform": "HBOMax", "movement": "same", "daysInChart": 10},
        {"rank": 9, "title": "90 Day Fiancé",                               "platform": "HBOMax", "movement": "new",  "daysInChart": 1},
        {"rank": 10,"title": "Evil Lives Here: My Child the Killer",        "platform": "HBOMax", "movement": "same", "daysInChart": 12}
    ];

    /* ── HBO Max Film Chart (Top 10) ─────────────────────────  */
    MOCK_DATA_NEW.hbomaxFilm = [
        {"rank": 1, "title": "Blade",             "platform": "HBOMax", "movement": "same", "daysInChart": 2},
        {"rank": 2, "title": "Ready Player One",  "platform": "HBOMax", "movement": "same", "daysInChart": 13},
        {"rank": 3, "title": "They Will Kill You","platform": "HBOMax", "movement": "same", "daysInChart": 13},
        {"rank": 4, "title": "Blade Runner",      "platform": "HBOMax", "movement": "same", "daysInChart": 2},
        {"rank": 5, "title": "Rampage",           "platform": "HBOMax", "movement": "same", "daysInChart": 13},
        {"rank": 6, "title": "I Am Legend",       "platform": "HBOMax", "movement": "new",  "daysInChart": 0},
        {"rank": 7, "title": "A Dangerous Son",   "platform": "HBOMax", "movement": "down", "daysInChart": 1,  "change": 1},
        {"rank": 8, "title": "Wonder Woman 1984", "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1},
        {"rank": 9, "title": "The Bride!",        "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1},
        {"rank": 10,"title": "The Welcome Table", "platform": "HBOMax", "movement": "same", "daysInChart": 4}
    ];

    /* ── AI Weekly Briefing ──────────────────────────────────  */
    MOCK_DATA_NEW.aiBriefing = {
        "overview": "House of the Dragon is the dominant cultural signal this week — it's #2 on HBO Max, #3 on WikiViews TV, and the majority of HBO's highest-performing social posts are HOTD content. The Bubbline/Adventure Time nostalgia wave is a surprise breakout: 5.5M Instagram views and 4.1M TikTok views on a single post. Life, Larry and the Pursuit of Unhappiness is brand new this week and already generating organic social content. The Pitt holds at #1 on the TV chart for the second week running.",
        "insights": [
            {
                "title": "House of the Dragon Dominates",
                "text": "HOTD is driving HBO's highest-engagement social posts this week — Harry Collett content, Daemon moments and Rhaenyra clips are all pulling 100K+ engagements. #HOTD is the thread to pull right now across every platform."
            },
            {
                "title": "Bubbline Nostalgia Explosion",
                "text": "Adventure Time: Bubblegum and Marceline announcement content hit 5.5M Instagram impressions and 4.1M TikTok views this week — the highest single-post numbers in the dataset. Huge opportunity to surface the Adventure Time back catalogue on HBO Max."
            },
            {
                "title": "Life, Larry — New Drop, Real Buzz",
                "text": "Life, Larry and the Pursuit of Unhappiness debuted this week as a new entry on HBO Max and is already generating organic Instagram content. Larry David energy is landing — lean into the character humour and UK cultural timing."
            }
        ]
    };

    /* ── Spotlight ───────────────────────────────────────────  */
    MOCK_DATA_NEW.spotlight = {
        "trigger": {
            "title": "HOTD cast content driving record HBO engagement",
            "platform": "TikTok & Instagram",
            "detail": "Harry Collett / Jace Velaryon content pulling 100K–600K engagements per post — the most active talent moment for HBO this week"
        },
        "talent": "Harry Collett & House of the Dragon cast",
        "hboTitles": [
            "House of the Dragon S1 & S2 (HBO Max)",
            "Game of Thrones S1–8 (HBO Max)"
        ],
        "strategicRecommendation": "Activate around the HOTD cast moment — surface the full Targaryen saga catalogue, create lore content, and position HBO Max as the home of the complete Westeros universe while social engagement is at its peak.",
        "relevance": "high"
    };

    /* ── Opportunities ───────────────────────────────────────  */
    MOCK_DATA_NEW.opportunities = [
        {
            "id": 1,
            "urgency": "high",
            "type": "genre",
            "typeLabel": "Organic Social",
            "trigger": {
                "title": "HOTD cast breaking engagement records",
                "platform": "TikTok",
                "platformColour": "#ff0050",
                "detail": "Multiple Harry Collett posts hitting 100K–600K engagements. #HOTD trending. Rhaenyra and Daemon content performing across TikTok and Instagram."
            },
            "hboTitles": [
                {
                    "title": "House of the Dragon S1 & S2",
                    "where": "HBO Max",
                    "type": "Series"
                },
                {
                    "title": "Game of Thrones S1–8",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Harry Collett, Matt Smith, Emma D'Arcy",
            "strategicRecommendation": "This is the biggest organic moment for HBO right now. Join the conversation with character content, lore drops and cast highlights. Surface the full Targaryen back catalogue and use #HOTD momentum to drive Max subscriptions.",
            "relevanceScore": "high",
            "timing": "This week — peak HOTD social window"
        },
        {
            "id": 2,
            "urgency": "high",
            "type": "catalogue",
            "typeLabel": "Nostalgia Wave",
            "trigger": {
                "title": "Bubbline / Adventure Time announcement goes viral",
                "platform": "Instagram",
                "platformColour": "#e1306c",
                "detail": "Adventure Time: Bubblegum & Marceline series announcement hit 5.5M impressions on Instagram and 4.1M TikTok views — the top-performing HBO post this week by a significant margin."
            },
            "hboTitles": [
                {
                    "title": "Adventure Time (full series)",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Adventure Time franchise",
            "strategicRecommendation": "Surface the Adventure Time catalogue on HBO Max now while the Bubbline announcement is driving organic traffic. Nostalgia content for the franchise will perform across all platforms this week.",
            "relevanceScore": "high",
            "timing": "This week — announcement halo window"
        },
        {
            "id": 3,
            "urgency": "medium",
            "type": "premiere",
            "typeLabel": "New Entry",
            "trigger": {
                "title": "Life, Larry debuts on HBO Max",
                "platform": "Instagram",
                "platformColour": "#e1306c",
                "detail": "Life, Larry and the Pursuit of Unhappiness premiered this week as a new entry — already generating organic social content on Instagram with Larry David character moments."
            },
            "hboTitles": [
                {
                    "title": "Life, Larry and the Pursuit of Unhappiness",
                    "where": "HBO Max",
                    "type": "Series"
                },
                {
                    "title": "Curb Your Enthusiasm (HBO Max)",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Larry David",
            "strategicRecommendation": "New premiere window — amplify the debut with Larry David humour content and cross-promote the Curb Your Enthusiasm back catalogue to convert new viewers into franchise fans on HBO Max.",
            "relevanceScore": "medium",
            "timing": "This week — premiere window"
        }
    ];

    /* ── HBO UK Social Posts (real data, ranked by engagement) ─ */
    MOCK_DATA_NEW.hboPosts = [
        {
            "platform": "TikTok",
            "content": "Looking back on Bubbline. Excited to see what's next in Adventure Time: Bubblegum and Marceline, a new series coming to HBO Max.",
            "engagement": "1.2M",
            "likes": "1.09M",
            "comments": "6.1K",
            "shares": "147K",
            "views": "4.1M",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "Looking back on Bubbline. Excited to see what's next in #AdventureTime: Bubblegum and Marceline, a new series coming to HBO Max.",
            "engagement": "563K",
            "likes": "559K",
            "comments": "4.7K",
            "shares": "-",
            "views": "5.6M",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "TikTok",
            "content": "For the queen. #HOTD #HouseOfTheDragon #HarryCollett\n\nBRING AEGON THE USURPER TO ME",
            "engagement": "619K",
            "likes": "602K",
            "comments": "4.1K",
            "shares": "12.8K",
            "views": "3.2M",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "TikTok",
            "content": "Mourning the king that never was. #HOTD #HouseOfTheDragon #HarryCollett #Jace",
            "engagement": "275K",
            "likes": "253K",
            "comments": "2.4K",
            "shares": "20.3K",
            "views": "840K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "TikTok",
            "content": "Serving face until the end. #HOTD #HouseOfTheDragon #JaceVelaryon #HarryCollett",
            "engagement": "252K",
            "likes": "241K",
            "comments": "911",
            "shares": "10.1K",
            "views": "986K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "I'm coming home, Daisy. #LifeLarryAmerica\n\nLife, Larry and the Pursuit of Unhappiness premieres tonight at 9pm ET on HBO Max.",
            "engagement": "219K",
            "likes": "218K",
            "comments": "1.2K",
            "shares": "-",
            "views": "4.6M",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "TikTok",
            "content": "This aged well @harrycollett #HouseoftheDragon #HOTD #JacaerysVelaryon #HarryCollett",
            "engagement": "164K",
            "likes": "151K",
            "comments": "1.5K",
            "shares": "11K",
            "views": "709K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "Can't knock the hustle. #JAYZin8 an 8-part Documentary Series featuring Jay-Z in conversation with Rick Rubin, premieres this fall on HBO Max.",
            "engagement": "132K",
            "likes": "129K",
            "comments": "3.5K",
            "shares": "-",
            "views": "2.1M",
            "sentiment": "positive",
            "mediaType": "Post"
        },
        {
            "platform": "TikTok",
            "content": "I'm coming home, Daisy. #LifeLarryAmerica #LarryDavid Life, Larry and the Pursuit of Unhappiness premieres tonight at 9pm ET on HBO Max.",
            "engagement": "125K",
            "likes": "108K",
            "comments": "352",
            "shares": "16.2K",
            "views": "1.2M",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "TikTok",
            "content": "First of her name. #HOTD #RhaenryaTargaryen #HouseOfTheDragon",
            "engagement": "114K",
            "likes": "110K",
            "comments": "1.6K",
            "shares": "3K",
            "views": "457K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "To a real one. #HOTD",
            "engagement": "111K",
            "likes": "111K",
            "comments": "478",
            "shares": "-",
            "views": "-",
            "sentiment": "positive",
            "mediaType": "Post"
        },
        {
            "platform": "Instagram",
            "content": "Nothing like the love between a girl and her dog. #Superman",
            "engagement": "110K",
            "likes": "110K",
            "comments": "361",
            "shares": "-",
            "views": "175K",
            "sentiment": "positive",
            "mediaType": "Post"
        },
        {
            "platform": "TikTok",
            "content": "The winter wolves are here. #HOTD #HouseOfTheDragon #MattSmith #DaemonTargaryen #TommyFlanagan",
            "engagement": "108K",
            "likes": "104K",
            "comments": "678",
            "shares": "2.8K",
            "views": "933K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "The battles have just begun. #HOTD",
            "engagement": "87.8K",
            "likes": "87.2K",
            "comments": "600",
            "shares": "-",
            "views": "2.5M",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "Instagram",
            "content": "Pulp is a sensitive subject. #TheSopranos",
            "engagement": "82.8K",
            "likes": "82.4K",
            "comments": "402",
            "shares": "-",
            "views": "522K",
            "sentiment": "positive",
            "mediaType": "Post"
        },
        {
            "platform": "Instagram",
            "content": "This aged well harrycollettactor\n\n#HouseoftheDragon #HOTD #JacaerysVelaryon #HarryCollett",
            "engagement": "82K",
            "likes": "81.4K",
            "comments": "655",
            "shares": "-",
            "views": "803K",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "Instagram",
            "content": "The Battle of the Gullet went crazy. #HOTD",
            "engagement": "79.2K",
            "likes": "79K",
            "comments": "294",
            "shares": "-",
            "views": "1.3M",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "TikTok",
            "content": "Replying to @Mercy Bubbline 4 life. #AdventureTime #BubblegumAndMarceline",
            "engagement": "75.4K",
            "likes": "70.5K",
            "comments": "286",
            "shares": "4.6K",
            "views": "305K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "The winter wolves are here. #HOTD",
            "engagement": "70K",
            "likes": "69.4K",
            "comments": "564",
            "shares": "-",
            "views": "886K",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "Instagram",
            "content": "Every universe needs a hero. We got Stuart.\n\nFrom the world of #TheBigBangTheory, Stuart Fails to Save the Universe premieres in just one month on HBO Max. #SFTSTU",
            "engagement": "65.7K",
            "likes": "65.3K",
            "comments": "420",
            "shares": "-",
            "views": "-",
            "sentiment": "positive",
            "mediaType": "Post"
        }
    ];

    /* ── Patch ramdamTikTok: add hboAngle ───────────────────  */
    const tiktokAngles = [
        "HOTD political power plays — 'We have other options' maps perfectly to Rhaenyra and the Green Council scheming. Clip from HOTD S2 council scenes.",
        "Euphoria emotional beats and The Pitt high-stakes moments — character reactions that genuinely trigger audiences. Perfect clip content.",
        "Daemon Targaryen 'No no no' denial moments and The Pitt crisis scenes — HBO drama has the most intense reaction-worthy content.",
        "Larry David / Life Larry chaos energy — this trend was made for Larry's social awkwardness. New show on HBO Max this week.",
        "Succession and White Lotus characters embody 'rich in life' — luxury prestige drama is HBO's core identity. Perfect aesthetic match."
    ];
    if (MOCK_DATA_NEW.ramdamTikTok) {
        MOCK_DATA_NEW.ramdamTikTok = MOCK_DATA_NEW.ramdamTikTok.map((item, i) => ({
            ...item,
            hboAngle: tiktokAngles[i] || "Opportunity for HBO Max content"
        }));
    }

    /* ── Patch ramdamInstagram: add hboAngle ────────────────  */
    const instaAngles = [
        "Bubbline love story — 'I would do anything for you' is the Bubbline relationship in a sentence. Adventure Time content going viral this week.",
        "HBO Max cast behind-the-scenes mini vlogs — HOTD and The Pitt casts are active and content-ready for carousel formats.",
        "Rhaenyra Targaryen power grip moments — 'girl grip' energy across HOTD. Strong character clip content for this trend.",
        "HOTD political scheming — Plan A (the Blacks) vs Plan B (the Greens). The show literally runs on this tension.",
        "Life Larry humour — Larry David's whole persona is 'can we reschedule'. New premiere on HBO Max this week, perfect timing.",
        "The Pitt authentic ER moments — raw, unfiltered healthcare drama. 'Wait let me wipe the camera' energy meets prestige TV."
    ];
    if (MOCK_DATA_NEW.ramdamInstagram) {
        MOCK_DATA_NEW.ramdamInstagram = MOCK_DATA_NEW.ramdamInstagram.map((item, i) => ({
            ...item,
            hboAngle: instaAngles[i] || "Opportunity for HBO Max content"
        }));
    }

    /* ── Patch upcomingReleases: add hboRelevance ───────────  */
    const releaseRelevance = [
        "low",     // Minions & Monsters
        "medium",  // The Invite
        "low",     // Nirvanna the Band
        "low",     // Birds of War
        "medium",  // Moana (2026)
        "low",     // Evil Dead Burn
        "high",    // The Odyssey (Damon, Holland, Pattinson)
        "low",     // Diamond Made Man Part 2
        "low",     // Brunello
        "medium",  // WHAM! 10 Days in China (documentary)
        "high"     // Spider-Man: Brand New Day (Holland + Zendaya)
    ];
    if (MOCK_DATA_NEW.upcomingReleases) {
        MOCK_DATA_NEW.upcomingReleases = MOCK_DATA_NEW.upcomingReleases.map((item, i) => ({
            ...item,
            hboRelevance: releaseRelevance[i] || "low"
        }));
    }

    /* ── Patch MOCK_DATA_PREV to match structure ─────────────  */
    if (typeof MOCK_DATA_PREV !== 'undefined') {
        MOCK_DATA_PREV.hboTitles  = MOCK_DATA_NEW.hboTitles;
        MOCK_DATA_PREV.hbomaxTV   = MOCK_DATA_NEW.hbomaxTV;
        MOCK_DATA_PREV.hbomaxFilm = MOCK_DATA_NEW.hbomaxFilm;
        MOCK_DATA_PREV.hboPosts   = MOCK_DATA_NEW.hboPosts;
        MOCK_DATA_PREV.opportunities = MOCK_DATA_NEW.opportunities;
        MOCK_DATA_PREV.spotlight  = MOCK_DATA_NEW.spotlight;
        MOCK_DATA_PREV.aiBriefing = MOCK_DATA_NEW.aiBriefing;
        if (MOCK_DATA_PREV.ramdamTikTok) {
            MOCK_DATA_PREV.ramdamTikTok = MOCK_DATA_PREV.ramdamTikTok.map((item, i) => ({
                ...item,
                hboAngle: tiktokAngles[i] || "Opportunity for HBO Max content"
            }));
        }
        if (MOCK_DATA_PREV.ramdamInstagram) {
            MOCK_DATA_PREV.ramdamInstagram = MOCK_DATA_PREV.ramdamInstagram.map((item, i) => ({
                ...item,
                hboAngle: instaAngles[i] || "Opportunity for HBO Max content"
            }));
        }
        if (MOCK_DATA_PREV.upcomingReleases) {
            MOCK_DATA_PREV.upcomingReleases = MOCK_DATA_PREV.upcomingReleases.map((item, i) => ({
                ...item,
                hboRelevance: releaseRelevance[i] || "low"
            }));
        }
    }

    /* ── Set active dataset ──────────────────────────────────  */
    MOCK_DATA = MOCK_DATA_NEW;
})();
