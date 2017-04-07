var RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
}

RecordCollector.prototype = {

sizeOfCollection: function(){
  return this.collection.length
}


}


module.exports = RecordCollector;