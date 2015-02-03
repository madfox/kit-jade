"use strict";
var
jade = require("jade"),
inherits = require("util").inherits,
decoder = new require("string_decoder").StringDecoder("utf8"),
PassThrought = require("stream").PassThrought;

module.exports = JadeKit;

function JadeKit(options){
	if(this.constructor !== JadeKit){
		return new JadeKit(options);
	}
	options = options || {};
	if(process.env.NODE_ENV === "production"){
		options.cache = options.cache || true;
	}
	this._options = options;
	PassThrought.call(this, options);
}

inherits(JadeKit, PassThrought);

var proto = JadeKit.prototype;
proto._transform = function(chunk, encoding, callback){
	callback(null, jade.render(decoder.write(chunk), this._options));
};
