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

  setUpPlayInterval: function(playInterval){

    // setTimeout(function(){
    //   console.log("Playing now: +++++++++++++++ ");
    // }, 100)

    },


  playRecords: function(){
    //var play = this.setUpPlayInterval(2000);

      console.log("Record playing");

      setTimeout(function(){
        console.log("done");
      },2000)
      


    // this.records.forEach(function(record){
    //   this.play(record);
    // }.bind(this))

  }



  //add timeout to play records with a closure
  // an inner function which remembers its context and we pass in records
  //to it  


}


module.exports = RecordPlayer;