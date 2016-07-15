'use strict';

import State from 'metal-state';

class Club extends State  {
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