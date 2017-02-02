var moment = require('moment');

//console.log("Now the Time is  ",moment().format("hA"));

//console.log(moment().format("hA").includes('PM'));

module.exports = {

    wish: function(name){
		
		if(typeof name == 'string') {

			if (moment().format("hA").includes('AM')) {
				return "Good Moring, " + name + ". Its " + moment().format("hA");
			}
			if (moment().format("hA").includes('PM')) {
				return "Good Afternoon, " + name + ". Its " + moment().format("hA");
			}
		}	
		if (typeof name == 'number') {

			return "Common yar!!, you have given a Number, not a name!!"
		}

		if (typeof name == 'object') {

			return "It's an Object, not a name!!";
		}
	}
};