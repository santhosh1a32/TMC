import landingCtrl from './landing.ctrl.js';
import routes from './landing.routes.js';

export default angular.module('landingModule', [])
	.config(routes)
	.controller('landingCtrl', landingCtrl)
	.name;