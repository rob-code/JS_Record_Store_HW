var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

RecordCollector.prototype = {

collectionSize: function(){
  return this.collection.length
},

buy: function(record){
  if (record.price <= this.cash){
    this.cash -= record.price;
    this.collection.push(record);
  } 
  else
  {
    console.log("Sorry, " + this.name + " does not have enough cash to buy this record.")
  }
},

sell: function(record){
  //test if record is in collection

}


}


module.exports = RecordCollector;