var RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
}

RecordCollector.prototype = {

collectionSize: function(){
  return this.collection.length
},

buy: function(record){
  //test for enough cash
  this.cash -= record.price;
  this.collection.push(record);
},

sell: function(record){
  //test if record is in collection

}


}


module.exports = RecordCollector;