'use strict';

import core from 'metal';
import State from 'metal-state';

class Model extends State  {
	/**
	 * Makes an unique id for the model.
	 * @return {string} Unique id.
	 * @protected
	 */
	makeId_() {
		return core.getUid(this);
	}

	/**
	 * Provides the default value for id attribute.
	 * @return {string} The id.
	 * @protected
	 */
	setId_(id) {
		return id ? id : this.makeId_();
	}
}

Model.STATE = {
	/**
	 *
	 * @type {string}
	 *
	 */
	id: {
		setter: 'setId_',
		writeOnce: true
	}
};

export default Model;