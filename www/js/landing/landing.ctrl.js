class landingCtrl {
	constructor($state){
		this.playlists = [
		    { title: 'Reggae', id: 1 },
		    { title: 'Chill', id: 2 },
		    { title: 'Dubstep', id: 3 },
		    { title: 'Indie', id: 4 },
		    { title: 'Rap', id: 5 },
		    { title: 'Cowbell', id: 6 }
		 ];
	}
}

landingCtrl.$inject = ['$state'];

export default landingCtrl;