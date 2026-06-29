/* ============================================================
   HBO Culture Engine - Data Overrides
   Patches shared streaming data (MOCK_DATA_NEW) with
   HBO-specific fields. Drop the 700 shows into hboTitles below.
   ============================================================ */

(function () {
    /* ── HBO / Max UK catalogue ──────────────────────────────
       Replace skyTitles with HBO originals and Max exclusives.
       When the 700-show list arrives, replace this array.       */
    MOCK_DATA_NEW.hboTitles = [
        "The Last of Us",
        "House of the Dragon",
        "Succession",
        "The White Lotus",
        "Euphoria",
        "Barry",
        "True Detective",
        "The Wire",
        "Game of Thrones",
        "Band of Brothers",
        "The Penguin",
        "Interview with the Vampire",
        "The Righteous Gemstones",
        "Industry",
        "His Dark Materials",
        "Mare of Easttown",
        "Station Eleven",
        "Westworld",
        "Insecure",
        "Veep",
        "Silicon Valley",
        "Six Feet Under",
        "The Sopranos",
        "Rome",
        "Curb Your Enthusiasm",
        "Perry Mason",
        "The Outsider",
        "Watchmen",
        "Chernobyl",
        "Dune: Part One",
        "Dune: Part Two",
        "The Batman",
        "Elvis",
        "Joker",
        "Joker: Folie a Deux",
        "Barbie",
        "Wonka",
        "Oppenheimer",
        "Aquaman",
        "Shazam!"
    ];

    /* ── AI Weekly Briefing ──────────────────────────────── */
    MOCK_DATA_NEW.aiBriefing = {
        "overview": "Three TikTok moments this week line up cleanly with catalogue we already have. Euphoria S3 is dominating organically - fans are doing the work for us across multiple hashtags. The Last of Us has a growing rewatch community building around the S2 premiere buzz. House of the Dragon lore content is spiking on YouTube and TikTok. Reactive content sitting right there.",
        "insights": [
            {
                "title": "Euphoria S3 Takeover",
                "text": "Euphoria S3 is trending on TikTok across multiple hashtags: #euphoria, #zendaya, #euphoriaedit, #euphoriaS3, #euphoriaseason2. HBO Max is the home - opportunity to capitalise on organic fan momentum."
            },
            {
                "title": "The Last of Us Rewatch Wave",
                "text": "S2 premiere buzz is driving S1 rewatch content across TikTok and Reddit. Fan edits, lore breakdowns and reaction compilations are gaining significant traction."
            },
            {
                "title": "House of the Dragon Lore",
                "text": "House of the Dragon lore content is spiking. YouTube essays and TikTok timeline explainers are pulling in millions of views. Opportunity to surface HBO's back catalogue of Targaryen content."
            }
        ]
    };

    /* ── Spotlight ───────────────────────────────────────── */
    MOCK_DATA_NEW.spotlight = {
        "trigger": {
            "title": "Euphoria S3 trending on TikTok",
            "platform": "TikTok",
            "detail": "Multiple hashtags trending - #euphoria #zendaya #euphoriaS3 #euphoriaedit all active simultaneously"
        },
        "talent": "Zendaya & Euphoria cast",
        "hboTitles": [
            "Euphoria S1-3 (HBO Max)"
        ],
        "strategicRecommendation": "Lean into organic HBO momentum - surface Euphoria to fan-edit communities and position HBO Max as the UK home for the full Euphoria universe ahead of the S3 finale.",
        "relevance": "high"
    };

    /* ── Opportunities ───────────────────────────────────── */
    MOCK_DATA_NEW.opportunities = [
        {
            "id": 1,
            "urgency": "high",
            "type": "genre",
            "typeLabel": "Organic Hashtag",
            "trigger": {
                "title": "Euphoria S3 takeover on TikTok",
                "platform": "TikTok",
                "platformColour": "#ff0050",
                "detail": "#euphoria / #zendaya / #euphoriaS3 / #euphoriaedit all trending simultaneously"
            },
            "hboTitles": [
                {
                    "title": "Euphoria S1-3",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Euphoria fan community",
            "strategicRecommendation": "Capitalise on Euphoria S3 multi-hashtag trend - position HBO Max as the UK destination for S3 and the full back catalogue. Fan edit content is the engine here.",
            "relevanceScore": "high",
            "timing": "This week - multi-hashtag momentum"
        },
        {
            "id": 2,
            "urgency": "high",
            "type": "actor",
            "typeLabel": "Actor Connection",
            "trigger": {
                "title": "The Last of Us S2 buzz building",
                "platform": "TikTok",
                "platformColour": "#ff0050",
                "detail": "S1 rewatch content, lore breakdowns and cast content trending ahead of S2"
            },
            "hboTitles": [
                {
                    "title": "The Last of Us S1 & S2",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Pedro Pascal, Bella Ramsey",
            "strategicRecommendation": "Surface The Last of Us S1 to the rewatch community while S2 buzz builds. Pedro Pascal content is the hook - his multi-franchise presence is bringing in new audiences.",
            "relevanceScore": "high",
            "timing": "This week - pre-premiere window"
        },
        {
            "id": 3,
            "urgency": "medium",
            "type": "franchise",
            "typeLabel": "Franchise Link",
            "trigger": {
                "title": "House of the Dragon lore content spiking",
                "platform": "TikTok",
                "platformColour": "#ff0050",
                "detail": "Timeline explainers and Targaryen lore videos pulling millions of views"
            },
            "hboTitles": [
                {
                    "title": "House of the Dragon S1 & S2",
                    "where": "HBO Max",
                    "type": "Series"
                },
                {
                    "title": "Game of Thrones S1-8",
                    "where": "HBO Max",
                    "type": "Series"
                }
            ],
            "talent": "Game of Thrones franchise",
            "strategicRecommendation": "Join the lore conversation - curate the full Targaryen saga across both shows and surface the complete HBO universe around the cultural momentum.",
            "relevanceScore": "medium",
            "timing": "This week - lore content window"
        }
    ];

    /* ── HBO UK Social Posts ─────────────────────────────── */
    MOCK_DATA_NEW.hboPosts = [
        {
            "platform": "Instagram",
            "content": "She's built different. Euphoria S3 is here - and nothing will ever be the same. #Euphoria #HBO",
            "engagement": "18.4K",
            "likes": "18.1K",
            "comments": "312",
            "shares": "-",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "Instagram",
            "content": "The fungus doesn't care about your feelings. The Last of Us S2 premieres this Sunday. #TheLastOfUs #HBO",
            "engagement": "14.6K",
            "likes": "14.2K",
            "comments": "423",
            "shares": "-",
            "sentiment": "positive",
            "mediaType": "Reel"
        },
        {
            "platform": "TikTok",
            "content": "POV: you just finished The White Lotus S3 and you don't know what to do with yourself",
            "engagement": "22.1K",
            "likes": "21.8K",
            "comments": "198",
            "shares": "3.2K",
            "sentiment": "positive",
            "mediaType": "Video"
        },
        {
            "platform": "Instagram",
            "content": "Every Succession line hits different after the finale. We're still not over it. #Succession #HBO",
            "engagement": "9.8K",
            "likes": "9.6K",
            "comments": "87",
            "shares": "-",
            "sentiment": "positive",
            "mediaType": "Carousel"
        },
        {
            "platform": "X",
            "content": "The dragon is coming. House of the Dragon returns. Are you ready? #HouseOfTheDragon #HBO",
            "engagement": "7.3K",
            "likes": "6.9K",
            "comments": "401",
            "shares": "892",
            "sentiment": "positive",
            "mediaType": "Post"
        }
    ];

    /* ── Patch ramdamTikTok: add hboAngle ───────────────── */
    const tiktokAngles = [
        "Lean into 'This, not that' with HBO Max vs linear TV - position streaming as the superior choice",
        "The Last of Us / Euphoria cast content fits perfectly here - showcase stars living their best lives",
        "Succession and White Lotus characters embody self-awareness - great clip content opportunity",
        "Character reaction moments from Euphoria and White Lotus will perform here",
        "HBO originals are the life mission - premium drama is the destination",
        "Euphoria and House of the Dragon characters are obsession-worthy - lean into fandom energy",
        "Energetic HBO Max trailer edits and hype content work for this trend",
        "White Lotus and Succession anxiety moments - highly relatable character beats"
    ];
    if (MOCK_DATA_NEW.ramdamTikTok) {
        MOCK_DATA_NEW.ramdamTikTok = MOCK_DATA_NEW.ramdamTikTok.map((item, i) => ({
            ...item,
            hboAngle: tiktokAngles[i] || "Opportunity for HBO Max content"
        }));
    }

    /* ── Patch ramdamInstagram: add hboAngle ────────────── */
    const instaAngles = [
        "HBO Max has / she's hilarious - lean into character comedy moments from White Lotus and Succession",
        "Bad day content works perfectly with Euphoria emotional beats and cast interview moments",
        "Therapy and mental health themes run through Industry, Euphoria and Succession - authentic angle",
        "HBO Max and the cinema experience - best of both worlds framing for Max vs streaming",
        "Spring reset energy with new HBO Max premieres - fresh start, new season messaging",
        "Elegant drama moments from White Lotus and Succession - HBO's prestige aesthetic plays perfectly"
    ];
    if (MOCK_DATA_NEW.ramdamInstagram) {
        MOCK_DATA_NEW.ramdamInstagram = MOCK_DATA_NEW.ramdamInstagram.map((item, i) => ({
            ...item,
            hboAngle: instaAngles[i] || "Opportunity for HBO Max content"
        }));
    }

    /* ── Patch upcomingReleases: skyRelevance → hboRelevance */
    if (MOCK_DATA_NEW.upcomingReleases) {
        MOCK_DATA_NEW.upcomingReleases = MOCK_DATA_NEW.upcomingReleases.map(item => ({
            ...item,
            hboRelevance: item.skyRelevance || "low"
        }));
    }

    /* ── Patch MOCK_DATA_PREV to match structure ─────────── */
    if (typeof MOCK_DATA_PREV !== 'undefined') {
        MOCK_DATA_PREV.hboTitles = MOCK_DATA_NEW.hboTitles;
        MOCK_DATA_PREV.hboPosts = MOCK_DATA_NEW.hboPosts;
        MOCK_DATA_PREV.opportunities = MOCK_DATA_NEW.opportunities;
        MOCK_DATA_PREV.spotlight = MOCK_DATA_NEW.spotlight;
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
            MOCK_DATA_PREV.upcomingReleases = MOCK_DATA_PREV.upcomingReleases.map(item => ({
                ...item,
                hboRelevance: item.skyRelevance || "low"
            }));
        }
    }

    /* ── Set active dataset ──────────────────────────────── */
    MOCK_DATA = MOCK_DATA_NEW;
})();
