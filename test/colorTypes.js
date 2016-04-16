
import test from 'ava';
import {color} from '../src/index';

import {blueHslArray, blueHslObj} from './_fixtures';

test('color works with an hsl array', t => {
	t.is(color(blueHslArray)(), '#0593ff');
});

test('color works with an hsl object', t => {
	t.is(color(blueHslObj)(), '#0593ff');
});

test('color works with a hex color', t => {
	t.is(color('#0593ff')(), '#0593ff');
});
