var assert = require('assert')
var RecordCollector = require('../record_collector')
var RecordStore = require('../record_store')
var Record = require('../record')

describe("RecordCollector", function(){

  var collector
  var record1
  var record2
  var record3
  var record4
  var record5
  var record6
  var record7
  var record8
  var record9

  beforeEach(function(){
    collector = new RecordCollector("Bill", 3000);
    collector2 = new RecordCollector("George", 5000);
    record1 = new Record("Beatles", "Help", "pop", 900);
    record2 = new Record("Elton John", "Goodbye Yellow Brick Road", "pop", 1200);
    record3 = new Record("d", "e", "f", 1);
    record4 = new Record("Status Quo", "Whatever You Want", "pop", 2);
    record5 = new Record("Beethoven", "9th Symphony", "classical", 800);
    record6 = new Record("Yes", "Close to the Edge", "prog", 700);
    record7 = new Record("ELP", "Pictures at an Exhibtion", "prog", 1300);
    record8 = new Record("Tchaikovsky", "1812 Overture", "classical", 1000);
    record9 = new Record("Mr Bling", "Totally Expensive", "pop", 5000)
  })

  it("has cash", function(){
    assert.strictEqual(3000, collector.cash);
  })

  it("has name", function(){
    assert.strictEqual("Bill", collector.name);
  })


  it("has no records in collection at start", function(){
    assert.strictEqual(0, collector.collectionSize());
  })

  it("can buy record and increase collection size by 1", function(){
    collector.buy(record1);
    assert.strictEqual(1, collector.collectionSize());
  })

  it("can buy record and decrease cash by price of record", function(){
    collector.buy(record1);
    assert.strictEqual(2100, collector.cash);
  })

  it("can only buy record if collector has enough cash to pay for it", function(){
    collector.buy(record9);
    assert.strictEqual(3000, collector.cash);
    assert.strictEqual(0, collector.collectionSize());
  })

  it("can check to see if record is in collection", function(){
    collector.buy(record1);
    assert.strictEqual(true, collector.hasRecord(record1));
  })

  it("can check to see if record is not in collection", function(){
    collector.buy(record1);
    assert.strictEqual(false, collector.hasRecord(record2));
  })

  it("can sell record if record is contained in collection", function(){
    collector.buy(record1);
    collector.buy(record5);
    assert.strictEqual(1300, collector.cash);
    collector.sell(record1);
    assert.strictEqual(2200, collector.cash);
    assert.strictEqual(1, collector.collectionSize());
  })

  it("can not sell record if its not in the collection", function(){
    collector.buy(record1);
    collector.buy(record5);
    assert.strictEqual(2, collector.collectionSize());
    collector.sell(record2);
    assert.strictEqual(2, collector.collectionSize());
    assert.strictEqual(1300, collector.cash);
  })

  it("can view total value of record collection", function(){
    collector.buy(record1);
    collector.buy(record2);
    assert.strictEqual(2100, collector.collectionValue());
    collector.sell(record1);
    assert.strictEqual(1200, collector.collectionValue());
  })

  it("can add cash", function(){
    collector.addCash(1000000);
    assert.strictEqual(1003000, collector.cash);
  })

  it("can view total value by genre", function(){
    collector.addCash(1000000);
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    collector.buy(record5);
    collector.buy(record6);
    collector.buy(record7);
    collector.buy(record8);
    collector.buy(record9);
    assert.strictEqual(2000, collector.genreTotal("prog"));
    assert.strictEqual(7102, collector.genreTotal("pop"));
  })

  it("can find the most valuable record", function(){
    collector.addCash(1000000);
    collector.buy(record1);
    collector.buy(record7);
    collector.buy(record3);
    collector.buy(record4);
    collector.buy(record9);
    collector.buy(record5);
    collector.buy(record6);
    collector.buy(record8);
    collector.buy(record2);
    var mostValuableRecord = collector.mostValuable()
    assert.strictEqual(5000, mostValuableRecord.price);

  })

  it("can sort record collection, lowest to highest", function(){
    collector.addCash(1000000);
    collector.buy(record1);
    collector.buy(record7);
    collector.buy(record3);
    collector.buy(record4);
    collector.buy(record9);
    collector.buy(record5);
    collector.buy(record6);
    collector.buy(record8);
    collector.buy(record2);
    var loToHi = collector.sortLoToHi();
    assert.strictEqual(1, loToHi[0].price);
    assert.strictEqual(5000, loToHi[loToHi.length - 1].price);
  })

  it("can sort record collection, highest to lowest", function(){
    collector.addCash(1000000);
    collector.buy(record1);
    collector.buy(record7);
    collector.buy(record3);
    collector.buy(record4);
    collector.buy(record9);
    collector.buy(record5);
    collector.buy(record6);
    collector.buy(record8);
    collector.buy(record2);
    var hiToLo = collector.sortHiToLo();
    assert.strictEqual(5000, hiToLo[0].price);
    assert.strictEqual(1, hiToLo[hiToLo.length - 1].price);
  })

it("can compare collection value with that of another collector", function(){
  collector.addCash(1000000);
  collector.buy(record1);
  collector.buy(record7);
  collector.buy(record3);
  collector.buy(record4);
  //collector.buy(record9);
  // collector.buy(record5);
  // collector.buy(record6);
  // collector.buy(record8);
  // collector.buy(record2);

  collector2.addCash(100000);
  collector2.buy(record1);
  collector2.buy(record7);
  collector2.buy(record3);
  collector2.buy(record4);
  collector2.buy(record9);

  assert.strictEqual(false, collector.isMyCollectionWorthMoreThan(collector2));
})

it("can return the collection as an array", function(){
  collector.addCash(1000000);
  collector.buy(record1);
  collector.buy(record7);
  collector.buy(record3);
  collector.buy(record4);
  collector.buy(record9);
  collector.buy(record5);
  collector.buy(record6);
  collector.buy(record8);
  collector.buy(record2);
  var collection = collector.getCollection();
  assert(9, collection.length);
})


})

