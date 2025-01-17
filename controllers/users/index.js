const {	ctrlWrapper} = require('../../helpers/index');

const register = require("./register")
const login = require("./login")
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	logout: ctrlWrapper(logout),
	getCurrent: ctrlWrapper(getCurrent),
	updateSubscription: ctrlWrapper(updateSubscription)
}