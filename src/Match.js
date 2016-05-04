'use strict';

import Model from './Model';

class Match extends Model  {
	constructor(opt_config, opt_parentElement) {
		super(opt_config, opt_parentElement);
	}

	getLocalHourMinute_() {
		var matchDate = new Date(this.matchDate);

		return matchDate.getHours() + ':' + (matchDate.getMinutes() === 0 ? '00' : matchDate.getMinutes());
	}
}

Match.STATE = {
	/**
	 *
	 */
	attendance: {

	},

	/**
	 *
	 */
	awayClub: {

	},

	/**
	 *
	 */
	awayGoals: {

	},

	/**
	 *
	 */
	matchDate: {

	},

	/**
	 *
	 */
	homeClub: {

	},

	/**
	 *
	 */
	homeGoals: {

	},

	/**
	 *
	 */
	localHourMinute: {
		valueFn: 'getLocalHourMinute_'
	},

	/**
	 *
	 */
	locationId: {

	},

	/**
	 *
	 */
	roundId: {

	}
};

export default Match;