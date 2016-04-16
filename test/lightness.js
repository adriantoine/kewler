
import test from 'ava';
import {saturation} from '../index';

import {blueHslObj, blueHslArray, blueHslArrayPale} from './_fixtures';

const pale10 = saturation(-10);

test('lightness returns a darker HSL array version of an hsl object', t => {
	t.deepEqual(pale10(blueHslObj), blueHslArrayPale);
});

test('lightness returns a darker HSL array version of an hsl array', t => {
	t.deepEqual(pale10(blueHslArray), blueHslArrayPale);
});

test('lightness returns a darker HSL array version of an hex', t => {
	t.deepEqual(pale10('#0593ff'), blueHslArrayPale);
});
