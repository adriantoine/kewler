import path from 'path';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
	entry: path.resolve(__dirname, 'src/index.js'),
	plugins: [
		babel(),
		nodeResolve({
			jsnext: true,
			main: true
		})
	],
	external: Object.keys(pkg.dependencies),
	targets: [{
		dest: path.resolve(__dirname, pkg.main),
		format: 'cjs',
		sourceMap: true
	},
	{
		dest: path.resolve(__dirname, pkg['jsnext:main']),
		format: 'es',
		sourceMap: true
	}]
};
