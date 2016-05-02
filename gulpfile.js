'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleFileName: 'zsfootball-models.js',
	moduleName: 'zsfootball-models',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
