'use strict';

import Model from './Model';

class Match extends Model  {
	constructor(opt_config, opt_parentElement) {
		super(opt_config, opt_parentElement);
	}

	setDate(value) {
		var date = new Date(value);

		this.setLocalHourMinute_(date);

		return date;
	}

	setLocalHourMinute_(date) {
		this.localHourMinute = date.getHours() + ':' + date.getMinutes();
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
	date: {

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