var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

RecordStore.prototype = {

  stockCount: function(){
    return this.inventory.length;
  },

  addRecord: function(record){
    this.inventory.push(record);
  },

  printRecordDetails: function(record){
    var details = "Artist:" + record.artist +  " Title:" + record.title + " Genre:" + record.genre + " Price:" + record.price;
    console.log(details);
    return details;
  },

  listInventory: function(){
  var itemsPrintedArray = []
  this.inventory.forEach(function(record){
      var i = this.printRecordDetails(record)
      itemsPrintedArray.push(i)
    }.bind(this)
  )
  return itemsPrintedArray
  },

}

module.exports = RecordStore;