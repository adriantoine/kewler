
import test from 'ava';
import {lightness} from '../src/index';

import {blueHslObj, blueHslArray, blueHslArrayDarken} from './fixtures';

const darken10 = lightness(-10);

test('lightness returns a darker HSL array version of an hsl object', t => {
	t.deepEqual(darken10(blueHslObj), blueHslArrayDarken);
});

test('lightness returns a darker HSL array version of an hsl array', t => {
	t.deepEqual(darken10(blueHslArray), blueHslArrayDarken);
});

test('lightness returns a darker HSL array version of an hex', t => {
	t.deepEqual(darken10('#0593ff'), blueHslArrayDarken);
});
