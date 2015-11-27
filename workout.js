new Vue({
	el: 'body',

	data: {
		name: 'Mike',

		workout: {
			'pushups': 130,
			'situps': 100
		},

		situpsCompleted: false,

		pushupsCompleted: false
	},

	methods : {
		addPushups: function() {
			this.workout.pushups = this.workout.pushups + 10;

			if (this.workout.pushups >= 400) {
				this.pushupsCompleted = true;
				alert('Congrats on reaching your goal of ' + this.workout.pushups + ' pushups!');
				//console.log(this.pushupsCompleted);
			}
		},

		addSitups: function() {
			this.workout.situps = this.workout.situps + 10;

			if (this.workout.situps >= 400) {
				alert('Congrats on reaching your goal of ' + this.workout.situps + ' situps!');
			}
		},

		reset: function() {
			this.workout.pushups = 0;
			this.workout.situps = 0;
			this.pushupsCompleted = false;
			this.situpsCompleted = false;
		}
	}
});