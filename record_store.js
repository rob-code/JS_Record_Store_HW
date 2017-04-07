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

    //get the stock balance
    var stockValue = 0;

    this.inventory.forEach(function(record){
      stockValue += record.price
    }) 

    report = { "balance": this.balance, "stockValue": stockValue, "netValue": this.balance + stockValue}
    return report
  },

  stockByGenre: function( genre){
    return this.inventory.filter(function(record){
      if (genre === record.genre){
        return record
      }
    })
  }



}

module.exports = RecordStore;