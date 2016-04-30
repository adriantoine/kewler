
import test from 'ava';
import {color, lightness} from '../src/index';

import {blueHslArray, blueHslObj} from './fixtures';

test('color with just a color passed returns a function which returns the color', t => {
	t.is(color(blueHslArray)(), '#0593ff');
});

test('color with just a color passed returns a function which can alterate the color', t => {
	t.is(color(blueHslArray)(lightness(-10))(), '#0076d1');
});

test('color with just a color passed returns a function which can take several alterations and the color', t => {
	t.is(color(blueHslArray)(lightness(-10), lightness(-5))(), '#0068b8');
	t.is(color(blueHslArray)(lightness(-10), lightness(-5), lightness(50))(), '#b8e0ff');
	t.is(color(blueHslArray)(lightness(-10), lightness(-5))(lightness(50))(), '#b8e0ff');
	t.is(color(blueHslArray)(lightness(-10))(lightness(-5))(lightness(50))(), '#b8e0ff');
});

test('works with an color wrapper', t => {
	t.is(color(color(blueHslArray))(), '#0593ff');
});

test('returns a color wrapper when you pass it a hex color', t => {
	t.is(color('#ff0000')('#0593ff')(), '#0593ff');
});

test('returns a color wrapper when you pass it a hsl array color', t => {
	t.is(color('#ff0000')(blueHslArray)(), '#0593ff');
});

test('returns a color wrapper when you pass it a hsl object color', t => {
	t.is(color('#ff0000')(blueHslObj)(), '#0593ff');
});

test('throws an error when invalid color wrapper is passed', t => {
	t.throws(() => color(() => [11]), 'Color passed is not a valid color');
	t.throws(() => color(() => '#1234'), 'Color passed is not a valid color');
});

test('throws an error when invalid color is passed', t => {
	t.throws(() => color(['aa']), 'Color passed is not a valid color');
	t.throws(() => color([11, 22, -1]), 'Color passed is not a valid color');
	t.throws(() => color({at: 21}), 'Color passed is not a valid color');
});
