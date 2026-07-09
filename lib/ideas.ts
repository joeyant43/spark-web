export interface Idea {
  id: number;
  title: string;
  description: string;
  type: string;
  platform: string;
  popularity: number;
  category: string;
  isLive?: boolean;
  game?: string;
  contentFormat?: string;
  likes: number;
}

export interface Answers {
  platform?: string[];
  niche?: string[];
  style?: string[];
  goal?: string[];
  stylePreferences?: Record<string, number>;
}

const viralTrends: Record<string, Array<{
  id: string; trend: string; category: string;
  hashtags: string[]; popularity: number; isLive?: boolean;
}>> = {
  TikTok: [
    { id: "t1", trend: "Just Chatting LIVE — Answer viewer questions", category: "Lifestyle", hashtags: ["#TikTokLIVE", "#JustChatting"], popularity: 95, isLive: true },
    { id: "t2", trend: "LIVE Gaming with chat interactions", category: "Gaming", hashtags: ["#LiveGaming", "#TikTokLIVE"], popularity: 94, isLive: true },
    { id: "t3", trend: "LIVE Makeup Tutorial — Take requests", category: "Beauty", hashtags: ["#LiveMakeup", "#BeautyLIVE"], popularity: 92, isLive: true },
    { id: "t4", trend: "LIVE Workout Session — Follow along", category: "Fitness", hashtags: ["#LiveWorkout", "#FitnessLIVE"], popularity: 89, isLive: true },
    { id: "t5", trend: "Get Ready With Me", category: "Beauty", hashtags: ["#GRWM", "#MakeupTutorial"], popularity: 87 },
    { id: "t6", trend: "Day in my life as...", category: "Lifestyle", hashtags: ["#DayInMyLife", "#Vlog"], popularity: 85 },
    { id: "t7", trend: "POV challenges", category: "Comedy", hashtags: ["#POV", "#Acting"], popularity: 84 },
    { id: "t8", trend: "Cozy gaming setup tour", category: "Gaming", hashtags: ["#GamingSetup", "#SetupTour"], popularity: 82 },
    { id: "t9", trend: "Tech unboxing ASMR", category: "Tech", hashtags: ["#Unboxing", "#TechReview"], popularity: 81 },
  ],
  YouTube: [
    { id: "y1", trend: "24-Hour LIVE Stream Marathon", category: "Lifestyle", hashtags: ["#24HourLivestream", "#LiveMarathon"], popularity: 96, isLive: true },
    { id: "y2", trend: "LIVE Speedrun with donations", category: "Gaming", hashtags: ["#LiveSpeedrun", "#CharityStream"], popularity: 94, isLive: true },
    { id: "y3", trend: "LIVE Tutorial — Build something together", category: "Education", hashtags: ["#LiveTutorial", "#LearnLive"], popularity: 91, isLive: true },
    { id: "y4", trend: "Transformation videos", category: "Fitness", hashtags: ["#Transformation", "#FitnessJourney"], popularity: 88 },
    { id: "y5", trend: "Reacting to old content", category: "Comedy", hashtags: ["#Reaction", "#ThrowbackContent"], popularity: 86 },
    { id: "y6", trend: "Budget breakdown", category: "Lifestyle", hashtags: ["#MoneyTalk", "#BudgetBreakdown"], popularity: 83 },
    { id: "y7", trend: "Deep dive documentaries", category: "Education", hashtags: ["#Documentary", "#DeepDive"], popularity: 80 },
  ],
  Instagram: [
    { id: "i1", trend: "Instagram LIVE — Behind the scenes", category: "Lifestyle", hashtags: ["#InstaLive", "#BTS"], popularity: 93, isLive: true },
    { id: "i2", trend: "LIVE Fashion Haul with styling tips", category: "Beauty", hashtags: ["#LiveHaul", "#FashionLive"], popularity: 91, isLive: true },
    { id: "i3", trend: "Reel transitions", category: "Comedy", hashtags: ["#ReelTransition", "#InstaReels"], popularity: 87 },
    { id: "i4", trend: "Before & After", category: "Beauty", hashtags: ["#BeforeAndAfter", "#GlowUp"], popularity: 84 },
    { id: "i5", trend: "Workout splits", category: "Fitness", hashtags: ["#WorkoutPlan", "#FitnessReels"], popularity: 82 },
    { id: "i6", trend: "Mini vlog reels", category: "Lifestyle", hashtags: ["#MiniVlog", "#DailyVlog"], popularity: 79 },
  ],
  Twitch: [
    { id: "tw1", trend: "Just Chatting — Community hangout", category: "Lifestyle", hashtags: ["#JustChatting", "#TwitchStream"], popularity: 97, isLive: true },
    { id: "tw2", trend: "Competitive Ranked Gameplay", category: "Gaming", hashtags: ["#RankedGrind", "#CompetitiveGaming"], popularity: 96, isLive: true },
    { id: "tw3", trend: "IRL Streaming — Outdoor adventures", category: "Lifestyle", hashtags: ["#IRLStream", "#OutdoorIRL"], popularity: 94, isLive: true },
    { id: "tw4", trend: "Creative Streams — Art/Music live", category: "Education", hashtags: ["#CreativeStream", "#ArtStream"], popularity: 93, isLive: true },
    { id: "tw5", trend: "Viewer Games — Play with community", category: "Gaming", hashtags: ["#ViewerGames", "#CommunityGaming"], popularity: 92, isLive: true },
  ],
};

const trendingGames = [
  { name: "Counter-Strike 2", genre: "Tactical FPS", popularity: 100, hashtags: ["#CS2", "#CounterStrike2"] },
  { name: "Fortnite", genre: "Battle Royale", popularity: 98, hashtags: ["#Fortnite", "#FortniteClips"] },
  { name: "Roblox", genre: "Platform", popularity: 98, hashtags: ["#Roblox", "#RobloxGaming"] },
  { name: "Minecraft", genre: "Sandbox", popularity: 100, hashtags: ["#Minecraft", "#MinecraftBuilds"] },
  { name: "League of Legends", genre: "MOBA", popularity: 99, hashtags: ["#LeagueOfLegends", "#LoL"] },
  { name: "Valorant", genre: "Tactical FPS", popularity: 97, hashtags: ["#Valorant", "#ValorantClips"] },
  { name: "Genshin Impact", genre: "Action RPG", popularity: 96, hashtags: ["#GenshinImpact", "#Genshin"] },
  { name: "Elden Ring", genre: "Action RPG", popularity: 95, hashtags: ["#EldenRing", "#EldenRingClips"] },
  { name: "PEAK", genre: "Co-op Climbing", popularity: 97, hashtags: ["#PEAK", "#CoopGame"], isNew: true },
  { name: "ARC Raiders", genre: "Co-op Shooter", popularity: 99, hashtags: ["#ARCRaiders", "#NewGame"], isNew: true },
];

function getRelevantTrends(answers: Answers) {
  const platforms = answers.platform || [];
  const niches = answers.niche || [];
  let all: Array<typeof viralTrends["TikTok"][0] & { source: string }> = [];

  const addFromPlatform = (platform: string) => {
    const trends = viralTrends[platform] || [];
    const filtered = trends.filter(
      (t) => niches.includes(t.category) || niches.length === 0
    );
    all = [...all, ...filtered.map((t) => ({ ...t, source: platform }))];
  };

  if (platforms.includes("Multiple Platforms")) {
    Object.keys(viralTrends).forEach(addFromPlatform);
  } else {
    platforms.forEach(addFromPlatform);
  }

  return all.sort((a, b) => b.popularity - a.popularity);
}

export function generateIdeas(answers: Answers): Idea[] {
  const platforms = answers.platform || ["your platform"];
  const niches = answers.niche || ["your niche"];
  const platform = platforms[0];
  const niche = niches[0];

  const relevantTrends = getRelevantTrends(answers);
  const liveTrends = relevantTrends.filter((t) => t.isLive);
  const regularTrends = relevantTrends.filter((t) => !t.isLive);

  const ideas: Idea[] = [];
  let idCounter = 1;

  // Gaming-specific game ideas
  const isGaming = niches.includes("Gaming");
  if (isGaming) {
    const topGames = [...trendingGames]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 5);

    topGames.forEach((game) => {
      const gameIdeas = [
        {
          title: `🔴 LIVE: ${game.name} Ranked Grind`,
          description: `Stream ${game.name} ranked gameplay with live chat interaction. ${game.hashtags.join(" ")}`,
          type: "game-specific",
          platform,
          popularity: game.popularity,
          category: "Gaming",
          isLive: true,
          game: game.name,
        },
        {
          title: `${game.name}: Best Moments Compilation`,
          description: `Highlight reel of your best ${game.name} plays. ${game.genre} clips that go viral! ${game.hashtags.join(" ")}`,
          type: "game-specific",
          platform,
          popularity: game.popularity - 2,
          category: "Gaming",
          game: game.name,
        },
      ];
      const pick = gameIdeas[Math.floor(Math.random() * gameIdeas.length)];
      ideas.push({ id: idCounter++, ...pick, likes: 0 });
    });
  }

  // Live streaming trends
  const liveCount = isGaming ? 3 : 6;
  liveTrends.slice(0, liveCount).forEach((trend) => {
    ideas.push({
      id: idCounter++,
      title: `🔴 LIVE: ${trend.trend}`,
      description: `Go live with "${trend.trend}". Interactive chat engagement! ${trend.hashtags.join(" ")}`,
      type: "trending",
      platform: trend.source,
      popularity: trend.popularity,
      category: trend.category,
      isLive: true,
      likes: 0,
    });
  });

  // Regular trend ideas
  regularTrends.slice(0, 3).forEach((trend) => {
    ideas.push({
      id: idCounter++,
      title: `${trend.trend} — ${niche} edition`,
      description: `Jump on the "${trend.trend}" trend. ${trend.hashtags.join(" ")}`,
      type: "trending",
      platform: trend.source,
      popularity: trend.popularity,
      category: trend.category,
      likes: 0,
    });
  });

  // Evergreen ideas
  const evergreen = [
    { title: `🔴 LIVE ${niche} Q&A Stream`, description: "Answer viewer questions in real-time. Build community & boost engagement.", category: niche, isLive: true, contentFormat: "Series" },
    { title: `POV: The time I almost quit ${niche}`, description: "Share a dramatic/vulnerable moment from your creator journey. Authentic storytelling builds connection.", category: "Lifestyle", contentFormat: "POV/Story" },
    { title: `My Hot Take on ${niche} That Everyone's Talking About`, description: "Share your unique opinion on a trending topic. Sparks discussion and engagement.", category: niche, contentFormat: "React/Commentary" },
    { title: `3 ${niche} Setup Hacks on a Budget`, description: "Practical, actionable tips. High-value content that gets saved.", category: "Tech", contentFormat: "Tutorial/Tips" },
    { title: `5 Mistakes Every New ${niche} Creator Makes`, description: "Help others avoid common pitfalls. Educational and highly shareable.", category: "Education", contentFormat: "Tutorial/Tips" },
    { title: `${niche} Journey: Day 1–30 From Zero`, description: "Serial content tracking your progress. Builds anticipation and loyal following.", category: niche, contentFormat: "Series" },
    { title: `What They Don't Show You About ${niche}`, description: "Behind-the-scenes reality check. Authenticity drives massive engagement.", category: "Lifestyle", contentFormat: "Twist" },
    { title: `${niche} Expectations vs Reality (The Truth)`, description: "Subvert typical creator glamorization. Authentic and relatable.", category: "Comedy", contentFormat: "Twist" },
    { title: `Why I Started ${niche} — My Honest Story`, description: "Vulnerability and authenticity about your origin story. Deeply resonates.", category: niche, contentFormat: "POV/Story" },
    { title: `${niche} AMA (Ask Me Anything) Stream`, description: "Deep dive Q&A session. Perfect for building a loyal community.", category: niche, isLive: true, contentFormat: "Community" },
  ];

  const shuffled = [...evergreen].sort(() => 0.5 - Math.random());
  shuffled.slice(0, 5).forEach((eg) => {
    ideas.push({
      id: idCounter++,
      type: "evergreen",
      platform,
      popularity: eg.isLive ? 88 : 82,
      likes: 0,
      ...eg,
    });
  });

  return ideas
    .sort((a, b) => {
      if (a.isLive && !b.isLive) return -1;
      if (!a.isLive && b.isLive) return 1;
      return b.popularity - a.popularity;
    })
    .slice(0, 15);
}

export const nicheColors: Record<string, { primary: string; bg: string }> = {
  Gaming: { primary: "#a78bfa", bg: "#1a1030" },
  Lifestyle: { primary: "#fb7185", bg: "#1f0d15" },
  Education: { primary: "#60a5fa", bg: "#0d1a2f" },
  Comedy: { primary: "#fbbf24", bg: "#1f1800" },
  Tech: { primary: "#34d399", bg: "#0d1f18" },
  Beauty: { primary: "#f472b6", bg: "#1f0d1a" },
  Fitness: { primary: "#fb923c", bg: "#1f1000" },
  Other: { primary: "#9e9889", bg: "#16151f" },
};

export const platformColors: Record<string, string> = {
  TikTok: "#ff0050",
  YouTube: "#ff0000",
  Instagram: "#e1306c",
  Twitch: "#9146ff",
};
