export const SITE_TITLE = 'Shubham Jaybhaye';
export const SITE_TAGLINE = 'AI-First Software Engineer · Backend & Data Systems';
export const SITE_DESCRIPTION =
	'AI-first software engineer with 9+ years building backend and large-scale data systems — fintech, streaming, and AI-augmented delivery.';
export const SITE_LOCATION = 'Pune, India';

/** Portrait used on home + about. Files live in `public/images/profile/`. */
export const PROFILE = {
	src: '/images/profile/shubham.jpg',
	srcSm: '/images/profile/shubham-sm.jpg',
	alt: 'Shubham Jaybhaye outdoors, wearing sunglasses and a patterned navy shirt',
} as const;

export const SOCIAL = {
	github: 'https://github.com/shubhamJay',
	linkedin: 'https://www.linkedin.com/in/shubhamJay',
	instagramMemories: 'https://www.instagram.com/memories_in_jpg',
	instagramClicks: 'https://www.instagram.com/clicks.by.shubham',
	email: 'mailto:Shubhamj7997@gmail.com',
	/** PDF not hosted publicly (keeps phone off the site). Request via email. */
	cvRequest: 'mailto:Shubhamj7997@gmail.com?subject=Resume%20request',
	medium: 'https://medium.com/@shubhamj7997',
} as const;

/** Prefix a site-root path with Astro `base` (GitHub Pages project sites). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL;
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${base}${normalized}`;
}
