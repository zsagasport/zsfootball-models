'use strict';

import Round from '../src/Round';

var round;

describe('Round', function() {
	afterEach(function() {
		round = null;
	});

	it('should initialize competition state with undefined ', function() {
		round = new Round();

		assert.isUndefined(round.competition);
	});
}); 