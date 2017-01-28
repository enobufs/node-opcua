require("requirish")._(module);

var assert = require("better-assert");
var should = require("should");

import makeOptionalsMap from "lib/address_space/makeOptionalsMap";

describe("Testing makeOptionalsMap",function(){


    it("should create an optional map from a single string",function() {

        var map =makeOptionalsMap(["Hello"]);
        map.should.ownProperty("Hello");

    });
    it("should create an optional map from a single string",function() {

        var map =makeOptionalsMap(["Hello.World","Hello.Goodbye"]);
        map.should.ownProperty("Hello");
        map["Hello"].should.ownProperty("World");
        map["Hello"].should.ownProperty("Goodbye");
    });
});