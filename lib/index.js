"use strict";
var
fs = require("fs"),
path = require("path"),
JadeKit = require("./JadeKit.js");

module.exports = function(config){
	config = config || {};
	
	return function*(next){
	
		yield next;	
	};
};


