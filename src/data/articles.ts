export interface Article {
	id: string;
	title: string;
	excerpt?: string;
	slug: string;
	date: string;
	category: 'News' | 'Insights' | 'Perspectives';
	imagePath?: string;
	hasViewButton?: boolean;
}

export const articles: Article[] = [
	{
		id: '1',
		title:
			'2024 Modern Home Design Trends: What California Homeowners Need to Know',
		slug: 'modern-home-design-trends',
		date: 'Jan 10, 2024',
		category: 'News',
		imagePath: '/src/assets/adus/hero.jpg',
	},
	{
		id: '2',
		title:
			'ADU Regulations Update: New Opportunities for California Homeowners',
		slug: 'adu-regulations',
		date: 'Dec 22, 2023',
		category: 'Perspectives',
	},
	{
		id: '3',
		title:
			'Sustainable Architecture: Balancing Aesthetics and Environmental Responsibility',
		slug: 'sustainable-architecture',
		date: 'Nov 27, 2023',
		category: 'Insights',
	},
	{
		id: '4',
		title: 'The Role of Structural Engineering in Modern Residential Design',
		slug: 'structural-engineering',
		date: 'Oct 9, 2023',
		category: 'Insights',
	},
	{
		id: '5',
		title: 'How AI is Transforming Architectural Design and Engineering',
		slug: 'ai-in-architecture',
		date: 'Sep 2, 2023',
		category: 'Perspectives',
	},
	{
		id: '6',
		title: 'Cecilia Home Announces New Community-Focused Design Initiative',
		slug: 'cecilia-home-community-project',
		date: 'Aug 12, 2023',
		category: 'News',
		hasViewButton: true,
	},
	{
		id: '7',
		title: 'Fire Restoration: Critical Steps for Homeowners After a Disaster',
		slug: 'fire-restoration-steps',
		date: 'Jul 28, 2023',
		category: 'Insights',
	},
	{
		id: '8',
		title: 'Retaining Wall Design: Engineering Solutions for Sloped Properties',
		slug: 'retaining-wall-design',
		date: 'Jul 15, 2023',
		category: 'Perspectives',
	},
	{
		id: '9',
		title: 'Commercial Design Trends for Restaurants and Retail Spaces',
		slug: 'commercial-design-trends',
		date: 'Jun 30, 2023',
		category: 'News',
	},
	{
		id: '10',
		title: 'Foundation Repairs: When to Call a Structural Engineer',
		slug: 'foundation-repairs',
		date: 'Jun 18, 2023',
		category: 'Insights',
	},
	{
		id: '11',
		title: 'Energy-Efficient Home Design: Saving Money While Saving the Planet',
		slug: 'energy-efficient-design',
		date: 'May 25, 2023',
		category: 'Perspectives',
	},
	{
		id: '12',
		title: 'California Building Codes: 2023 Updates That Affect Your Project',
		slug: 'building-code-updates',
		date: 'May 10, 2023',
		category: 'News',
	},
	{
		id: '13',
		title: 'Smart Home Integration in Architectural Design',
		slug: 'smart-home-integration',
		date: 'Apr 22, 2023',
		category: 'Insights',
	},
	{
		id: '14',
		title: 'Kitchen Remodeling: Maximizing Space and Functionality',
		slug: 'kitchen-remodeling',
		date: 'Apr 5, 2023',
		category: 'Perspectives',
	},
	{
		id: '15',
		title:
			'Cecilia Home Celebrates 5 Years of Excellence in Design and Engineering',
		slug: 'cecilia-home-anniversary',
		date: 'Mar 18, 2023',
		category: 'News',
		hasViewButton: true,
	},
];
