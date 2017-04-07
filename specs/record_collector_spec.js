var assert = require('assert')
var RecordCollector = require('../record_collector')
var RecordStore = require('../record_store')
var Record = require('../record')

describe("RecordCollector", function(){

var collector

beforeEach(function(){
collector = new RecordCollector("Bill", 3000)
})

it("has cash", function(){
assert.strictEqual("Bill", collector.cash)
})


})

