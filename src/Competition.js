'use strict';

import Model from './Model';
import ModelUtil from './util/ModelUtil';
import Season from './Season';

class Competition extends Model  {
	/**
	 *
	 */
	setSeason_(value) {
		var object = ModelUtil.getObject(value);
		var season;

		if (object) {
			season = new Season(object);

			this.seasonId = season.id;
		} 
		
		return season;
	}

	/**
	 *
	 */
	setSport_(value) {
		var object = ModelUtil.getObject(value);
		var sport;

		if (object) {
			sport = new Sport(object);

			this.sportId = sport.id;
		} 
		
		return sport;
	}
}

Competition.STATE = {
	/**
	 *
	 */
	country: {

	},

	/**
	 *
	 */
	season: {
		setter: 'setSeason_'
	},

	/**
	 *
	 */
	sport: {
		setter: 'setSport_'
	},

	/**
	 *
	 */
	title: {

	}
};

export default Competition;