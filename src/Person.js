'use strict';

import Model from './Model';

class Person extends Model  {
	getFullName_() {
		return this.firstName + ' ' + this.secondName;
	}
}

Person.STATE = {
	/**
	 *
	 */
	firstName: {

	},

	fullName: {
		valueFn: 'getFullName_'
	},

	/**
	 *
	 */
	secondName: {

	},

	/**
	 *
	 */
	nickName: {

	},

	/**
	 *
	 */
	height: {

	},

	/**
	 *
	 */
	weight: {

	},

	/**
	 *
	 */
	birthDate: {

	},

	/**
	 *
	 */
	birthPlace: {

	},

	/**
	 *
	 */
	nationality: {

	}
};

export default Person;