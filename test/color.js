
import test from 'ava';
import {color} from '../index';

import {blueHslObj, blueHslArray, blueHex} from './_fixtures';

test('color returns a hex color from an object', t => {
	t.is(color(blueHslObj)(), blueHex);
});

test('color returns a hex color from an array', t => {
	t.is(color(blueHslArray)(), blueHex);
});

test('color returns a hex color from an hex string', t => {
	t.is(color(blueHex)(), blueHex);
});
