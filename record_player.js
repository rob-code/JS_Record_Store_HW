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


//play records by closure but timer doesnt work 
  setUpPlay: function(playInterval){
    return function (record){
      console.log("Playing " + record.title + " with a play interval of " + playInterval);
      setTimeout(function play(){
        console.log("time to change the record");
            }, playInterval);
        }
  },

  playRecords: function(){
    var play = this.setUpPlay(2000);
    this.records.forEach(function(record){
      play(record);
    })
  },


//pay records by closure but put the timer in the calling function



  // setUpPlay: function(record){
  //     console.log("Playing " + record.title);      
  // },

  // playRecords: function(){

  //   this.records.forEach(function(record){  



  //     setInterval(function play(){
  //       this.setUpPlay(record);
  //       console.log("playing " + record.title);
  //           }, 2000);
  //   }.bind(this))
  // }







}



module.exports = RecordPlayer;