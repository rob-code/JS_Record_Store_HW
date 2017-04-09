var RecordPlayer = function(){
  this.records = [];
}

RecordPlayer.prototype = {

  playLoad: function(){
    return this.records.length;
  },

  loadRecords: function(recordsToPlay){
    this.records = recordsToPlay;
  },

  setUpPlay: function(playInterval){

    return function (record){
      console.log("Playing " + record.title + "With a play interval of " + playInterval);
    }

    },

  playRecords: function(){
      var play = this.setUpPlay(20);
    
      this.records.forEach(function(record){
        play(record);
      })
  }

}


module.exports = RecordPlayer;