
import test from 'ava';
import {color, lightness} from '../src/index';

import {blueHslArray} from './_fixtures';

test('color returns a black color by default', t => {
	t.is(color(), '#000000');
	t.is(color(null), '#000000');
	t.is(color(() => null), '#000000');
});

test('color with a color and alteration passed, returns the altered color', t => {
	t.is(color(blueHslArray, lightness(-10)), '#0076d1');
	t.is(color(color(blueHslArray), lightness(-10)), '#0076d1');
});

test('color with a color and several alteration passed, returns the altered color', t => {
	t.is(color(blueHslArray, lightness(-10), lightness(-5)), '#0068b8');
	t.is(color(blueHslArray, lightness(-10), lightness(-5), lightness(50)), '#b8e0ff');
	t.is(color(color(blueHslArray), lightness(-10), lightness(-5), lightness(50)), '#b8e0ff');
});
