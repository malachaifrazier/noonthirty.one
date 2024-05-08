export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type Link = {
	text: string;
	href: string;
};

export type Hero = {
	title?: string;
	text?: string;
	image?: Image;
	actions?: Link[];
};

export type Subscribe = {
	title?: string;
	text?: string;
	formUrl: string;
};

export type SiteConfig = {
	logo?: Image;
	title: string;
	subtitle?: string;
	description: string;
	image?: Image;
	headerNavLinks?: Link[];
	footerNavLinks?: Link[];
	socialLinks?: Link[];
	hero?: Hero;
	subscribe?: Subscribe;
	postsPerPage?: number;
	projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
	title: 'Noonthirty.one',
	subtitle: 'One-person Ruby on Rails Product Development',
	description: 'Noonthirty.one is a one-person design and development studio, focused on creating beautiful and functional websites and applications.',
	image: {
		src: '/NOONTHIRTY.ONE.Logo.4.Laila.bold.png',
		alt: 'Noonthirty.one - One-person Ruby on Rails Development studio'
	},
	headerNavLinks: [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Projects',
			href: '/projects'
		},
		{
			text: 'Blog',
			href: '/blog'
		},
		{
			text: 'Tags',
			href: '/tags'
		}
	],
	footerNavLinks: [
			// {
			//     text: 'About',
			//     href: '/about'
			// },
			{
				text: 'Contact',
				href: '/contact'
			},
			{
				text: 'Terms',
				href: '/terms'
			},
			// {
			//     text: 'Download theme',
			//     href: 'https://github.com/JustGoodUI/dante-astro-theme'
			// }
	],
	socialLinks: [
		{
			text: 'Github',
			href: 'https://github.com/malachaifrazier/'
		},
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/malachaifrazier/'
		},
		{
			text: 'X/Twitter',
			href: 'https://twitter.com/malcreatesstuff/'
		}
	],
	hero: {
		title: 'Hello, there ✋🏽',
		text: "I'm **Malachai Frazier**, a Senior Ruby on Rails Developer and Technical Creative, dedicated to the realms of collaboration and digital artistry. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional digital products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding on <a href='https://github.com/malachaifrazier' target='_blank'>GitHub</a> and follow me on <a href='https://twitter.com/malcreatesstuff' target='_blank'>Twitter/X</a>.",
		image: {
			// src: '/yes-eyes-selfie.svg',
			src: '/NOONTHIRTY.ONE.Logo.4.Laila.bold.png',
			alt: 'A person smiling and looking at the camera.'
		},
		actions: [
			{
				text: 'Get in Touch',
				href: '/contact'
			}
		]
	},
	subscribe: {
		title: 'Subscribe to Dante Newsletter',
		text: 'One update per week. All the latest posts directly in your inbox.',
		formUrl: '#'
	},
	postsPerPage: 8,
	projectsPerPage: 8
};

export default siteConfig;
// dedicated to the realms of collaboration and technical artistry. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on GitHub or follow me on Twitter/X.