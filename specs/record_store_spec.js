var assert = require('assert')
var RecordStore = require('../record_store')
var Record = require('../record')

describe('RecordStore', function(){

  var store;
  var record1;

  beforeEach(function(){
    store = new RecordStore("Rob's Records", "Edinburgh", 10000);
    record1 = new Record("Beatles", "Help", "pop", 900);
    record2 = new Record("Elton John", "Goodbye Yellow Brick Road", "pop", 1200);

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

  it("has an empty opening inventory", function(){
    assert.strictEqual(0, store.stockCount())
  })

  it("can add record to inventory", function(){
    store.addRecord(record1)
    store.addRecord(record2)
    assert.strictEqual(2, store.stockCount())
  })

  it("can print out a record's properties", function(){
    assert.strictEqual("Artist:Beatles Title:Help Genre:pop Price:900", store.printRecordDetails(record1))
  })

  xit("can list the store's inventory", function(){
    store.addRecord(record1)
    store.addRecord(record2)
    store.listInventory();
  })


}) 