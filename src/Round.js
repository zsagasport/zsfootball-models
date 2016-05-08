'use strict';

import Competition from './Competition';
import Model from './Model';
import ModelUtil from './util/ModelUtil';

class Round extends Model  {
	/**
	 *
	 */
	setCompetition_(value) {
		var object = ModelUtil.getObject(value);
		var competition;

		if (object) {
			competition = new Competition(object);

			this.competitionId = competition.id;
		} 
		
		return competition;
	}
}

Round.STATE = {
	/**
	 *
	 */
	competition: {
		setter: 'setCompetition'
	},

	/**
	 *
	 */
	num: {

	}
};

export default Round;