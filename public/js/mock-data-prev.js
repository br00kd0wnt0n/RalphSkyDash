/* ============================================================
   CULTURE ENGINE — Mock Data for Pitch Prototype
   Realistic UK streaming, social & calendar data
   ============================================================ */

const MOCK_DATA_PREV = {

    // ─── Date context ───
    weekOf: '17–23 February 2026',
    lastUpdated: new Date().toISOString(),

    // ─── Netflix TV Trending UK (Past Week) ───
    netflixTV: [
        { rank: 1, title: 'Being Gordon Ramsay', genre: 'Documentary', type: 'Food', movement: 'same', daysInChart: 5, peakPosition: 1, emoji: '👨‍🍳', talent: 'Gordon Ramsay', description: 'Follow Gordon Ramsay over 9 months in the lead up to his biggest restaurant venture to date.' },
        { rank: 2, title: 'The Night Agent', genre: 'Action', type: 'Spies', movement: 'same', daysInChart: 37, peakPosition: 1, emoji: '🌙', talent: 'Gabriel Basso, Luciane Buchanan', description: 'An FBI agent and a cybersecurity expert must unravel an ever-growing web of political conspiracies.' },
        { rank: 3, title: 'Reality Check: Inside America\'s Next Top Model', genre: 'Documentary', type: 'Fashion', movement: 'same', daysInChart: 7, peakPosition: 3, emoji: '📸', description: 'The definitive, must-watch documentary about ANTM.' },
        { rank: 4, title: 'How to Get to Heaven from Belfast', genre: 'Comedy', type: 'Situation', movement: 'up', change: 1, daysInChart: 11, peakPosition: 4, emoji: '😂', talent: 'Roisin Gallagher, Saoirse-Monica Jackson', description: 'Three lifelong pals embark on a chaotic quest to solve the mystery of their old friend\'s suspicious death.' },
        { rank: 5, title: 'Bridgerton', genre: 'Romance', type: 'Kings and Queens', movement: 'up', change: 1, daysInChart: 87, peakPosition: 1, emoji: '👑', talent: 'Nicola Coughlan, Jonathan Bailey', description: 'Wealth, lust, and betrayal set in the backdrop of Regency era England.' },
        { rank: 6, title: 'The Middle', genre: 'Comedy', type: 'Sitcom', movement: 'up', change: 1, daysInChart: 5, peakPosition: 6, emoji: '👨‍👩‍👧‍👦', talent: 'Patricia Heaton, Neil Flynn', description: 'The daily mishaps of a married woman and her semi-dysfunctional family.' },
        { rank: 7, title: 'Jeffrey Epstein: Filthy Rich', genre: 'Documentary', type: 'Crime', movement: 'up', change: 1, daysInChart: 18, peakPosition: 7, emoji: '🔍', description: 'Stories from survivors fuel this docuseries examining how Jeffrey Epstein carried out his abuses.' },
        { rank: 8, title: 'The Lincoln Lawyer', genre: 'Drama', type: 'Lawyers', movement: 'up', change: 1, daysInChart: 47, peakPosition: 1, emoji: '⚖️', talent: 'Manuel Garcia-Rulfo, Neve Campbell', description: 'Hotshot LA lawyer Mickey Haller restarts his career when he takes on a murder case.' },
        { rank: 9, title: 'Swiped: The School That Banned Smartphones', genre: 'Documentary', movement: 'new', daysInChart: 1, peakPosition: 9, emoji: '📱', talent: 'Emma Willis, Matt Willis', description: 'A group of Year 8 pupils are challenged to give up their smartphones for 21 days.' },
        { rank: 10, title: 'WWE SmackDown', genre: 'Sport', type: 'Wrestling', movement: 'down', change: 6, daysInChart: 2, peakPosition: 4, emoji: '💪', description: 'The superstars of World Wrestling Entertainment\'s SmackDown brand collide each Friday.' }
    ],

    // ─── Netflix Film Trending UK (Past Week) ───
    netflixFilm: [
        { rank: 1, title: 'Abigail', genre: 'Horror', type: 'Vampires', movement: 'new', daysInChart: 1, peakPosition: 1, emoji: '🩸', talent: 'Alisha Weir, Melissa Barrera, Dan Stevens', distributor: 'Universal Pictures', description: 'A group of criminals kidnap a 12-year-old ballerina, only to discover she\'s no normal little girl.' },
        { rank: 2, title: 'Cellar Door', genre: 'Horror', movement: 'down', change: 1, daysInChart: 6, peakPosition: 1, emoji: '🚪', talent: 'Jordana Brewster, Scott Speedman, Laurence Fishburne', distributor: 'Lionsgate', description: 'A couple find their dream house with one caveat — they can never open the cellar door.' },
        { rank: 3, title: 'The Addams Family 2', genre: 'Animation', type: 'For Older Kids', movement: 'down', change: 1, daysInChart: 3, peakPosition: 2, emoji: '🖤', talent: 'Oscar Isaac, Charlize Theron', distributor: 'MGM', description: 'The Addams get tangled up in more wacky adventures.' },
        { rank: 4, title: 'Tarot', genre: 'Horror', type: 'Demons', movement: 'down', change: 1, daysInChart: 6, peakPosition: 3, emoji: '🃏', talent: 'Harriet Slater, Jacob Batalon', distributor: 'Sony Pictures', description: 'When friends violate the sacred rule of Tarot readings, they unleash an unspeakable evil.' },
        { rank: 5, title: 'Rumble', genre: 'Animation', type: 'For Boys', movement: 'down', change: 1, daysInChart: 3, peakPosition: 4, emoji: '👹', talent: 'Will Arnett, Terry Crews', distributor: 'Paramount Pictures', description: 'A teenager seeks to coach a loveable underdog monster into a champion.' },
        { rank: 6, title: 'The Addams Family', genre: 'Family', type: 'For Older Kids', movement: 'down', change: 1, daysInChart: 3, peakPosition: 5, emoji: '🖤', talent: 'Oscar Isaac, Charlize Theron', distributor: 'MGM', description: 'The Addams family face-off against a treacherous reality-TV host.' },
        { rank: 7, title: 'Prometheus', genre: 'Science Fiction', type: 'Alien Invasion', movement: 'down', change: 1, daysInChart: 7, peakPosition: 6, emoji: '👽', talent: 'Noomi Rapace, Michael Fassbender, Charlize Theron, Idris Elba', distributor: '20th Century', description: 'A team of explorers discover a clue to the origins of mankind on Earth.' },
        { rank: 8, title: 'Bandit', genre: 'Crime', type: 'Prison', movement: 'new', daysInChart: 1, peakPosition: 8, emoji: '🏦', talent: 'Josh Duhamel, Elisha Cuthbert, Mel Gibson', description: 'After escaping prison, a charming criminal goes on to rob a record 59 banks.' },
        { rank: 9, title: 'KPop Demon Hunters', genre: 'Animation', movement: 'down', change: 1, daysInChart: 224, peakPosition: 1, emoji: '🎤', talent: 'Arden Cho, Daniel Dae Kim, Ken Jeong', description: 'K-pop superstars use their secret powers to protect their fans from supernatural threats.' },
        { rank: 10, title: 'The Orphans', genre: 'Action', type: 'Action Crime', movement: 'same', daysInChart: 2, peakPosition: 10, emoji: '🔫', talent: 'Alban Lenoir, Dali Benssalah', description: 'Childhood friends must stop a teenager before she crosses a line she can\'t return from.' }
    ],

    // ─── Amazon Prime Video TV UK (Past Week) ───
    amazonPrimeTV: [
        { rank: 1, title: 'Memory of a Killer', genre: 'Crime', movement: 'up', change: 7, daysInChart: 20, peakPosition: 1, emoji: '🧠', talent: 'Patrick Dempsey, Michael Imperioli', description: 'Angelo Ledda lives two separate lives — fearsome NYC hitman and sleepy upstate family man.' },
        { rank: 2, title: 'Beast Games', genre: 'Reality-Show', movement: 'up', change: 5, daysInChart: 49, peakPosition: 1, emoji: '🏆', talent: 'Jimmy Donaldson (MrBeast)', description: '1,000 people fight for $5,000,000, the largest cash prize in TV history.' },
        { rank: 3, title: '56 Days', genre: 'Crime', movement: 'down', change: 2, daysInChart: 7, peakPosition: 1, emoji: '🔪', talent: 'Dove Cameron, Avan Jogia', description: 'After meeting in a supermarket, Oliver and Ciara fall for each other fast, and dangerously hard.' },
        { rank: 4, title: 'Cross', genre: 'Crime', type: 'Murder', movement: 'same', daysInChart: 14, peakPosition: 1, emoji: '🕵️', talent: 'Aldis Hodge, Ryan Eggold', description: 'Alex Cross is brilliant, flawed, and full of contradictions when he hunts killers.' },
        { rank: 5, title: 'Fallout', genre: 'Science Fiction', type: 'Postapocalypse', movement: 'down', change: 3, daysInChart: 70, peakPosition: 1, emoji: '☢️', talent: 'Ella Purnell, Walton Goggins', description: 'The story of haves and have-nots in a world in which there\'s almost nothing left to have.' },
        { rank: 6, title: 'Steal', genre: 'Crime', type: 'Heist', movement: 'down', change: 3, daysInChart: 35, peakPosition: 1, emoji: '💰', talent: 'Sophie Turner, Archie Madekwe', description: 'A gang of violent thieves force employees to execute their demands at a pension fund company.' },
        { rank: 7, title: 'Jesy Nelson: Life After Little Mix', genre: 'Documentary', movement: 'down', change: 2, daysInChart: 12, peakPosition: 5, emoji: '🎵', talent: 'Jesy Nelson', description: 'Now she\'s ready to tell her side of the story.' },
        { rank: 8, title: 'Chasing a Killer: Gary Allen', genre: 'Crime', movement: 'down', change: 2, daysInChart: 2, peakPosition: 6, emoji: '🔍', description: 'When Gary Allen is acquitted of murder, detectives know it\'s only a matter of time.' },
        { rank: 9, title: 'Clarkson\'s Farm', genre: 'Reality-Show', type: 'Society', movement: 'same', daysInChart: 205, peakPosition: 1, emoji: '🚜', talent: 'Jeremy Clarkson, Kaleb Cooper', description: 'Follow Jeremy Clarkson as he takes on the most manually labour intensive job there is.' },
        { rank: 10, title: 'MrBeast: Extreme Survival!', genre: 'Reality', movement: 'new', daysInChart: 26, peakPosition: 1, emoji: '🏔️', description: 'MrBeast pushes contestants into the toughest survival experiments imaginable.' }
    ],

    // ─── Amazon Prime Video Film UK (Past Week) ───
    amazonPrimeFilm: [
        { rank: 1, title: 'The Bluff', genre: 'Action', type: 'Revenge', movement: 'new', daysInChart: 1, peakPosition: 1, emoji: '🏴‍☠️', talent: 'Priyanka Chopra Jonas, Karl Urban', description: 'An ex-pirate must confront her bloody past and unleash her deadly talents to save her family.' },
        { rank: 2, title: 'The Wrecking Crew', genre: 'Action', type: 'Buddies', movement: 'down', change: 1, daysInChart: 28, peakPosition: 1, emoji: '💪', talent: 'Dave Bautista, Jason Momoa', description: 'Estranged half-brothers reunite after their father\'s mysterious death.' },
        { rank: 3, title: 'Love Me Love Me', genre: 'Romance', movement: 'down', change: 1, daysInChart: 12, peakPosition: 2, emoji: '❤️', talent: 'Mia Jenkins, Pepe Barroso', description: 'June moves to Italy for a fresh start and is drawn into a world of secrets at her elite school.' },
        { rank: 4, title: 'Together', genre: 'Horror', movement: 'down', change: 1, daysInChart: 4, peakPosition: 3, emoji: '😱', talent: 'Dave Franco, Alison Brie', description: 'A supernatural encounter begins an extreme transformation of a couple\'s love and their flesh.' },
        { rank: 5, title: 'Afterlight', genre: 'Science Fiction', movement: 'same', daysInChart: 2, peakPosition: 5, emoji: '🌌', talent: 'Anna Fraser, Jacob Fortune-Lloyd', description: 'Five interconnected sci-fi stories explore humanity\'s fight for connection across time and space.' },
        { rank: 6, title: 'Ballerina', genre: 'Action', type: 'Revenge', movement: 'down', change: 2, daysInChart: 46, peakPosition: 1, emoji: '🩰', talent: 'Ana de Armas, Keanu Reeves, Ian McShane', distributor: 'Lionsgate', description: 'Eve Macarro begins her training in the assassin traditions of the Ruska Roma.' },
        { rank: 7, title: 'Tu Meri Main Tera Main Tera Tu Meri', genre: 'Romance', movement: 'same', daysInChart: 4, peakPosition: 7, emoji: '💕', talent: 'Kartik Aaryan, Ananya Panday', description: 'A carefree wedding planner and a headstrong novelist collide during a wild summer in Croatia.' },
        { rank: 8, title: 'Afterburn', genre: 'Science Fiction', type: 'Postapocalypse', movement: 'down', change: 2, daysInChart: 39, peakPosition: 1, emoji: '☀️', talent: 'Dave Bautista, Samuel L. Jackson', description: 'Treasure hunters extract objects like the Mona Lisa while facing rival hunters, mutants and pirates.' },
        { rank: 9, title: 'She\'s the Man', genre: 'Romance', type: 'Rom Com', movement: 'same', daysInChart: 8, peakPosition: 9, emoji: '⚽', talent: 'Amanda Bynes, Channing Tatum', distributor: 'DreamWorks', description: 'Viola Johnson poses as her twin brother at a new boarding school.' },
        { rank: 10, title: 'That Peter Crouch Film', genre: 'Documentary', type: 'Sport', movement: 'new', daysInChart: 4, peakPosition: 10, emoji: '⚽', talent: 'Peter Crouch, Abbey Clancy, Steven Gerrard', description: 'The true story behind football\'s most unlikely hero.' }
    ],

    // ─── WikiViews Film (Past Week — Most Viewed Film Pages) ───
    wikiViewsFilm: [
        { rank: 1, title: 'xXx: Return of Xander Cage', genre: 'Action', type: 'Spies', views: '58,333', category: 'Film', distributor: 'Paramount Pictures' },
        { rank: 2, title: 'xXx', genre: 'Action', type: 'Spies', views: '53,571', category: 'Film', distributor: 'Stillking Films' },
        { rank: 3, title: 'Sinners', genre: 'Horror', type: 'Vampires', views: '22,631', category: 'Film', distributor: 'Warner Bros. Pictures' },
        { rank: 4, title: 'Avatar: Fire and Ash', genre: 'Science Fiction', type: 'Space opera', views: '18,107', category: 'Film', distributor: '20th Century' },
        { rank: 5, title: 'The Bride!', genre: 'Horror', type: 'Classic Horrors', views: '15,977', category: 'Film', distributor: 'Warner Bros. Pictures' },
        { rank: 6, title: 'Predator: Badlands', genre: 'Alien Invasion', type: 'Science Fiction', views: '13,473', category: 'Film', distributor: '20th Century' },
        { rank: 7, title: 'Heat', genre: 'Crime', type: 'Heist', views: '13,313', category: 'Film', distributor: 'Warner Bros. Pictures' },
        { rank: 8, title: 'Zootopia 2', genre: 'Animation', type: 'Animals', views: '12,484', category: 'Film', distributor: 'Walt Disney Pictures' },
        { rank: 9, title: 'Scream VI', genre: 'Horror', type: 'Slasher', views: '12,289', category: 'Film', distributor: 'Paramount Pictures' },
        { rank: 10, title: '28 Years Later', genre: 'Horror', type: 'Zombies', views: '11,835', category: 'Film', distributor: 'Sony Pictures' }
    ],

    // ─── WikiViews People (Past Week — Most Viewed People Pages) ───
    wikiViewsPeople: [
        { rank: 1, title: 'Ronnie Wood', views: '133,941', category: 'People' },
        { rank: 2, title: 'Paul Bettany', views: '131,444', category: 'People' },
        { rank: 3, title: 'Jim Carrey', views: '131,417', category: 'People' },
        { rank: 4, title: 'Bruce Lee', views: '87,852', category: 'People' },
        { rank: 5, title: 'Linda Fiorentino', views: '86,184', category: 'People' },
        { rank: 6, title: 'Mark Ronson', views: '86,032', category: 'People' },
        { rank: 7, title: 'Charlize Theron', views: '85,940', category: 'People' },
        { rank: 8, title: 'Traci Lords', views: '82,258', category: 'People' },
        { rank: 9, title: 'Dwight Yoakam', views: '79,407', category: 'People' },
        { rank: 10, title: 'Peter Cushing', views: '78,534', category: 'People' }
    ],

    // ─── WikiViews TV (Past Week — Most Viewed TV Pages) ───
    wikiViewsTV: [
        { rank: 1, title: 'Bridgerton', views: '143,887', category: 'TV' },
        { rank: 2, title: 'Paradise', views: '51,319', category: 'TV' },
        { rank: 3, title: 'The Night Agent', views: '42,380', category: 'TV' },
        { rank: 4, title: 'The Pitt', views: '39,540', category: 'TV' },
        { rank: 5, title: 'Monarch: Legacy of Monsters', views: '35,833', category: 'TV' },
        { rank: 6, title: 'Scrubs', views: '34,448', category: 'TV' },
        { rank: 7, title: 'The Lincoln Lawyer', views: '20,161', category: 'TV' },
        { rank: 8, title: 'Industry', views: '19,032', category: 'TV' },
        { rank: 9, title: 'Tehran', views: '14,839', category: 'TV' },
        { rank: 10, title: 'Shrinking', views: '14,099', category: 'TV' }
    ],

    // ─── Sky Titles Catalogue (Reference Dataset) ───
    skyTitles: [
        'Oppenheimer', '28 Days Later', 'Dunkirk', 'Retreat',
        'The Day of the Jackal S1', 'The Day of the Jackal (1973)',
        'Sweetpea', 'The Midwich Cuckoos', 'Tár', 'The Killer',
        'Slow Horses', 'Goodfellas', 'The Irishman', 'Gangs of London',
        'The Zone of Interest', 'Anatomy of a Fall',
        'Peaky Blinders S1-6', 'Mr Bigstuff', 'War'
    ],

    // ─── TikTok Trending Hashtags UK (Past Week) ───
    tiktokUK: [
        { rank: 1, hashtag: '# snow', views: '5K', category: '', trend: 'new' },
        { rank: 2, hashtag: '# wutheringheights', views: '6K', category: 'News & Entertainment', trend: 'up', change: 9 },
        { rank: 3, hashtag: '# babyboo', views: '5K', category: '', trend: 'up', change: 14 },
        { rank: 4, hashtag: '# deftones', views: '4K', category: '', trend: 'up', change: 16 },
        { rank: 5, hashtag: '# jacobelordi', views: '2K', category: 'News & Entertainment', trend: 'up', change: 21 },
        { rank: 6, hashtag: '# margotrobbie', views: '1K', category: 'News & Entertainment', trend: 'up', change: 27 },
        { rank: 7, hashtag: '# ukweather', views: '1K', category: 'News & Entertainment', trend: 'up', change: 22 },
        { rank: 8, hashtag: '# rants', views: '8K', category: 'Games', trend: 'new' },
        { rank: 9, hashtag: '# tutorials', views: '9K', category: '', trend: 'new' },
        { rank: 10, hashtag: '# knockout', views: '2K', category: 'Sports & Outdoor', trend: 'up', change: 35 }
    ],

    // ─── TikTok Trending UK News & Entertainment ───
    tiktokNewsEnts: [
        { rank: 1, hashtag: '# loveisland', views: '32K', topic: 'Love Island returns — massive UK cultural moment', sentiment: 'positive' },
        { rank: 2, hashtag: '# harrystyles', views: '34K', topic: 'Harry Styles fan content continues to trend', sentiment: 'positive' },
        { rank: 3, hashtag: '# avatar', views: '23K', topic: 'Avatar: Fire and Ash anticipation builds', sentiment: 'positive' },
        { rank: 4, hashtag: '# epstein', views: '20K', topic: 'Jeffrey Epstein documentary drives conversation', sentiment: 'neutral' },
        { rank: 5, hashtag: '# heatedrivalry', views: '14K', topic: 'Heated Rivalry content and reactions trending', sentiment: 'positive' },
        { rank: 6, hashtag: '# loveislanduk', views: '16K', topic: 'Love Island UK specific content and recaps', sentiment: 'positive' },
        { rank: 7, hashtag: '# ice', views: '11K', topic: 'Ice and winter content surging with snow', sentiment: 'neutral' },
        { rank: 8, hashtag: '# oliviadean', views: '14K', topic: 'Olivia Dean performance and music moments', sentiment: 'positive' },
        { rank: 9, hashtag: '# grammys', views: '11K', topic: 'Grammy Awards reactions and highlights', sentiment: 'positive' },
        { rank: 10, hashtag: '# cinema', views: '10K', topic: 'General cinema-going content and reviews', sentiment: 'neutral' }
    ],

    // ─── Upcoming Movie Releases UK (Next Month) ───
    upcomingReleases: [
        { date: 'Feb 27', title: 'Scream 7', genre: 'Horror/Mystery', talent: 'Neve Campbell, Courteney Cox, Isabel May', distributor: '', skyRelevance: 'medium' },
        { date: 'Feb 27', title: 'Sirat', genre: 'Action/Adventure', talent: 'Sergi Lopez, Bruno Nunez Arjona', distributor: '', skyRelevance: 'medium' },
        { date: 'Feb 27', title: 'The Testament of Ann Lee', genre: 'Biography/Drama', talent: 'Amanda Seyfried, Lewis Pullman, Thomasin McKenzie', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 6', title: 'The Bride!', genre: 'Drama/Horror', talent: 'Jessie Buckley, Jake Gyllenhaal, Christian Bale, Annette Bening', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 6', title: 'Hoppers', genre: 'Romance/Animation', talent: 'Piper Curda, Bobby Moynihan, Jon Hamm, Meryl Streep', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 6', title: 'Mother\'s Pride', genre: 'Comedy', talent: 'Jonno Davies, Martin Clunes, Mark Addy, Gabriella Wilde', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 13', title: 'How to Make a Killing', genre: 'Comedy/Drama', talent: 'Glen Powell, Margaret Qualley, Jessica Henwick', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 13', title: 'Reminders of Him', genre: 'Thriller/Drama', talent: 'Maika Monroe, Jennifer Robertson, Bradley Whitford', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 13', title: 'Undertone', genre: 'Horror/Sci-Fi', talent: 'Nina Kiri, Adam DiMarco', distributor: '', skyRelevance: 'medium' },
        { date: 'Mar 19', title: 'Toxic', genre: 'Action/Crime', talent: 'Yash, Nayanthara, Kiara Advani', distributor: '', skyRelevance: 'medium' }
    ],

    // ─── Reddit Seasonal Calendar UK (Next Month) ───
    redditCalendar: [
        { date: '1 Mar', event: 'St David\'s Day', category: 'Cultural', relevance: 'Welsh content opportunities', icon: '🏴' },
        { date: '15 Mar', event: 'Oscars Ceremony', category: 'Awards', relevance: 'Winner tie-ins to Sky catalogue', icon: '🏆' },
        { date: '5 Mar', event: 'World Book Day', category: 'Cultural', relevance: 'Book-to-screen adaptations on Sky', icon: '📚' },
        { date: '8 Mar', event: 'International Women\'s Day', category: 'Cultural', relevance: 'Female-led Sky originals spotlight', icon: '✊' },
        { date: '14–16 Mar', event: 'Six Nations Super Saturday', category: 'Sport', relevance: 'Rugby crossover content', icon: '🏉' },
        { date: '17 Mar', event: 'St Patrick\'s Day', category: 'Cultural', relevance: 'Irish talent on Sky — Murphy, Gleeson', icon: '☘️' },
        { date: '20 Mar', event: 'Spring Equinox', category: 'Seasonal', relevance: 'New season, new series push', icon: '🌸' },
        { date: '29 Mar', event: 'Boat Race', category: 'Sport', relevance: 'British tradition — nostalgic content', icon: '🚣' },
        { date: '30 Mar', event: 'BST Begins', category: 'Seasonal', relevance: 'Lighter evenings viewing habits shift', icon: '🕐' },
        { date: '14 Apr', event: 'Easter Weekend', category: 'Holiday', relevance: 'Family viewing — Sky Cinema spotlight', icon: '🐣' }
    ],

    // ─── TikTok Marketing Calendar ───
    tiktokCalendar: [
        { date: '8 Mar', event: 'International Women\'s Day', category: 'Awareness', tiktokTrend: '#WomenInFilm', potentialReach: '500M+' },
        { date: '14 Mar', event: 'Pi Day', category: 'Fun', tiktokTrend: '#PiDay #MathInMovies', potentialReach: '120M+' },
        { date: '17 Mar', event: 'St Patrick\'s Day', category: 'Cultural', tiktokTrend: '#StPatricksDay #IrishActors', potentialReach: '800M+' },
        { date: '20 Mar', event: 'First Day of Spring', category: 'Seasonal', tiktokTrend: '#SpringVibes #NewSeason', potentialReach: '350M+' },
        { date: '15 Mar', event: 'Oscar Watch Parties', category: 'Entertainment', tiktokTrend: '#OscarWatchParty', potentialReach: '450M+' },
        { date: '31 Mar', event: 'Transgender Day of Visibility', category: 'Awareness', tiktokTrend: '#TransVisibility', potentialReach: '200M+' },
        { date: '1 Apr', event: 'April Fool\'s Day', category: 'Fun', tiktokTrend: '#AprilFools #FakeTrailers', potentialReach: '900M+' },
        { date: '14 Apr', event: 'Easter Content Season', category: 'Holiday', tiktokTrend: '#EasterMovies #FamilyFilmNight', potentialReach: '600M+' }
    ],

    // ─── Ramdam TikTok Trends (Past Month) ───
    ramdamTikTok: [
        { rank: 1, trend: 'POV: You\'re a villain', engagement: '2.1B views', category: 'Entertainment', skyAngle: 'Villain characters in Sky originals' },
        { rank: 2, trend: 'What I\'d wear in [show]', engagement: '1.8B views', category: 'Fashion/TV', skyAngle: 'Day of the Jackal costume recreations' },
        { rank: 3, trend: 'Tell me a film and I\'ll rate it', engagement: '1.4B views', category: 'Film Review', skyAngle: 'Sky Cinema staff picks' },
        { rank: 4, trend: 'Unpopular film opinions', engagement: '1.1B views', category: 'Film Discussion', skyAngle: 'Controversial Sky Cinema takes' },
        { rank: 5, trend: 'Comfort show check', engagement: '890M views', category: 'TV Nostalgia', skyAngle: 'Sky Box Sets comfort picks' },
        { rank: 6, trend: 'Acting challenge duets', engagement: '750M views', category: 'Acting', skyAngle: 'Sky original cast moments' },
        { rank: 7, trend: 'Before they were famous', engagement: '680M views', category: 'Celebrity', skyAngle: 'Early roles of Sky talent' },
        { rank: 8, trend: 'Film location bucket list', engagement: '540M views', category: 'Travel/Film', skyAngle: 'Where Sky originals are filmed' }
    ],

    // ─── Ramdam Instagram Trends (Past Month) ───
    ramdamInstagram: [
        { rank: 1, trend: 'Cinematic photo dumps', engagement: '1.2B impressions', category: 'Aesthetic', skyAngle: 'Sky Cinema aesthetic reels' },
        { rank: 2, trend: 'Celebrity style breakdowns', engagement: '980M impressions', category: 'Fashion', skyAngle: 'Sky talent fashion features' },
        { rank: 3, trend: 'Mini film reviews (carousel)', engagement: '870M impressions', category: 'Film Review', skyAngle: 'Sky Cinema weekly picks carousel' },
        { rank: 4, trend: 'Behind the scenes content', engagement: '720M impressions', category: 'BTS', skyAngle: 'Sky originals production content' },
        { rank: 5, trend: 'Letterboxd lists as stories', engagement: '580M impressions', category: 'Film Culture', skyAngle: 'Curated Sky watchlists' },
        { rank: 6, trend: 'Actor filmography rankings', engagement: '460M impressions', category: 'Celebrity', skyAngle: 'Rank Sky actors\' best roles' }
    ],

    // ─── Top Performing Sky Posts (Past Week — Simulated YouScan Data) ───
    skyPosts: [
        { platform: 'Instagram', content: 'The Day of the Jackal — Every shot is a masterclass. Stream now on Sky.', engagement: '48.2K', likes: '42.1K', comments: '3.2K', shares: '2.9K', sentiment: 'positive', mediaType: 'Reel' },
        { platform: 'TikTok', content: 'POV: You just found out Mr Bigstuff is coming back', engagement: '38.7K', likes: '31.4K', comments: '4.8K', shares: '2.5K', sentiment: 'positive', mediaType: 'Video' },
        { platform: 'X', content: 'Sweetpea. That ending. We need to talk.', engagement: '29.1K', likes: '18.6K', comments: '7.2K', shares: '3.3K', sentiment: 'positive', mediaType: 'Text' },
        { platform: 'Instagram', content: 'Name a more iconic duo. We\'ll wait. #WarSky', engagement: '25.4K', likes: '21.8K', comments: '2.1K', shares: '1.5K', sentiment: 'positive', mediaType: 'Carousel' },
        { platform: 'TikTok', content: 'When someone says they haven\'t watched The Day of the Jackal yet...', engagement: '22.8K', likes: '19.2K', comments: '2.4K', shares: '1.2K', sentiment: 'positive', mediaType: 'Video' }
    ],

    // ─── Sky Content Opportunities (AI-Generated Cross-References) ───
    opportunities: [
        {
            id: 1,
            urgency: 'high',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: 'Peaky Blinders: The Movie',
                platform: 'Netflix',
                platformColour: '#e50914',
                detail: '#1 Film on Netflix UK — Cillian Murphy moment'
            },
            skyTitles: [
                { title: 'Oppenheimer', where: 'Sky Cinema', type: 'Film' },
                { title: '28 Days Later', where: 'Sky Store', type: 'Film' },
                { title: 'Dunkirk', where: 'Sky Cinema', type: 'Film' },
                { title: 'Retreat', where: 'Sky Store', type: 'Film' }
            ],
            talent: 'Cillian Murphy',
            strategicRecommendation: 'Leverage Cillian Murphy moment — cross-promote Sky Cinema catalogue (Oppenheimer / 28 Days Later / Dunkirk) while Peaky Blinders movie drives peak interest',
            relevanceScore: 'high',
            timing: 'Immediate — trending now'
        },
        {
            id: 2,
            urgency: 'high',
            type: 'franchise',
            typeLabel: 'Franchise Link',
            trigger: {
                title: '#DayOfTheJackal trending',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: 'High engagement window — fans campaigning for Series 2'
            },
            skyTitles: [
                { title: 'The Day of the Jackal S1', where: 'Sky Atlantic', type: 'Series' },
                { title: 'The Day of the Jackal (1973)', where: 'Sky Cinema', type: 'Film' }
            ],
            talent: 'Eddie Redmayne',
            strategicRecommendation: 'Capitalise on #DayOfTheJackal fan campaign momentum — spotlight Sky Atlantic as the home of the series / tease S2 speculation',
            relevanceScore: 'high',
            timing: 'This week — high engagement window'
        },
        {
            id: 3,
            urgency: 'high',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: '#28DaysLater sequel trailer',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: 'Trailer momentum — Cillian Murphy confirmed returning'
            },
            skyTitles: [
                { title: '28 Days Later', where: 'Sky Store', type: 'Film' },
                { title: 'Oppenheimer', where: 'Sky Cinema', type: 'Film' },
                { title: 'Peaky Blinders S1-6', where: 'Sky Box Sets', type: 'Series' }
            ],
            talent: 'Cillian Murphy',
            strategicRecommendation: 'Ride 28 Days Later sequel hype — position Sky Store as the place to rewatch the original / tie back to Murphy\'s Sky catalogue',
            relevanceScore: 'high',
            timing: 'This week — trailer momentum'
        },
        {
            id: 4,
            urgency: 'medium',
            type: 'genre',
            typeLabel: 'Genre Match',
            trigger: {
                title: 'Black Mirror S7',
                platform: 'Netflix',
                platformColour: '#e50914',
                detail: 'Divisive reviews driving conversation'
            },
            skyTitles: [
                { title: 'Sweetpea', where: 'Sky Atlantic', type: 'Series' },
                { title: 'The Midwich Cuckoos', where: 'Sky Max', type: 'Series' }
            ],
            talent: 'Various',
            strategicRecommendation: 'Bridge Black Mirror dark-thriller audience to Sweetpea — genre-match positioning for Sky Atlantic originals',
            relevanceScore: 'medium',
            timing: 'Within 3 days'
        },
        {
            id: 5,
            urgency: 'medium',
            type: 'actor',
            typeLabel: 'Actor Connection',
            trigger: {
                title: 'Black Bag (cinema release 14 Mar)',
                platform: 'Cinema',
                platformColour: '#1a1a2e',
                detail: 'Upcoming Cate Blanchett/Fassbender thriller generating buzz'
            },
            skyTitles: [
                { title: 'Tár', where: 'Sky Cinema', type: 'Film' },
                { title: 'The Killer', where: 'Sky Cinema', type: 'Film' },
                { title: 'Slow Horses', where: 'Sky Atlantic', type: 'Series' }
            ],
            talent: 'Cate Blanchett, Michael Fassbender',
            strategicRecommendation: 'Pre-release Black Bag buzz — spotlight Blanchett/Fassbender catalogue on Sky Cinema (Tár / The Killer / Slow Horses)',
            relevanceScore: 'medium',
            timing: 'Week of 10 March — pre-release buzz'
        },
        {
            id: 6,
            urgency: 'medium',
            type: 'director',
            typeLabel: 'Director Connection',
            trigger: {
                title: 'Alto Knights (cinema release 21 Mar)',
                platform: 'Cinema',
                platformColour: '#1a1a2e',
                detail: 'Robert De Niro double role — mob drama generating strong interest'
            },
            skyTitles: [
                { title: 'Goodfellas', where: 'Sky Cinema', type: 'Film' },
                { title: 'The Irishman', where: 'Sky Cinema', type: 'Film' }
            ],
            talent: 'Robert De Niro',
            strategicRecommendation: 'Pre-release Alto Knights anticipation — curate De Niro mob collection on Sky Cinema (Goodfellas / The Irishman)',
            relevanceScore: 'medium',
            timing: 'Week of 17 March'
        },
        {
            id: 7,
            urgency: 'low',
            type: 'genre',
            typeLabel: 'Genre Match',
            trigger: {
                title: '#Oscars2026 nominations',
                platform: 'X',
                platformColour: '#1a1a2e',
                detail: 'Award season buzz peaks'
            },
            skyTitles: [
                { title: 'Oscar-nominated films collection', where: 'Sky Cinema', type: 'Collection' },
                { title: 'The Zone of Interest', where: 'Sky Cinema', type: 'Film' },
                { title: 'Anatomy of a Fall', where: 'Sky Cinema', type: 'Film' }
            ],
            talent: 'Various nominees',
            strategicRecommendation: 'Oscars night content play — curate Sky Cinema collection of nominated films / drive tune-in around ceremony',
            relevanceScore: 'low',
            timing: 'Oscars night 15 March'
        },
        {
            id: 8,
            urgency: 'medium',
            type: 'franchise',
            typeLabel: 'Franchise Link',
            trigger: {
                title: 'Sweetpea return hints',
                platform: 'TikTok',
                platformColour: '#ff0050',
                detail: 'Star teases possible return — fans riding the buzz'
            },
            skyTitles: [
                { title: 'Sweetpea S1', where: 'Sky Atlantic', type: 'Series' }
            ],
            talent: 'Ella Purnell',
            strategicRecommendation: 'Amplify organic Sweetpea fan buzz — community engagement strategy while S2 speculation builds',
            relevanceScore: 'medium',
            timing: 'This week — riding the buzz'
        }
    ],

    // ─── Social Buzz (Entertainment Trending) ───
    socialBuzz: [
        { platform: 'x', topic: '#PeakyBlindersMovie', description: 'Fans react to the Netflix film — comparisons to the series, Cillian Murphy praise', volume: '142K posts', tags: ['Film', 'Netflix', 'Drama'] },
        { platform: 'x', topic: '#Oscars2026', description: 'Nominations announced — debates over snubs and surprises dominate', volume: '98K posts', tags: ['Awards', 'Film'] },
        { platform: 'tiktok', topic: 'POV: You\'re Tommy Shelby', description: 'Peaky Blinders movie has reignited the Tommy Shelby POV trend', volume: '89M views', tags: ['Entertainment', 'Trend'] },
        { platform: 'tiktok', topic: '#WhatToWatchUK', description: 'Creators sharing weekly streaming recommendations for UK viewers', volume: '54M views', tags: ['Recommendations', 'Streaming'] },
        { platform: 'instagram', topic: 'Day of the Jackal edits', description: 'Fan-made cinematic edits of Eddie Redmayne scenes going viral', volume: '12M impressions', tags: ['Fan Content', 'Sky Original'] },
        { platform: 'x', topic: '#BlackMirrorS7', description: 'Divided opinions — some call it the best series yet, others disagree', volume: '67K posts', tags: ['Netflix', 'Sci-Fi', 'Debate'] },
        { platform: 'tiktok', topic: '#28DaysLater', description: 'Trailer reaction videos and franchise retrospectives trending', volume: '28M views', tags: ['Horror', 'Film', 'Sequel'] },
        { platform: 'instagram', topic: 'Sweetpea fan art', description: 'Growing fan community creating art and cosplay around the Sky original', volume: '4.2M impressions', tags: ['Fan Art', 'Sky Original'] },
        { platform: 'x', topic: '#LoveIsBlindUK', description: 'UK series 2 premiere sparks massive live-tweeting and meme creation', volume: '45K posts', tags: ['Reality', 'Netflix'] },
        { platform: 'tiktok', topic: 'Mr Bigstuff return hints', description: 'Cast social media activity sparks speculation about Series 2', volume: '18M views', tags: ['Comedy', 'Sky Original'] },
        { platform: 'instagram', topic: 'War (Sky) aesthetic', description: 'Moody cinematography stills from War trending as phone wallpapers', volume: '3.8M impressions', tags: ['Sky Original', 'Aesthetic'] },
        { platform: 'x', topic: '#ReacherS3', description: 'Amazon\'s action series continues to dominate conversation', volume: '34K posts', tags: ['Amazon', 'Action'] }
    ],

    // ─── AI Briefing Content ───
    aiBriefing: {
        overview: 'Big week. Peaky Blinders: The Movie has landed on Netflix and Cillian Murphy is everywhere — 124M TikTok views, 2.4M Wikipedia hits. Great news for us: Oppenheimer, 28 Days Later and Dunkirk are all on Sky. Meanwhile, fans are organically buzzing about Day of the Jackal and Sweetpea on TikTok, campaigning for more. Two things happening at once — we can ride the Murphy wave and champion our own originals.',
        insights: [
            { title: 'The Murphy Moment', text: 'Three Murphy trends at once — Peaky Blinders movie, 28 Days Later sequel and Oppenheimer re-watches. The biggest single-talent opportunity we\'ve seen this quarter.' },
            { title: 'Fans Are Doing the Work', text: 'Day of the Jackal and Sweetpea are trending on TikTok without any paid push — fans are campaigning for new series off their own back. Worth amplifying.' },
            { title: 'Oscars Are Coming', text: 'Ceremony on 15 March. A two-week window to spotlight nominated films on Sky Cinema and make the most of the awards conversation.' }
        ]
    },

    // ─── Dashboard Spotlight ───
    spotlight: {
        trigger: {
            title: 'Peaky Blinders: The Movie',
            platform: 'Netflix',
            detail: '#1 Film in the UK — 4 days running, 2.4M Wikipedia views'
        },
        talent: 'Cillian Murphy',
        skyTitles: [
            'Oppenheimer (Sky Cinema)',
            '28 Days Later (Sky Store)',
            'Dunkirk (Sky Cinema)',
            'Retreat (Sky Store)'
        ],
        strategicRecommendation: 'Leverage Cillian Murphy moment — cross-promote Sky Cinema catalogue (Oppenheimer, 28 Days Later, Dunkirk) while Peaky Blinders movie drives peak interest',
        relevance: 'high'
    },

    // ─── Top Movers ───
    topMovers: [
        { title: 'Peaky Blinders: The Movie', platform: 'Netflix Film', change: 'NEW', direction: 'new' },
        { title: 'Black Mirror S7', platform: 'Netflix TV', change: 'NEW', direction: 'new' },
        { title: 'Running Point', platform: 'Netflix TV', change: '+3', direction: 'up' },
        { title: 'Love Is Blind UK S2', platform: 'Netflix TV', change: 'NEW', direction: 'new' },
        { title: 'Prometheus', platform: 'Netflix Film', change: '+5', direction: 'up' },
        { title: 'The Bondsman', platform: 'Amazon', change: 'NEW', direction: 'new' },
        { title: 'Zero Day', platform: 'Netflix TV', change: '-2', direction: 'down' },
        { title: 'The Recruit S2', platform: 'Netflix TV', change: '-3', direction: 'down' }
    ]
};
