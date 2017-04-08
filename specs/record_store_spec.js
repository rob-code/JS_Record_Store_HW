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
    record3 = new Record("d", "e", "f", 2);
    record4 = new Record("Status Quo", "Whatever You Want", "pop", 2);
    record5 = new Record("Beethoven", "9th Symphony", "classical", 1000);
    record6 = new Record("Yes", "Close to the Edge", "prog", 1250);
    record7 = new Record("ELP", "Pictures at an Exhibtion", "prog", 1300);
    record8 = new Record("Tchaikovsky", "1812 Overture", "classical", 1000);

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

  it("can list the store's inventory", function(){
    store.addRecord(record3)
    store.addRecord(record4)
    p = store.listInventory();
    assert.deepEqual("Artist:d Title:e Genre:f Price:2", p[0])
  })

  it("can sell record and update store balance", function(){
    store.addRecord(record1)
    store.addRecord(record2)
    store.sellRecord(record1)
    assert.strictEqual(10900, store.balance)
  })

  it("can sell record and remove record from inventory", function(){
    store.addRecord(record1)
    store.addRecord(record2)
    store.sellRecord(record2)
    assert.strictEqual(1, store.stockCount())
  })

  it("can report the financial position: store balance, stock value and netValue", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    var report = store.financialReport();
    assert.strictEqual(10000, report["balance"])
    assert.strictEqual(2100, report["stockValue"])
    assert.strictEqual(12100, report["netValue"])
  })

  it("can report the financial position: after record sale", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1)
    var report = store.financialReport();
    assert.strictEqual(10900, report["balance"])
    assert.strictEqual(1200, report["stockValue"])
    assert.strictEqual(12100, report["netValue"])
    assert.strictEqual(1, store.stockCount())
  })


  it("can view all records by genre", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.addRecord(record5);
    store.addRecord(record6);
    store.addRecord(record7);
    store.addRecord(record8);
    var bygenre = store.stockByGenre("pop");
    assert.strictEqual(3, bygenre.length)
  })


}) 