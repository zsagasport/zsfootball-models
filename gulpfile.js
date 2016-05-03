'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleFileName: 'zsfootball-models.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'zsfootball-models',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
