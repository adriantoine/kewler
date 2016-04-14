
import test from 'ava';
import {darken} from '../index';

import {blueHslObj, blueHslArray, blueHex, blueHslArrayDarken} from './_fixtures';

const darken10 = darken(10);

test('darken returns a darken HSL array version of an hsl object', t => {
	t.deepEqual(darken10(blueHslObj), blueHslArrayDarken);
});

test('darken returns a darken HSL array version of an hsl array', t => {
	t.deepEqual(darken10(blueHslArray), blueHslArrayDarken);
});

test('darken returns a darken HSL array version of an hex', t => {
	t.deepEqual(darken10(blueHex), blueHslArrayDarken);
});
