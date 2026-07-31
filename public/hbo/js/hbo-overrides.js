/* ============================================================
   HBO Culture Engine - Data Overrides
   Source: HBO SHOWS.xlsx — 29 June 2026
   Patches shared streaming data (MOCK_DATA_NEW) with
   HBO Max UK-specific chart data and editorial content.
   ============================================================ */

(function () {
    /* ── HBO Max UK catalogue ────────────────────────────────
       182 titles verified as available on HBO Max UK (provider =
       HBO Max / HBO Max Amazon Channel, monetization = FLATRATE),
       pulled live via Apify, July 2026. Note: the source's provider
       filter is unreliable, so results are filtered on provider_name
       after fetch. Powers the "On HBO Max UK" badge.           */
    MOCK_DATA_NEW.hboTitles = [
        "2 Broke Girls",
        "2001: A Space Odyssey",
        "300",
        "A Knight of the Seven Kingdoms",
        "A Minecraft Movie",
        "Adventure Time",
        "American History X",
        "Argo",
        "Austin Powers: International Man of Mystery",
        "Band of Brothers",
        "Banshee",
        "Barry",
        "Barry Lyndon",
        "Batman",
        "Batman Begins",
        "Before Sunrise",
        "Big Little Lies",
        "Blade",
        "Blade Runner",
        "Boardwalk Empire",
        "Boogie Nights",
        "Bring It On",
        "Carnivàle",
        "Casablanca",
        "Charlie and the Chocolate Factory",
        "Clash of the Titans",
        "Common Side Effects",
        "Companion",
        "Crazy Rich Asians",
        "Crazy, Stupid, Love.",
        "Creature Commandos",
        "Curb Your Enthusiasm",
        "DTF St. Louis",
        "Doctor Sleep",
        "Don't Worry Darling",
        "Doom Patrol",
        "Dune",
        "Dune: Prophecy",
        "Dunkirk",
        "ER",
        "Eastbound & Down",
        "Edge of Tomorrow",
        "Elvis",
        "Entourage",
        "Euphoria",
        "Eyes Wide Shut",
        "Final Destination Bloodlines",
        "Flight of the Conchords",
        "Friends",
        "Fringe",
        "Full Circle",
        "Game of Thrones",
        "Generation Kill",
        "Girls",
        "Harley Quinn",
        "Harry Potter and the Philosopher's Stone",
        "Horrible Bosses",
        "House of the Dragon",
        "How To with John Wilson",
        "I Am Legend",
        "IT: Welcome to Derry",
        "Ilk ve Son",
        "Inception",
        "Industry",
        "Interstellar",
        "It",
        "John Adams",
        "John Wick",
        "Lee Cronin's the Mummy",
        "Life, Larry and the Pursuit of Unhappiness: An Almost History of America",
        "Little Shop of Horrors",
        "Mad Max: Fury Road",
        "Mad Men",
        "Magnolia",
        "Man of Steel",
        "Mare of Easttown",
        "Mean Girl Murders",
        "Mickey 17",
        "Miss Congeniality",
        "Mock the Week",
        "Mortal Kombat",
        "Mortal Kombat II",
        "My Adventures with Superman",
        "Mystic River",
        "Ocean's Eleven",
        "One Battle After Another",
        "One Tree Hill",
        "Our Flag Means Death",
        "Over the Garden Wall",
        "Pacific Rim",
        "Peacemaker",
        "Pillion",
        "Practical Magic",
        "President Curtis",
        "Pretty Little Liars",
        "Primal",
        "Proud",
        "Ready Player One",
        "Regular Show",
        "Rick and Morty",
        "Rooster",
        "Scavengers Reign",
        "Sex and the City",
        "Sharp Objects",
        "Silicon Valley",
        "Sinners",
        "Six Feet Under",
        "Smiling Friends",
        "Somebody Somewhere",
        "Steven Universe",
        "Stuart Fails to Save the Universe",
        "Succession",
        "Sully",
        "Superman",
        "Supernatural",
        "Taking Chance",
        "Task",
        "Tenet",
        "The Accountant",
        "The Amazing World of Gumball",
        "The Batman",
        "The Big Bang Theory",
        "The Bride!",
        "The Chair Company",
        "The Cleaning Lady",
        "The Comeback",
        "The Dark Knight",
        "The Dark Knight Rises",
        "The Dark Wizard",
        "The Deuce",
        "The Devil's Advocate",
        "The Goonies",
        "The Hangover",
        "The Jinx: The Life and Deaths of Robert Durst",
        "The Killings at Parrish Station",
        "The Last Samurai",
        "The Last of Us",
        "The Leftovers",
        "The Lego Batman Movie",
        "The Lord of the Rings: The Fellowship of the Ring",
        "The Man Who Knew Infinity",
        "The Matrix",
        "The Newsroom",
        "The Night Of",
        "The Notebook",
        "The O.C.",
        "The Outsider",
        "The Pacific",
        "The Penguin",
        "The Pitt",
        "The Prestige",
        "The Rehearsal",
        "The Righteous Gemstones",
        "The Shawshank Redemption",
        "The Shining",
        "The Sopranos",
        "The Staircase",
        "The Suicide Squad",
        "The Town",
        "The Vampire Diaries",
        "The White Lotus",
        "The Wire",
        "They Will Kill You",
        "Training Day",
        "Troy",
        "True Blood",
        "True Detective",
        "Two and a Half Men",
        "Unforgiven",
        "V for Vendetta",
        "Veep",
        "Vice Principals",
        "War Dogs",
        "Warrior",
        "Watchmen",
        "We Own This City",
        "Weapons",
        "Willy Wonka & the Chocolate Factory",
        "Wuthering Heights",
        "Young Sheldon",
        "Zero Stars",
        "Zodiac"
    ];

    /* ── HBO Max UK TV Chart (Top 10) ───────────────────────────  */
    MOCK_DATA_NEW.hbomaxTV = [
        {"rank": 1, "title": "The Pitt", "platform": "HBOMax", "movement": "same", "daysInChart": 13, "genre": "Drama", "talent": "Noah Wyle, Tracy Ifeachor, Patrick Ball, Katherine LaNasa, Supriya Ganesh, Fiona Dourif, Taylor Dearden, Isa Briones, Gerran Howell, Shabana Azeez, Sepideh Moafi", "distributor": "HBO Max ", "description": "The staff of Pittsburgh's Trauma Medical Center work around the clock to save lives in an overcrowded and underfunded emergency department.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/y/w350/yfaibd8dqaafukyaxmnqokpyakd.webp"},
        {"rank": 2, "title": "House of the Dragon", "platform": "HBOMax", "movement": "same", "daysInChart": 7, "genre": "Fantasy", "talent": "Paddy Considine, Matt Smith, Olivia Cooke, Emma D'Arcy, Steve Toussaint, Eve Best, Emily Carey, Milly Alcock, Fabien Frankel, Sonoya Mizuno, Rhys Ifans", "distributor": "HBO Max ", "description": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/1/w350/1x4h40fcb4wwumibk0aut4zrbav.webp"},
        {"rank": 3, "title": "Life, Larry and the Pursuit of Unhappiness", "platform": "HBOMax", "movement": "new", "daysInChart": 0, "genre": "Comedy", "talent": "Larry David", "distributor": "HBO Max ", "description": "An improvised, comedic approach to major events in American history in celebration of the 250th anniversary of the founding of the United States.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/e/w350/ea8lwlhaufqrzzek25xggzcgimu.webp"},
        {"rank": 4, "title": "Rick and Morty", "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1, "genre": "Animation", "talent": "Justin Roiland, Chris Parnell, Spencer Grammer, Sarah Chalke, Kari Wahlgren, Tom Kenny", "distributor": "Warner Bros. Television", "description": "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/q/w350/qjdfo3ahgamf2rcmhoqngjbbzw1.webp"},
        {"rank": 5, "title": "The Killings at Parrish Station", "platform": "HBOMax", "movement": "down", "daysInChart": 2, "change": 1, "genre": "Stan", "talent": "Mia Wasikowska, Heather Mitchell, Xavier Samuel, Robert Taylor, Alan Dale, Emma Lung, Doris Younane", "description": "It’s 1987, and Detective Georgia Cooke is called in to investigate the massacre of four scientists who have been brutally murdered in inexplicable ways, with a lone survivor the obvious suspect. But as Georgia digs deeper, unravelling a complex case entangled in mania, ritual, and the occult, her obsessive quest for the truth spirals into a nightmare that will put her family, career, and sanity on the line. 37 years later, a chilling new spree of murders will pull Georgia back into this nightmare as she confronts the terrifying possibility that the horrors at Parrish Station were never fully buried.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/b/w350/bhobx6iddh5esukvezpxkgjbvgh.webp"},
        {"rank": 6, "title": "Euphoria", "platform": "HBOMax", "movement": "same", "daysInChart": 13, "genre": "Drama", "talent": "Zendaya, Hunter Schafer, Sydney Sweeney, Algee Smith, Jacob Elordi, Alexa Demie, Angus Cloud, Barbie Ferreira, Maude Apatow, Javon Walton, Dominic Fike, Eric Dane, Storm Reid, Nika King, Austin Abrams, Martha Kelly, Chloe Cherry, Adewale Akinnuoye-Agbaje, Toby Wallace", "distributor": "HBO Max ", "description": "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/a/w350/ajrg7okotmpwg5c8opz8a93azpy.webp"},
        {"rank": 7, "title": "Proud", "platform": "HBOMax", "movement": "down", "daysInChart": 9, "change": 2, "genre": "Drama", "talent": "Ignacy Liss, Maria Sobocińska, Kamil Studnicki, Maja Ostaszewska", "distributor": "HBO Max ", "description": "The story of Filip, a young and irresponsible gay man who lives with the conviction that the world belongs to him and that this will never change. He is brazen, unpunished, thoughtless, impatient, beautiful, and young. He compensates for his inner lack of self-confidence with arrogance, admiration in others' eyes, and a job as a model. When a family tragedy strikes, his entire world is turned upside down.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/6/w350/6mfcuxwifm21dcj6enarnx10fx9.webp"},
        {"rank": 8, "title": "The Pitt", "platform": "HBOMax", "movement": "same", "daysInChart": 10, "genre": "Drama", "talent": "Noah Wyle, Tracy Ifeachor, Patrick Ball, Katherine LaNasa, Supriya Ganesh, Fiona Dourif, Taylor Dearden, Isa Briones, Gerran Howell, Shabana Azeez, Sepideh Moafi", "distributor": "HBO Max ", "description": "The staff of Pittsburgh's Trauma Medical Center work around the clock to save lives in an overcrowded and underfunded emergency department.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/y/w350/yfaibd8dqaafukyaxmnqokpyakd.webp"},
        {"rank": 9, "title": "90 Day Fiancé", "platform": "HBOMax", "movement": "new", "daysInChart": 1, "genre": "Reality-Show", "description": "Getting through customs is just the beginning. With just 90 days to wed on a fiancé visa, follow international couples as they attempt to overcome cultural barriers and family drama while in search of true love that knows no borders.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/w/w350/wjvdf4zysdxhoreqihlom4phrnp.webp"},
        {"rank": 10, "title": "Evil Lives Here: My Child the Killer", "platform": "HBOMax", "movement": "same", "daysInChart": 12, "genre": "Investigation Discovery", "description": "Follows parents confronting the unthinkable truth that their child has grown into a monster who committed horrifying crimes, featuring first-person interviews.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/1/w350/12s6wcl04ojfqtdgcjcjdj6mlth.webp"}
    ];

    /* ── HBO Max UK Film Chart (Top 10) ─────────────────────────  */
    MOCK_DATA_NEW.hbomaxFilm = [
        {"rank": 1, "title": "Blade", "platform": "HBOMax", "movement": "same", "daysInChart": 2, "genre": "Superhero", "talent": "Wesley Snipes, Stephen Dorff, Traci Lords, Tim Guinee, Sanaa Lathan, Donna Wong, Shannon Lee, Jeff Imada, Kris Kristofferson, N'Bushe Wright, Donal Logue, Udo Kier, Arly Jover, Kevin Patrick Walls, Eric Edwards, Carmen Thomas, Stephen Norrington, Sidney S. Liufau", "distributor": "Warner Bros. Pictures", "description": "When Blades mother was bitten by a vampire during pregnancy, she did not know that she gave her son a special gift while dying: All the good vampire attributes in combination with the best human skills. Blade and his mentor Whistler battle an evil vampire rebel (Deacon Frost) who plans to take over the outdated vampire council, capture Blade and resurrect voracious blood god La Magra.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/k/w350/kiydkxjdcpew51vni8fkhalkon.webp"},
        {"rank": 2, "title": "Ready Player One", "platform": "HBOMax", "movement": "same", "daysInChart": 13, "genre": "Science Fiction", "talent": "Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe, T.J. Miller, Simon Pegg, Mark Rylance, Philip Zhao, Win Morisaki, Hannah John-Kamen, Mark J. Paterson, Ralph Ineson, Susan Lynch, Clare Higgins, Julia Nickson, Perdita Weeks, Letitia Wright", "distributor": "Warner Bros. Pictures", "description": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/p/w350/pu1uluq8d3irxl1fdx2lzizdhui.webp"},
        {"rank": 3, "title": "They Will Kill You", "platform": "HBOMax", "movement": "same", "daysInChart": 13, "genre": "Horror", "talent": "Zazie Beetz, Myha'la, Patricia Arquette, Paterson Joseph, Heather Graham, Tom Felton, Armando Rivera, Willie Ludik, David Viviers, Gabe Gabriel, Chris van Rensburg, Megan Alexander, Viktoriya Korotkova, James Remar, Dorothy Ann Gould, Mike Huff, Darron Meyer, Orefile Moloi", "distributor": "Warner Bros. Pictures", "description": "A woman answers a help wanted ad to be a housekeeper in a mysterious New York City high-rise, unaware that she is entering a community that has seen a number of disappearances over the years and may be under the grip of a Satanic cult.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/6/w350/6oi4oqktwmvulr8ivqydp28ruu6.webp"},
        {"rank": 4, "title": "Blade Runner", "platform": "HBOMax", "movement": "same", "daysInChart": 2, "genre": "Science Fiction", "talent": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos, M. Emmet Walsh, Daryl Hannah, William Sanderson, Brion James, Joe Turkel, Joanna Cassidy, James Hong, Kevin Thompson, Hy Pyke, Kimiko Hiroshige, Ben Astar", "distributor": "Warner Bros. Pictures", "description": "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/v/w350/vfze3pje5g7g7kczwra3fnbzo7v.webp"},
        {"rank": 5, "title": "Rampage", "platform": "HBOMax", "movement": "same", "daysInChart": 13, "genre": "Adventure", "talent": "Dwayne Johnson, Naomie Harris, Malin Åkerman, Jeffrey Dean Morgan, Jake Lacy, Joe Manganiello, Marley Shelton, P.J. Byrne, Demetrius Grosse, Jack Quaid, Breanne Hill, Matt Gerald, Will Yun Lee, Urijah Faber, Bruce Blackshear", "distributor": "Universal Production Partners", "description": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth. But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size. To make matters worse, it’s soon discovered there are other similarly altered animals. As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/m/w350/mgadip4thvserp34faafzfbtz5.webp"},
        {"rank": 6, "title": "I Am Legend", "platform": "HBOMax", "movement": "new", "daysInChart": 0, "genre": "Science Fiction", "talent": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield, Willow Smith, Joanna Numata, Darrell Foster, Dash Mihok, Samuel Glen, Pedro Mojica, Emma Thompson", "distributor": "Warner Bros. Pictures", "description": "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/c/w350/cs6sy4hnpv8dupvlsplohnwwwjq.webp"},
        {"rank": 7, "title": "A Dangerous Son", "platform": "HBOMax", "movement": "down", "daysInChart": 1, "change": 1, "genre": "Documentary", "distributor": "HBO Max ", "description": "Documentary following three families each coping with a child affected by serious emotional or mental illness. The families explore treatment opportunities and grapple with the struggle of living with their child's condition.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/8/w350/8pkfh7vae9rt85w9fbl5rnrjgzy.webp"},
        {"rank": 8, "title": "Wonder Woman 1984", "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1, "genre": "Superhero", "talent": "Gal Gadot, Chris Pine, Kristen Wiig, Pedro Pascal, Connie Nielsen, Robin Wright, Gabriella Wilde, Natasha Rothwell, Ravi Patel, Oakley Bull", "distributor": "Warner Bros. Pictures", "description": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/d/w350/di1bcafgoj0bzneavlspyxq2aab.webp"},
        {"rank": 9, "title": "The Bride!", "platform": "HBOMax", "movement": "down", "daysInChart": 13, "change": 1, "genre": "Horror", "talent": "Jessie Buckley, Christian Bale, Peter Sarsgaard, Annette Bening, Jake Gyllenhaal, Penélope Cruz, Jeannie Berlin, John Magaro, Julianne Hough, Louis Cancelmi, Linda Emond, Matthew Maher, Stephanie Troyak", "distributor": "Warner Bros. Pictures", "description": "A lonely Frankenstein travels to 1930s Chicago to ask groundbreaking scientist Dr. Euphronious to create a companion for him. The two revive a murdered young woman and The Bride is born. But what ensues is beyond what either of them imagined.", "posterUrl": "https://flixpatrol.com/runtime/cache/files/posters/f/w350/fka1qu5t6sxdmkx6xvg5ocswbpk.webp"},
        {"rank": 10, "title": "The Welcome Table", "platform": "HBOMax", "movement": "same", "daysInChart": 4, "genre": "Documentary", "distributor": "HBO Max ", "description": "Tells the story of climate refugees across six continents, celebrating the voices and experiences of people living at the forefront of the climate crisis, displaced from their homes by climate disasters."}
    ];

    /* ── AI Weekly Briefing ──────────────────────────────────  */
    MOCK_DATA_NEW.aiBriefing = {
        "overview": "House of the Dragon is the dominant cultural signal this week — it's #2 on HBO Max UK, #3 on WikiViews TV, and HBO's own HOTD posts are the channel's top performers. The Bubbline/Adventure Time nostalgia post is a standout: 5.5M Instagram views and 4.1M TikTok views on a single HBO post. Life, Larry and the Pursuit of Unhappiness is brand new this week and fans are already engaging heavily with the Larry posts. The Pitt holds at #1 on the TV chart for the second week running.",
        "insights": [
            {
                "title": "House of the Dragon Dominates",
                "text": "HOTD is driving HBO's highest-engagement social posts this week — Harry Collett content, Daemon moments and Rhaenyra clips are all pulling 100K+ engagements. HBO's HOTD channel content is the strongest performer right now across every platform."
            },
            {
                "title": "Bubbline Nostalgia Explosion",
                "text": "HBO's Adventure Time: Bubblegum and Marceline announcement post hit 5.5M Instagram impressions and 4.1M TikTok views this week — the highest single-post numbers in the dataset. Huge opportunity to surface the Adventure Time back catalogue on HBO Max UK."
            },
            {
                "title": "Life, Larry — New Drop, Real Buzz",
                "text": "Life, Larry and the Pursuit of Unhappiness debuted this week as a new entry on HBO Max UK, and fans are already engaging with the Larry posts on Instagram. Larry David energy is landing — lean into the character humour and UK cultural timing."
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
            "House of the Dragon S1 & S2 (HBO Max UK)",
            "Game of Thrones S1–8 (HBO Max UK)"
        ],
        "strategicRecommendation": "Activate around the HOTD cast moment — surface the full Targaryen saga catalogue, create lore content, and position HBO Max UK as the home of the complete Westeros universe while social engagement is at its peak.",
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
                "detail": "Multiple Harry Collett posts on HBO's channels hitting 100K–600K engagements. HBO's Rhaenyra and Daemon content is performing strongly across TikTok and Instagram."
            },
            "hboTitles": [
                {
                    "title": "House of the Dragon S1 & S2",
                    "where": "HBO Max UK",
                    "type": "Series"
                },
                {
                    "title": "Game of Thrones S1–8",
                    "where": "HBO Max UK",
                    "type": "Series"
                }
            ],
            "talent": "Harry Collett, Matt Smith, Emma D'Arcy",
            "strategicRecommendation": "HBO's HOTD posts are the channel's strongest performers right now. Keep the momentum going with more character content, lore drops and cast highlights, and surface the full Targaryen back catalogue on HBO Max UK while engagement is at its peak.",
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
                    "where": "HBO Max UK",
                    "type": "Series"
                }
            ],
            "talent": "Adventure Time franchise",
            "strategicRecommendation": "Surface the Adventure Time catalogue on HBO Max UK now while the Bubbline announcement post is drawing strong fan engagement. Nostalgia content for the franchise should perform well across all platforms this week.",
            "relevanceScore": "high",
            "timing": "This week — announcement halo window"
        },
        {
            "id": 3,
            "urgency": "medium",
            "type": "premiere",
            "typeLabel": "New Entry",
            "trigger": {
                "title": "Life, Larry debuts on HBO Max UK",
                "platform": "Instagram",
                "platformColour": "#e1306c",
                "detail": "Life, Larry and the Pursuit of Unhappiness premiered this week as a new entry — HBO's launch posts are already drawing strong fan engagement on Instagram around Larry David character moments."
            },
            "hboTitles": [
                {
                    "title": "Life, Larry and the Pursuit of Unhappiness",
                    "where": "HBO Max UK",
                    "type": "Series"
                },
                {
                    "title": "Curb Your Enthusiasm (HBO Max UK)",
                    "where": "HBO Max UK",
                    "type": "Series"
                }
            ],
            "talent": "Larry David",
            "strategicRecommendation": "New premiere window — amplify the debut with Larry David humour content and cross-promote the Curb Your Enthusiasm back catalogue to convert new viewers into franchise fans on HBO Max UK.",
            "relevanceScore": "medium",
            "timing": "This week — premiere window"
        }
    ];

    /* ── HBO UK Social Posts (real data, ranked by engagement) ─ */
    MOCK_DATA_NEW.hboPosts = [
        {
            "platform": "TikTok",
            "content": "Looking back on Bubbline. Excited to see what's next in Adventure Time: Bubblegum and Marceline, a new series coming to HBO Max UK.",
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
            "content": "Looking back on Bubbline. Excited to see what's next in #AdventureTime: Bubblegum and Marceline, a new series coming to HBO Max UK.",
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
            "content": "I'm coming home, Daisy. #LifeLarryAmerica\n\nLife, Larry and the Pursuit of Unhappiness premieres tonight at 9pm ET on HBO Max UK.",
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
            "content": "Can't knock the hustle. #JAYZin8 an 8-part Documentary Series featuring Jay-Z in conversation with Rick Rubin, premieres this fall on HBO Max UK.",
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
            "content": "I'm coming home, Daisy. #LifeLarryAmerica #LarryDavid Life, Larry and the Pursuit of Unhappiness premieres tonight at 9pm ET on HBO Max UK.",
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
            "content": "Every universe needs a hero. We got Stuart.\n\nFrom the world of #TheBigBangTheory, Stuart Fails to Save the Universe premieres in just one month on HBO Max UK. #SFTSTU",
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
        "Larry David / Life Larry chaos energy — this trend was made for Larry's social awkwardness. New show on HBO Max UK this week.",
        "Succession and White Lotus characters embody 'rich in life' — luxury prestige drama is HBO's core identity. Perfect aesthetic match."
    ];
    if (MOCK_DATA_NEW.ramdamTikTok) {
        MOCK_DATA_NEW.ramdamTikTok = MOCK_DATA_NEW.ramdamTikTok.map((item, i) => ({
            ...item,
            hboAngle: tiktokAngles[i] || "Opportunity for HBO Max UK content"
        }));
    }

    /* ── Patch ramdamInstagram: add hboAngle ────────────────  */
    const instaAngles = [
        "Bubbline love story — 'I would do anything for you' is the Bubbline relationship in a sentence. Adventure Time content going viral this week.",
        "HBO Max UK cast behind-the-scenes mini vlogs — HOTD and The Pitt casts are active and content-ready for carousel formats.",
        "Rhaenyra Targaryen power grip moments — 'girl grip' energy across HOTD. Strong character clip content for this trend.",
        "HOTD political scheming — Plan A (the Blacks) vs Plan B (the Greens). The show literally runs on this tension.",
        "Life Larry humour — Larry David's whole persona is 'can we reschedule'. New premiere on HBO Max UK this week, perfect timing.",
        "The Pitt authentic ER moments — raw, unfiltered healthcare drama. 'Wait let me wipe the camera' energy meets prestige TV."
    ];
    if (MOCK_DATA_NEW.ramdamInstagram) {
        MOCK_DATA_NEW.ramdamInstagram = MOCK_DATA_NEW.ramdamInstagram.map((item, i) => ({
            ...item,
            hboAngle: instaAngles[i] || "Opportunity for HBO Max UK content"
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
                hboAngle: tiktokAngles[i] || "Opportunity for HBO Max UK content"
            }));
        }
        if (MOCK_DATA_PREV.ramdamInstagram) {
            MOCK_DATA_PREV.ramdamInstagram = MOCK_DATA_PREV.ramdamInstagram.map((item, i) => ({
                ...item,
                hboAngle: instaAngles[i] || "Opportunity for HBO Max UK content"
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
