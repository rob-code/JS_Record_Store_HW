var assert = require('assert')
var Record = require('../record')

describe('Record', function(){

var record

beforeEach(function(){
record = new Record("Beatles", "Help", "pop", 900)
})

it("has an artist", function(){
  assert.strictEqual("Beatles", record.artist)
})

it("has a title", function(){
  assert.strictEqual("Help", record.title)
})

it("has a genre", function(){
  assert.strictEqual("pop", record.genre)
})

it("has a price", function(){
  assert.strictEqual(900, record.price)
})


})