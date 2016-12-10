import landingCtrl from './landing.ctrl.js';
import routes from './landing.routes.js';
import landingService from './landing.service.js';

export default angular.module('landingModule', [landingService])
	.config(routes)
	.controller('landingCtrl', landingCtrl)
	.name;