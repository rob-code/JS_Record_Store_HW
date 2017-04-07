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
    console.log("Artist:", record.artist, " Title:", record.title, " Genre:", record.genre, " Price:", record.price);
  }


}

module.exports = RecordStore;