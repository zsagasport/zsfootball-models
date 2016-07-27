'use strict';

import Model from './Model';
import Club from './Club';
import Goal from './Goal';
import core from 'metal';

class MatchModel extends Model  {
	compareByTime_(goal1, goal2) {
		if (goal1.time < goal2.time) {
			return -1
		} else if (goal1.time > goal2.time) {
			return 1
		}

		return 0;
	}

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
		let awayGoals = this.goals.awayGoals;

		return core.isNumber(awayGoals) ? awayGoals : (core.isNumber(awayGoals.firstHalf) ? awayGoals.firstHalf + awayGoals.secondHalf : awayGoals.firstHalf.length + awayGoals.secondHalf.length);
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
		let homeGoals = this.goals.homeGoals;

		return core.isNumber(homeGoals) ? homeGoals : (core.isNumber(homeGoals.firstHalf) ? homeGoals.firstHalf + homeGoals.secondHalf : homeGoals.firstHalf.length + homeGoals.secondHalf.length);
	}

	/**
	 *
	 */
	getHalfGoals_(homeGoals, awayGoals) {
		var goals = homeGoals.concat(awayGoals);

		return goals.sort(this.compareByTime_);
	}

	firstHalfGoals_() {
		return this.getHalfGoals_(this.goals.homeGoals.firstHalf, this.goals.awayGoals.firstHalf);
	}

	secondHalfGoals_() {
		return this.getHalfGoals_(this.goals.homeGoals.secondHalf, this.goals.awayGoals.secondHalf);
	}

	/**
 	 *
 	 */
 	setClub_(value) {
 		return core.isObject(value) ? new Club(value) : (core.isString(value) ? new Club({title: value}) : {});
 	}

 	createGoalsObject(goalsValue, goalType) {
 		let goals = {};

 		if (core.isObject(goalsValue)) {
 			let firstHalf = goalsValue.firstHalf;
 			let secondHalf = goalsValue.secondHalf;

 			if (Array.isArray(firstHalf)) {
 				goals.firstHalf = [];

 				firstHalf.forEach(function(item) {
 					let goal = new Goal(item);

 					goal.goalType = goalType;

 					goals.firstHalf.push(goal);
 				});
 			} else {
 				goals.firstHalf = firstHalf;
 			}

 			if (Array.isArray(secondHalf)) {
 				goals.secondHalf = [];

 				secondHalf.forEach(function(item) {
 					let goal = new Goal(item);

 					goal.goalType = goalType;

 					goals.secondHalf.push(goal);
 				})
 			} else {
 				goals.secondHalf = secondHalf;
 			}
 		} else {
 			goals = goalsValue;
 		}

 		return goals;
 	}

 	setGoals_(value) {
 		if (!value) {
 			return value;
 		}
 		else {
 			let goals = {};

	 		goals.awayGoals = this.createGoalsObject(value.awayGoals, 'awayGoal');
	 		goals.homeGoals = this.createGoalsObject(value.homeGoals, 'homeGoal');

	 		return goals;
 		}

 	}
}

MatchModel.STATE = {
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
		setter: 'setGoals_'
	},

	firstHalfGoals: {
		valueFn: 'firstHalfGoals_'
	},

	secondHalfGoals: {
		valueFn: 'secondHalfGoals_'
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

	referee: {

	},

	/**
	 * A Round model instanse, an id
	 * @type {Object|number|string}
	 */
	round: {

	}
};

export default MatchModel;