export const SITE = {
	title: 'The Overengineering Project',
	description: 'The. Overengineering. Project.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'msris108',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/msris108/the-overengineering-project/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/ec6KA9Uh`;

export const ALGOLIA = {
	indexName: import.meta.env.PUBLIC_INDEX_NAME,
	appId: import.meta.env.PUBLIC_APP_ID,
	apiKey: import.meta.env.PUBLIC_KEY,
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Welcome': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'About', link: 'en/about' },
			{ text: 'Newsletter', link: 'en/newsletter' },
			{ text: 'Contribute', link: 'en/contribute' },
		],
	},
};
