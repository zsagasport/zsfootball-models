'use strict';

import ModelUtil from '../src/util/ModelUtil';
import Competition from '../src/Competition';

describe('ModelUtil', function() {
	it('should give back an object', function() {
		var object = ModelUtil.getObject({id:1234});

		assert.isObject(object);
	});
}); 