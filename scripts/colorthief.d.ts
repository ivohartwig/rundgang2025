declare module 'colorthief' {
	export default class ColorThief {
		getColor(imagePath: string): Promise<[number, number, number]>;
		getPalette(
			imagePath: string,
			colorCount?: number,
		): Promise<[number, number, number][]>;
	}
}
