import poolCtrl from './pool.ctrl.js';
import routes from './pool.router.js';

export default angular.module('poolModule', [])
	.config(routes)
	.controller('poolCtrl', poolCtrl)
	.name;