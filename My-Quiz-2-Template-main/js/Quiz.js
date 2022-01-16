class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })
  }

  update(state){
    
    database.ref('/').update({
      gameState: state
    });

  }

  start(){
    
    contestant = new Contestant();
    
    contestant.getCount();
    
    question = new Question()
    question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
    this.checkingAns(question.input2.value())
  }

  checkingAns(ans){
    textSize(15)
    if (ans==2) {
      text("Your answer is correct", 350, 250);
    }else if(ans=="Enter Correct Option No.."){
      text("You haven't written any answer", 300, 250);
    }else{
      text("Your answer is wrong", 350, 250);
    }
    console.log(ans);
  }
}