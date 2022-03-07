var startBtn = document.querySelector(".start-btn") 

function startQuiz(){
    console.log("hello")
};

var counter = 10 

var timeout = setInterval(myTimer, 1000);

function myTimer() {
  counter -= 1;
  if (counter < 0){
      counter = 0;
      qEnd();
  }
document.querySelector(".timer").innerHTML = counter;

}

function qEnd(){
    clearInterval(timeout);
    console.log("gameover")
}

startBtn.addEventListener("click",startQuiz);