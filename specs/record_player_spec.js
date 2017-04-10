var assert = require('assert')
var RecordCollector = require('../record_collector')
var RecordStore = require('../record_store')
var Record = require('../record')
var RecordPlayer = require('../record_player')

describe("RecordPlayer", function(){

var recordPlayer
var collector

beforeEach(function(){

recordPlayer = new RecordPlayer(); 

collector = new RecordCollector("Bill", 3000);
record1 = new Record("Beatles", "Help", "pop", 900);
record2 = new Record("Elton John", "Goodbye Yellow Brick Road", "pop", 1200);
record3 = new Record("d", "e", "f", 1);
record4 = new Record("Status Quo", "Whatever You Want", "pop", 2);
record5 = new Record("Beethoven", "9th Symphony", "classical", 800);
record6 = new Record("Yes", "Close to the Edge", "prog", 700);
record7 = new Record("ELP", "Pictures at an Exhibtion", "prog", 1300);
record8 = new Record("Tchaikovsky", "1812 Overture", "classical", 1000);
record9 = new Record("Mr Bling", "Totally Expensive", "pop", 5000);

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
})

it("collector has a record collection", function(){
  assert.strictEqual(9, collector.collectionSize());
})

it("recordplayer has no records to play when instantiated", function(){
  assert.strictEqual(0, recordPlayer.playLoad());
})

it("can load records ready to play", function(){
  recordPlayer.loadRecords(collector.getCollection());
  assert.strictEqual(9, recordPlayer.playLoad());
})

it("can play records with a time interval between them", function(){
  recordPlayer.loadRecords(collector.getCollection());
  recordPlayer.playRecords();
  //set up asynch tests in mocha to accommodate asynch code in record_player

})

})