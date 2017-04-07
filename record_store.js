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
    var itemsPrinted = this.inventory.map(function(record){
        return this.printRecordDetails(record);
      }.bind(this)
    )
    return itemsPrinted;
  },

  sellRecord: function(record){

    if (this.inventory.includes(record)){
      this.balance += record.price;

      var index = this.inventory.indexOf(record)
      this.inventory.splice(index, 1)
    } 
    else 
    {
      console.log("Sorry,", record.title, "is not in stock")
    }
  },

  financialReport: function(){

    report = {};
    report = { "balance": this.balance}

    console.log("The balance - in the store " + this.balance)

    // //    this.

    return report


  },



}

module.exports = RecordStore;