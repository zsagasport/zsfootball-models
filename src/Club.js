'use strict';

import Model from './Model';

class Club extends Model  {
	getShortTitle() {
		return this.shortTitle ? this.shortTitle : this.title.subString(0,2).toUpperCase();
	}
}

Club.STATE = {
	/**
	 *
	 */
	title: {

	},

	/**
	 *
	 */
	shortTitle: {
	}
};

export default Club;