var questions = [
  { question: " 01. Who is the father of English grammar?",
    option1: " Sam Curran",
    option2: " Lindley Murray",
    option3: " Eoin Morgan",
    ans: " Lindley Murray",
  },
  {
    question: " 03. What is England's national game?",
    option1: " Hockey",
    option2: " cricket",
    option3: "Buzkashi",
    ans: " cricket",
  },
  {
    question: " Q3. The largest city of Pakistan?",
    option1: "Karachi",
    option2: "Lahore",
    option3: "Islamabad",
    ans: "Karachi",
  },
  {
    question: " Q4. the largest city of India?",
    option1: "Visakhapatnam",
    option2: "Delhi",
    option3: "Bengaluru",
    ans: "Delhi",
  },
  {
    question: " Q5. the largest country of the world?",
    option1: "India",
    option2: "Russia",
    option3: "China",
    ans: "Russia",
  },
  {
    question: " Q6. Which is largest cricket stadium in world?",
    option1: "Narendra Modi Stadium",
    option2: "The Sheikh Zayed Stadium",
    option3: "Etisalat National League",
    ans: "Narendra Modi Stadium",
  },
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;

setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      sec = 59;
      min = 1;
      nextQuestion();
    }
  }
}, 1000);

function nextQuestion() {
  var getOptions = document.getElementsByName("options");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedques = questions[index - 1]["question"];
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAns = questions[index - 1]["ans"];
      if (selectedAns == correctAns) {
        score++;
      }
    }
    getOptions[i].checked = false
  }
  min = 1;
  sec = 59;
  btn.disabled = true;

  if (index > questions.length - 1) {
    if (score >= 60) {
      Swal.fire(
        "Good job!",
        `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
        "success"
      );
    }else if (score <= 60) {
      Swal.fire({
        icon: 'error',
        title: 'Fail...',
        text: `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
   else {
    para.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
  }
}

function clicked() {
  btn.disabled = false;
}
