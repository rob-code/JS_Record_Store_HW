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
  },

  addCash: function(amount){
    this.cash += amount;
  },

  getValue: function(array){
    var value = 0;
    array.forEach(function(record){
      value += record.price;
    })
    return value;
  },

  collectionValue: function(){
    return this.getValue(this.collection);
  },

  genreTotal: function(genre){
    var genreCollection = this.collection.filter(function(record){
      return record.genre === genre;
    })

    return this.getValue(genreCollection);
  },

  sortArray: function(){
    return this.collection.sort(function(a,b){
      return a.price - b.price;
    }) 
  },

  mostValuable: function(){
    this.sortArray();
    return this.collection[this.collection.length - 1];
  },

  sortLoToHi: function(){
    return this.sortArray();
  },

  sortHiToLo: function(){
    var array = this.sortArray();
    return array.reverse();
  }



}


module.exports = RecordCollector;