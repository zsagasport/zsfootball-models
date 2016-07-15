'use strict';

import State from 'metal-state';
import {Club as ClubModel} from './Model';

class Match extends State  {
	/**
	 *
	 */
	getAwayGoalList() {
		return this.goals.awayGoalList || [];
	}

	/**
	 *
	 */
	getAwayGoals() {
		return this.goals.awayGoals || 0;
	}

	/**
	 *
	 */
	getHomeGoalList() {
		return this.goals.homeGoalList || [];
	}

	/**
	 *
	 */
	getHomeGoals() {
		return this.goals.homeGoals || 0;
	}

	/**
	 *
	 */
	setClub_(value) {
		return core.isObject(value) ? new Club(value) : (core.isString(value) ? new Club({title: value}) : {});
	}
}

Match.STATE = {
	/**
	 * The number of spectators who attended this match
	 * @type {number}
	 */
	attendance: {

	},

	/**
	 * It is a club instant, an id or a String which represent the away team
	 * @type {Object|string|number}
	 */
	awayClub: {
		setter: 'setClub_'
	},

	/**
	 * It is true if the match has been finished
	 * @type {boolean}
	 * @default false
	 */
	finished: {
		value: false
	},

	/**
	 * It contains information about the goals which were on this match
	 * @type {Object}
	 * @default {}
	 */
	goals: {
		value: {}
	},

	/**
	 * It is a club instant, an id or a String which represent the home team
	 * @type {Object|string|number}
	 */
	homeClub: {
		setter: 'setClub_'
	},

	/**
	 * The location where this match was/will be played off
	 * @type {object}
	 */
	location: {

	},

	/**
	 * Represents date of this match in milliseconds
	 * @type {number}
	 */
	matchDate: {

	},

	/**
	 * A Round model instanse, an id
	 * @type {Object|number|string}
	 */
	round: {

	}
};

export default Match;