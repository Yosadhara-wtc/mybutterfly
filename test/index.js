var moment = require('moment');
var should = require('chai').should();
var mybutterfly = require('../index');
var wish = mybutterfly.wish;
var print;
var name = 'Butterfly';
var obj = [1,2,3];
var number = 123;

if (moment().format("hA").includes('AM')) {
	print = "Good Moring, ";
} else {
	print = "Good Afternoon, ";
}

describe('#wish', function() {

	it('Wish to given name', function(){
		wish(name).should.equal(print+"Butterfly. Its " + moment().format("hA"));
	});

	it('Check wheather given name is a Number', function(){
		wish(number).should.equal("Common yar!!, you have given a Number, not a name!!");
	});

	it('Check wheather given name is an Object', function(){
		wish(obj).should.equal("It's an Object, not a name!!");
	});

});