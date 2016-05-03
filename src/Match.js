'use strict';

import Model from './Model';

class Match extends Model  {
	constructor(opt_config, opt_parentElement) {
		super(opt_config, opt_parentElement);
	}

	getLocalDate() {
		var dateString = '';

		if (this.date) {
			var date = new Date(this.date);

			dateString = date.getHours() + ':' + date.getMinutes();
		}
		
		return dateString;
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
	locationId: {

	},

	/**
	 *
	 */
	roundId: {

	}
};

export default Match;