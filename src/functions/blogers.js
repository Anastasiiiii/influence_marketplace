import bloger1 from "../images/blogers/bloger1.jpg";
import bloger2 from "../images/blogers/bloger2.jpg";
import bloger3 from "../images/blogers/bloger3.jpg";
import bloger4 from "../images/blogers/bloger4.jpg";
import bloger5 from "../images/blogers/bloger5.jpg";
import bloger6 from "../images/blogers/bloger6.jpg";
import bloger7 from "../images/blogers/bloger7.jpg";
import bloger8 from "../images/blogers/bloger8.jpg";
import bloger9 from "../images/blogers/bloger9.jpg";
import bloger10 from "../images/blogers/bloger10.jpg";
import bloger11 from "../images/blogers/bloger11.jpg";
import bloger12 from "../images/blogers/bloger12.jpg";

export const generateMockInfluencers = () => {
    const categories = ['Fashion', 'Beauty', 'Fitness', 'Tech', 'Travel', 'Food', 'Lifestyle', 'Gaming'];
    const countries = ['US', 'UK', 'CA', 'AU', 'FR', 'DE', 'BR', 'JP'];

    const bloggers = [
        { name: "Anna Smith", image: bloger1, platforms: ["YouTube", "Instagram"], subscribers: "1.2M", rating: 4.8 },
        { name: "John Doe", image: bloger2, platforms: ["TikTok"], subscribers: "850K", rating: 4.5 },
        { name: "Stefan Johnson", image: bloger3, platforms: ["Instagram", "YouTube"], subscribers: "2.3M", rating: 4.9 },
        { name: "Mary Brown", image: bloger4, platforms: ["YouTube"], subscribers: "1.1M", rating: 4.7 },
        { name: "Sophia Davis", image: bloger5, platforms: ["TikTok", "Instagram"], subscribers: "900K", rating: 4.6 },
        { name: "James Wilson", image: bloger6, platforms: ["YouTube", "TikTok"], subscribers: "1.5M", rating: 4.8 },
        { name: "Will Martinez", image: bloger7, platforms: ["Instagram"], subscribers: "1.8M", rating: 4.9 },
        { name: "Liam Anderson", image: bloger8, platforms: ["YouTube", "Instagram"], subscribers: "2.0M", rating: 4.7 },
        { name: "Emma Thomas", image: bloger9, platforms: ["TikTok"], subscribers: "750K", rating: 4.5 },
        { name: "Noah Taylor", image: bloger10, platforms: ["YouTube"], subscribers: "1.3M", rating: 4.6 },
        { name: "Ava Moore", image: bloger11, platforms: ["Instagram", "TikTok"], subscribers: "1.9M", rating: 4.8 },
        { name: "Weny Jackson", image: bloger12, platforms: ["YouTube", "Instagram"], subscribers: "2.5M", rating: 4.9 },
    ];

    return bloggers.map((b, i) => {
        const views = parseFloat((Math.random() * 1_000_000).toFixed(0));
        const likes = parseFloat((views * (Math.random() * 0.2)).toFixed(0));         // likes ≈ 10–20% of views
        const comments = parseFloat((likes * (Math.random() * 0.2)).toFixed(0));      // comments ≈ 10–20% of likes
        const saves = parseFloat((Math.random() * 10000).toFixed(0));
        const shares = parseFloat((Math.random() * 5000).toFixed(0));
        const videosPerWeek = (Math.random() * 3 + 1).toFixed(1);
        const paidEngagement = (Math.random() * 5 + 1).toFixed(2);
        const paidViews = parseFloat((Math.random() * 200000).toFixed(0));
        const posts = Math.floor(Math.random() * 200 + 20);
        const followers = Math.floor(Math.random() * 900000) + 10000;
        const malePercentage = Math.random() * 0.8 + 0.1; // від 10% до 90%
        const femalePercentage = 1 - malePercentage;

        const maleFollowers = Math.round(followers * malePercentage);
        const femaleFollowers = followers - maleFollowers;
        const ageGroups = ["13-17", "18-24", "25-34", "35-44", "45+"];
        const generateDemographics = () => {
            const demographics = ageGroups.map((age) => {
                const female = parseFloat((Math.random() * 12).toFixed(2));
                const male = parseFloat((Math.random() * 12).toFixed(2));
                return { age, female, male };
            });
            return demographics;
        };

        const generateCountryDistribution = () => {
            const allCountries = ["US", "UK", "CA", "AU", "FR", "DE", "BR", "JP", "IN", "MX", "PL", "IT"];
            const selected = allCountries.sort(() => 0.5 - Math.random()).slice(0, 6); // вибираємо 6 країн

            let percentages = selected.map(() => Math.random());
            const total = percentages.reduce((a, b) => a + b, 0);
            percentages = percentages.map(p => parseFloat(((p / total) * 100).toFixed(1)));

            return selected.map((country, i) => ({
                country,
                value: percentages[i],
            }));
        };

        const generateLanguages = () => {
            const allLanguages = ["English", "Spanish", "French", "German", "Portuguese", "Japanese", "Polish", "Hindi"];
            const selected = allLanguages.sort(() => 0.5 - Math.random()).slice(0, 4);

            let weights = selected.map(() => Math.random());
            const total = weights.reduce((a, b) => a + b, 0);
            weights = weights.map(p => parseFloat(((p / total) * 100).toFixed(1)));

            return selected.map((lang, i) => ({
                language: lang,
                value: weights[i],
            }));
        };



        return {
            id: i + 1,
            name: b.name,
            handle: "@" + b.name.toLowerCase().replace(" ", ""),
            followers: followers,
            maleFollowers: maleFollowers,
            femaleFollowers: femaleFollowers,
            languages: generateLanguages(),
            countryDistribution: generateCountryDistribution(),
            engagement: (Math.random() * 9 + 1).toFixed(2),
            growth: (Math.random() * 35 - 5).toFixed(1),
            avatar: b.image,
            demographics: generateDemographics(),
            platforms: b.platforms,
            subscribers: b.subscribers,
            category: categories[i % categories.length],
            country: countries[i % countries.length],
            startFollowers: Math.floor(Math.random() * 900000) + 10000,
            rating: b.rating,
            portfolio: Array.from({ length: 8 }, (_, idx) => ({
                id: idx + 1,
                thumbnail: `https://picsum.photos/seed/${i + '-' + idx}/300/500`, // випадкове превʼю
                title: `Promo Video ${idx + 1}`
            })),


            stats: {
                averageViews: views,
                averageLikes: likes,
                averageComments: comments,
                averageSaves: saves,
                averageShares: shares,
                averageVideosPerWeek: parseFloat(videosPerWeek),
                paidEngagement: parseFloat(paidEngagement),
                paidViews: paidViews,
                posts: posts,
            }
        };

    });
};

