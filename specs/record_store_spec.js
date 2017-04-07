var assert = require('assert')
var RecordStore = require('../record_store')

describe('RecordStore', function(){

  var store

  beforeEach(function(){
    store = new RecordStore("Rob's Records", "Edinburgh", 10000)
  })

  it("has a name", function(){
    assert.strictEqual("Rob's Records", store.name)
  })

  it("has a city location", function(){
    assert.strictEqual("Edinburgh", store.city)
  })

  it("has an opening balance", function(){
    assert.strictEqual(10000, store.balance)
  })



}) 