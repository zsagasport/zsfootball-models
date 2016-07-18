'use strict'

import Model from './Model';
import Player from './Player';
import core from 'metal';

class Goal extends Model  {
	setPlayer_(value) {
		var player = {};

		if (core.isObject(value)) {
			player = new Player(value)
		} else if (core.isString(value)) {
			let names = value.split(' ');

			player = new Player({firstName: names[0], secondName: names[1]});
		}

		return player;
	}
}

Goal.STATE = {
	assist: {

	},

	time: {
		validator: core.isNumber
	},

	player: {
		setter: 'setPlayer_'
	},

	ownGoal: {
		value: false
	}
};

export default Goal;