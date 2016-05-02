'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleFileName: 'sport.js',
	moduleName: 'zsfootball-models',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
