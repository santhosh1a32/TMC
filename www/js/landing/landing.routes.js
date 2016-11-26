function LoginRoutes($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('landing', {
			url: "/landing",
			templateUrl: 'js/landing/landing.html',
			controller: 'landingCtrl',
			controllerAs: 'vm'
		})
}

export default LoginRoutes;