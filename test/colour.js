
import test from 'ava';
import {colour, lightness} from '../src/index';

import {blueHslArray} from './_fixtures';

test('color returns a black color by default', t => {
	t.is(colour(), '#000000');
	t.is(colour(null), '#000000');
	t.is(colour(() => null), '#000000');
});

test('color with a color and alteration passed, returns the altered color', t => {
	t.is(colour(blueHslArray, lightness(-10)), '#0076d1');
	t.is(colour(colour(blueHslArray), lightness(-10)), '#0076d1');
});

test('color with a color and several alteration passed, returns the altered color', t => {
	t.is(colour(blueHslArray, lightness(-10), lightness(-5)), '#0068b8');
	t.is(colour(blueHslArray, lightness(-10), lightness(-5), lightness(50)), '#b8e0ff');
	t.is(colour(colour(blueHslArray), lightness(-10), lightness(-5), lightness(50)), '#b8e0ff');
});
