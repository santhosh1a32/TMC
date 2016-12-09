import layoutCtrl from './layout.ctrl.js';
import routes from './layout.routes.js';

export default angular.module('main', [])
	.config(routes)
	.controller('layoutCtrl', layoutCtrl)
	.name;