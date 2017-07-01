
// Change an hsl object { hue: int, sat: int, lit: int } to an array [int, int, int]
export const hslObjToArray = ({hue, sat, lit}) => [hue, sat, lit];

// Returns a boolean telling if this is a valid hsl array [int, int, int]
export const isHSLArray = c =>
	Array.isArray(c) && c.length === 3 &&
	typeof c[0] === 'number' && c[0] >= 0 && c[0] <= 360 &&
	typeof c[1] === 'number' && c[1] >= 0 && c[1] <= 100 &&
	typeof c[2] === 'number' && c[2] >= 0 && c[2] <= 100;

// Returns a boolean telling if this is a valid hsl object { hue: int, sat: int, lit: int }
export const isHSLObject = c =>
	typeof c === 'object' && isHSLArray(hslObjToArray(c));

// Returns a boolean telling if this is a valid hex color '#000000'
export const isHexColor = c => typeof c === 'string' && c[0] === '#' && (c.length === 7 || c.length === 4);
