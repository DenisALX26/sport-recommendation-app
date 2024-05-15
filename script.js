let individualQuestions = [
  {
    questionText:
      "Iți plac activitățile sportive care ajută la îmbunătățirea coordonării organismului general al unei persoane?",
    yesValue: 5,
    noValue: 1,
  },
  {
    questionText: "Iți plac activitățile sportive competitive?",
    yesValue: 2,
    noValue: 1,
  },
  {
    questionText: "Vrei să lași cât mai multe calorii în urmă?",
    yesValue: 1,
    noValue: 2,
  },
];

let teamworkQuestions = [
  {
    questionText: "Te interesează popularitatea sportului în rândul fetelor?",
    yesValue: 30,
    noValue: 1,
  },
  {
    questionText:
      "Vrei un sport care să nu necesite contact fizic cu adversarii?",
    yesValue: 5,
    noValue: 10,
  },
  {
    questionText: "Vrei ca sportul să necesite abilități tehnice avansate?",
    yesValue: 10,
    noValue: 20,
  },
];

let firstQuestion =
    " Ești o persoană care preferă munca în echipă sau cea individuală?",
  score = 0;

let yesBtn = document.getElementById("yes"),
  noBtn = document.getElementById("no"),
  teamworkBtn = document.getElementById("teamwork"),
  individualBtn = document.getElementById("individual"),
  resultBtn = document.getElementById("show"),
  lg,
  i = 0,
  ok = 0;

function start() {
  teamworkBtn.style.display = "none";
  individualBtn.style.display = "none";
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
}

function showQuestion(index, vector) {
  let question = document.querySelector(".question");
  question.textContent = vector[index].questionText;
  console.log(i);
}

function showResult() {
  let cnt = document.getElementById("question-container"),
    section = document.querySelector(".answers"),
    loading = document.querySelector(".loading-screen"),
    result;
  if (score == 85 || score == 56) {
    result = document.getElementById("volei-answer");
  } else if (score == 81) {
    result = document.getElementById("fotbal-answer");
  } else if (score == 71 || score == 90) {
    result = document.getElementById("baschet-answer");
  } else if (score == 4) {
    result = document.getElementById("ciclism-answer");
  } else if (score == 3) {
    result = document.getElementById("inot-answer");
  } else if (score == 8) {
    result = document.getElementById("tenis-answer");
  } else if (score == 7) {
    result = document.getElementById("fitness-answer");
  }
  loading.classList.replace("d-none", "d-flex");
  setTimeout(function () {
    section.classList.replace("d-none", "d-flex");
    loading.classList.replace("d-flex", "d-none");
    result.classList.replace("d-none", "d-flex");
  }, 3000);
  cnt.classList.replace("d-flex", "d-none");
}

function teamworkSports() {
  start();
  let popularity = 0;
  score = 50;
  lg = teamworkQuestions.length;
  showQuestion(i, teamworkQuestions);
  yesBtn.addEventListener("click", function () {
    score += teamworkQuestions[i].yesValue;
    console.log(score);
    if (i == 0) {
      popularity = 1;
    } else if (i == 1) {
      console.log("volei");
      ok = 1;
      showResult();
    } else if (i == 2) {
      console.log("baschet");
      ok = 1;
      showResult();
    }
    if (ok == 0) {
      i++;
      showQuestion(i, teamworkQuestions);
    }
  });
  noBtn.addEventListener("click", function () {
    score += teamworkQuestions[i].noValue;
    console.log(score);
    if (i == 1 && popularity == 1) {
      console.log("baschet");
      ok = 1;
      showResult();
    } else if (i == 2) {
      console.log("fotbal");
      ok = 1;
      showResult();
    }
    if (ok == 0) {
      i++;
      showQuestion(i, teamworkQuestions);
    }
  });
}

function individualSports() {
  start();
  score = 1;
  lg = individualQuestions.length;
  showQuestion(i, individualQuestions);
  yesBtn.addEventListener("click", function () {
    score += individualQuestions[i].yesValue;
    if (i == 1) {
      console.log("tenis");
      ok = 1;
      showResult();
    } else if (i == 2) {
      console.log("inot");
      ok = 1;
      showResult();
    }
    if (ok == 0) {
      i++;
      showQuestion(i, individualQuestions);
    }
  });
  noBtn.addEventListener("click", function () {
    score += individualQuestions[i].noValue;
    if (i == 0) i++;
    else if (i == 1) {
      console.log("fitness");
      ok = 1;
      showResult();
    } else if (i == 2) {
      console.log("ciclism");
      ok = 1;
      showResult();
    }
    if (ok == 0) {
      i++;
      showQuestion(i, individualQuestions);
    }
  });
}
