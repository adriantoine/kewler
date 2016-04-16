
import test from 'ava';
import {hue} from '../src/index';

import {blueHslObj, blueHslArray, blueHslArrayHue} from './_fixtures';

const hue10 = hue(10);

test('lightness returns a darker HSL array version of an hsl object', t => {
	t.deepEqual(hue10(blueHslObj), blueHslArrayHue);
});

test('lightness returns a darker HSL array version of an hsl array', t => {
	t.deepEqual(hue10(blueHslArray), blueHslArrayHue);
});

test('lightness returns a darker HSL array version of an hex', t => {
	t.deepEqual(hue10('#0593ff'), blueHslArrayHue);
});
