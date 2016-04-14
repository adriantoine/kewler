
import isArray from 'lodash.isarray';
import hslToHex from 'hsl-to-hex';
import hexToHsl from 'hex-to-hsl';

// Change an hsl object { hue: int, sat: int, lit: int } to an array [int, int, int]
const hslObjToArray = ({hue, sat, lit}) => [hue, sat, lit];

// Returns a boolean telling if this is a valid hsl array [int, int, int]
const isValidHSL = c =>
	isArray(c) && c.length === 3 &&
	typeof c[0] === 'number' && c[0] >= 0 && c[0] <= 360 &&
	typeof c[1] === 'number' && c[1] >= 0 && c[1] <= 100 &&
	typeof c[2] === 'number' && c[2] >= 0 && c[2] <= 100;

// Returns a boolean telling if this is a valid hsl object { hue: int, sat: int, lit: int }
const isHSLObject = c =>
	typeof c === 'object' && isValidHSL(hslObjToArray(c));

// Returns a boolean telling if this is a valid hex color '#ffffff'
const isHexColor = c => typeof c === 'string' && c.length === 7;

// Return an HSL array whatever the color type is passed
const toHSL = c => {
	if (isValidHSL(c)) {
		return c;
	}

	if (isHSLObject(c)) {
		return hslObjToArray(c);
	}

	if (isHexColor(c)) {
		return hexToHsl(c);
	}

	throw (new Error('Color type is not supported: ' + c));
};

// Makes sure the function gets an HSL object
const withHSL = func => c => func(toHSL(c));

// Returns an hex string value, whatever HSL type is passed in argument
const getHex = c => {
	if (isArray(c)) {
		return hslToHex(...c);
	}

	if (isHSLObject(c)) {
		return hslToHex(c.hue, c.sat, c.lit);
	}

	if (isHexColor(c)) {
		return c;
	}

	throw (new Error('Color type is not supported: ' + c));
};

// Return hex from a color
export const color = c => alteration => getHex(alteration ? alteration(c) : c);

// Darken a color
export const darken = percent => withHSL(([hue, sat, lit]) => ([hue, sat, lit - percent]));
