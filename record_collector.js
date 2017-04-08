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

  hasRecord: function(record){
    return this.collection.includes(record);
  },

  sell: function(record){
    if (this.hasRecord(record)){
      this.cash += record.price;
      this.collection.splice( this.collection.indexOf(record), 1);
    }
    else
    {
      console.log("Sorry, " + this.name + " does not have " + record.title + " in their collection")
    }



  }

}


module.exports = RecordCollector;