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




}


module.exports = RecordPlayer;