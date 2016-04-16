
import isArray from 'lodash.isarray';
import _hslToHex from 'hsl-to-hex';
import hexToHsl from 'hex-to-hsl';

import {isHSLArray, isHSLObject, isHexColor, hslObjToArray} from './validation';

// Return an HSL array whatever the color type is passed
export const colorToHSL = c => {
	if (isHSLArray(c)) {
		return c;
	}

	if (isHSLObject(c)) {
		return hslObjToArray(c);
	}

	if (isHexColor(c)) {
		return hexToHsl(c);
	}

	return c;
};

// Returns an hex string value, whatever color type is passed in argument
export const colorToHex = c => {
	if (isArray(c)) {
		return _hslToHex(...c);
	}

	if (isHSLObject(c)) {
		return _hslToHex(c.hue, c.sat, c.lit);
	}

	if (isHexColor(c)) {
		return c;
	}

	return c;
};
