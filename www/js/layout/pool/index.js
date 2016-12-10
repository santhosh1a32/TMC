import poolCtrl from './pool.ctrl.js';
import routes from './pool.router.js';
import poolService from './pool.service.js';

export default angular.module('poolModule', [poolService])
	.config(routes)
	.controller('poolCtrl', poolCtrl)
	.name;