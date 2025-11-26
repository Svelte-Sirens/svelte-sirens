import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
export type Picture = Exclude<Pick<EnhancedImgAttributes, 'src'>['src'], string>;

const assets = {
	events: import.meta.glob<Picture>('./events/*.{jpg,png}', {
		eager: true,
		import: 'default',
		query: { enhanced: true, aspect: '16:9' },
	}),
	speakers: import.meta.glob<Picture>('./speakers/*.{jpg,png}', {
		eager: true,
		import: 'default',
		query: { enhanced: true, w: '800;400', aspect: '1:1' },
	}),
};

export function asset(key: keyof typeof assets, name: string) {
	const picture = assets[key]?.[`./${key}/${name}`];
	if (!picture) {
		throw new Error(`Asset not found: ${name}`);
	}

	return picture;
}
