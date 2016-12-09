function LoginRoutes($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('main.landing', {
			url: "/landing",
			templateUrl: 'js/layout/landing/landing.html',
			controller: 'landingCtrl',
			controllerAs: 'vm'
		})
}

export default LoginRoutes;