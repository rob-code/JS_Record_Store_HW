var RecordPlayer = function(){
  this.records = [];
  this.changeCounter = 0;
}

RecordPlayer.prototype = {

  playLoad: function(){
    return this.records.length;
  },

  loadRecords: function(recordsToPlay){
    this.records = recordsToPlay;
  },


//play records by closure but timer doesnt work 
  play: function(message){

      console.log(message + " " + this.records[this.changeCounter].title);
      this.changeCounter += 1;
  },

  recordChanger: function(){

    this.changeCounter = 0;

    for (var i = 0; i < this.records.length; i++){
        setTimeout(function(){
        this.play("changing the record");
            }.bind(this), 2000 + (i * 1000));
    } 
    
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