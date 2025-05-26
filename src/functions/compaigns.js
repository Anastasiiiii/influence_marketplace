import ModalForm from "../components/ModalForm";
import brand1 from "../images/brands/brand1.jpg";
import brand2 from "../images/brands/brand2.jpg";
import brand3 from "../images/brands/brand3.jpg";
import brand4 from "../images/brands/brand4.jpg";
import brand5 from "../images/brands/brand5.jpg";
import brand6 from "../images/brands/brand6.jpg";
import brand7 from "../images/brands/brand7.jpg";
import brand8 from "../images/brands/brand8.jpg";
import brand9 from "../images/brands/brand9.jpg";
import brand10 from "../images/brands/brand10.jpg";
import brand11 from "../images/brands/brand11.jpg";
import brand12 from "../images/brands/brand12.jpg";

export const generateBrandCampaigns = () => {
  const campaignTypes = ["Product Launch", "Brand Awareness", "Event Coverage"];
  const platforms = ["instagram", "youtube", "tiktok"];
  const categories = ["Fashion", "Tech", "Food"];

  const brands = [
    { name: "Brand 1", image: brand1 },
    { name: "Brand 2", image: brand2 },
    { name: "Brand 3", image: brand3 },
    { name: "Brand 4", image: brand4 },
    { name: "Brand 5", image: brand5 },
    { name: "Brand 6", image: brand6 },
    { name: "Brand 7", image: brand7 },
    { name: "Brand 8", image: brand8 },
    { name: "Brand 9", image: brand9 },
    { name: "Brand 10", image: brand10 },
    { name: "Brand 11", image: brand11 },
    { name: "Brand 12", image: brand12 },
  ];

  return Array.from({ length: 12 }, (_, i) => {
    const brand = brands[i % brands.length];
    const campaignType = campaignTypes[i % campaignTypes.length];
    const platform = platforms[i % platforms.length];
    const category = categories[i % categories.length];

    return {
      id: i + 1,
      brandName: brand.name,
      brandLogo: brand.image,
      campaignTitle: `${campaignType} - ${brand.name}`,
      platform,
      category,
      budget: `$${Math.floor(Math.random() * 9000) + 1000}`,
      duration: `${Math.floor(Math.random() * 3) + 1} months`,
      deliverables: `${Math.floor(Math.random() * 5) + 3} posts`,
      description: `Looking for creators for our ${campaignType.toLowerCase()} campaign.`,
      fullDescription: `
We are ${brand.name}, a leading brand in the ${category} industry. We're launching an exciting ${campaignType.toLowerCase()} and looking for passionate content creators to join our team.

This campaign aims to reach our target audience through authentic, engaging content that showcases our brand values and products. We believe in the power of influencer marketing and want to partner with creators who align with our vision.
      `.trim(),
      requirements: {
        minFollowers: Math.floor(Math.random() * 50000) + 10000,
        minEngagement: (Math.random() * 3 + 2).toFixed(1),
        countries: ['US', 'UK', 'CA'],
        age: '18-35'
      },
      deliverablesList: [
        'High-quality photos/videos featuring our product',
        'Authentic captions that tell your story',
        'Use of campaign hashtags and mentions',
        'Cross-platform promotion (if applicable)',
        'Engagement with audience comments'
      ],
      applicants: Math.floor(Math.random() * 50) + 5,
      posts: Math.floor(Math.random() * 5) + 2,
      postedDate: `${Math.floor(Math.random() * 30)} days ago`,
      status: 'Active',
      saved: false
    };
  });
};
