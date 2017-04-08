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

hasRecord: function(recordToFind){
  //undefined if no record is provided or found?
  return this.collection.find(function(record){
    return record === recordToFind
  })

}

sell: function(record){
 if (hasRecord(record)){
  
 }

  //test if record is in collection

}


}


module.exports = RecordCollector;