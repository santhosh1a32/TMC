class landingService{
	constructor($http){
		this.$http = $http;
	}

	postFeed(data){
		var promise = this.$http.post("http://localhost:3000/api/postFeed", data).then(response=>{
			console.log(response.data);
			return response.data;
		}, error=>{
			return error;
		});
		return promise;
	}

	getFeedData(){
		var promise = this.$http.get("http://localhost:3000/api/getFeed").then(response=>{
			console.log(response.data);
			return response.data;
		}, error=>{
			return error;
		});
		return promise;
	}
}

landingService.$inject = ["$http"];

export default angular.module('landingService', [])
	.service('landingService', landingService)
	.name;