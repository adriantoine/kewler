
import flow from 'lodash.flow';
import isFunction from 'lodash.isfunction';
import {colorToHSL, colorToHex} from './transformers';
import {isHSLArray, isHSLObject, isHexColor} from './validation';

// Makes sure the function gets an HSL object
const withHSL = func => c => func(colorToHSL(c));

const isValidColor = col => col && (isHSLArray(col) || isHSLObject(col) || isHexColor(col));

// Return hex from a color
export const color = (col, ...colAlts) => {
	// If the color passed is a function, execute it
	if (isFunction(col)) {
		col = col();
	}

	// If nothing is passed, return a black color by default
	if (!col) {
		return '#000000';
	}

	// Validate
	if (!isValidColor(col)) {
		throw new Error('Color passed is not a valid color');
	}

	// When alterations are passed, process the color and return an hex value
	if (colAlts.length) {
		let alteration = flow(colAlts);
		return colorToHex(alteration(col));
	}

	// If just a color is passed, return a function which takes alterations
	return (...alts) => {
		const firstArg = alts[0];
		if (firstArg && isValidColor(firstArg)) {
			return color(firstArg);
		}

		// Return the altered color wrapper if alterations are passed
		if (alts.length) {
			let alteration = flow(alts);
			return color(alteration(col));
		}

		// If no argument is passed, return the hex color
		return colorToHex(col);
	};
};

// British proxy
export const colour = color;

// Alter lightness of an hsl color
export const lightness = percent => withHSL(([hue, sat, lit]) => ([hue, sat, lit + percent]));

// Alter saturation of an hsl color
export const saturation = percent => withHSL(([hue, sat, lit]) => ([hue, sat + percent, lit]));

// Alter hue of an hsl color
export const hue = percent => withHSL(([hue, sat, lit]) => ([hue + percent, sat, lit]));
