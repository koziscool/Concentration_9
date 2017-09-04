

matcherController = {
	view: matcherView,
	model: matcherModel,

	init: function( size ) {
		console.log('control');
		this.model.init(size);
		this.view.init();
	},

	selectCard: function( id ) {
		console.log('tetris');
	},

};


