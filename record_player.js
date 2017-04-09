var RecordPlayer = function(){
  this.records = [];
}

RecordPlayer.prototype = {

  playLoad: function(){
    return this.records.length;
  },

  loadRecords: function(recordsToPlay){
    this.records = recordsToPlay;
  }

  //add timeout to play records with a closure
  // an inner function which remembers its context and we pass in records
  //to it  


}


module.exports = RecordPlayer;