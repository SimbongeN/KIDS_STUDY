 const synonymQuestions = [
    {
      question: "What is a synonym for happy?",
      options: ["Sad", "Angry", "Excited", "Joyful"],
      correct: 3
    },
    {
      question: "What is a synonym for quick?",
      options: ["Sad", "Fast", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for smart?",
      options: ["Dull", "Clever", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for beautiful?",
      options: ["Ugly", "Pretty", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for tiny?",
      options: ["Huge", "Small", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for calm?",
      options: ["Anxious", "Peaceful", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for lazy?",
      options: ["Industrious", "Idle", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for angry?",
      options: ["Furious", "Calm", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is a synonym for cold?",
      options: ["Hot", "Chilly", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for bright?",
      options: ["Dim", "Shiny", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for big?",
      options: ["Small", "Huge", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for easy?",
      options: ["Difficult", "Simple", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for funny?",
      options: ["Serious", "Amusing", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for rich?",
      options: ["Poor", "Wealthy", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is a synonym for strong?",
      options: ["Weak", "Powerful", "Excited", "Joyful"],
      correct: 1
    }
  ];
  
  const oppositeQuestions = [
    {
      question: "What is the opposite of come?",
      options: ["Sad", "Angry", "Go", "Joyful"],
      correct: 2
    },
    {
      question: "What is the opposite of happy?",
      options: ["Sad", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of big?",
      options: ["Small", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of tall?",
      options: ["Sad", "Short", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is the opposite of hot?",
      options: ["Sad", "Cold", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is the opposite of early?",
      options: ["Late", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of fast?",
      options: ["Sad", "Slow", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is the opposite of hard?",
      options: ["Soft", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of old?",
      options: ["Young", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of strong?",
      options: ["Sad", "Weak", "Excited", "Joyful"],
      correct: 1
    },
    {
      question: "What is the opposite of happy?",
      options: ["Sad", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of rich?",
      options: ["Poor", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of beautiful?",
      options: ["Ugly", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of love?",
      options: ["Hate", "Angry", "Excited", "Joyful"],
      correct: 0
    },
    {
      question: "What is the opposite of quiet?",
      options: ["Loud", "Angry", "Excited", "Joyful"],
      correct: 0
    }
  ];

  const mixedVerbNounQuestions = [
    {
      question: "Which of the following is a noun?",
      options: ["Run", "Quickly", "Happiness", "Beautiful"],
      correct: 2
    },
    {
      question: "Which of the following is a verb?",
      options: ["Quickly", "Run", "Happiness", "Beautiful"],
      correct: 1
    },
    {
      question: "Which of the following is a noun?",
      options: ["Dog", "Quickly", "Joy", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Jump", "Quickly", "Joy", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["Cat", "Quickly", "Joyful", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Sing", "Quickly", "Joyful", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["Tree", "Quickly", "Happiness", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Read", "Quickly", "Happiness", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["Book", "Quickly", "Joy", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Write", "Quickly", "Joy", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["Car", "Quickly", "Joyful", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Dance", "Quickly", "Joyful", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["House", "Quickly", "Happiness", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a verb?",
      options: ["Cook", "Quickly", "Happiness", "Beautiful"],
      correct: 0
    },
    {
      question: "Which of the following is a noun?",
      options: ["Flower", "Quickly", "Joy", "Beautiful"],
      correct: 0
    }
  ];
  
  const tenseQuestions = [
    {
      question: "Which tense is the sentence in: 'She will go to the store tomorrow.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 2
    },
    {
      question: "Which tense is the sentence in: 'They are playing soccer right now.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 3
    },
    {
      question: "Which tense is the sentence in: 'He eats breakfast every morning.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 1
    },
    {
      question: "Which tense is the sentence in: 'We visited the museum last weekend.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 0
    },
    {
      question: "Which tense is the sentence in: 'I am studying for my exams.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 3
    },
    {
      question: "Which tense is the sentence in: 'They will travel to Paris next month.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 2
    },
    {
      question: "Which tense is the sentence in: 'She reads books in her free time.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 1
    },
    {
      question: "Which tense is the sentence in: 'He wrote a letter to his friend.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 0
    },
    {
      question: "Which tense is the sentence in: 'I am going to the gym now.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 3
    },
    {
      question: "Which tense is the sentence in: 'We will see a movie tonight.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 2
    },
    {
      question: "Which tense is the sentence in: 'She takes a walk every evening.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 1
    },
    {
      question: "Which tense is the sentence in: 'They were playing tennis yesterday.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 0
    },
    {
      question: "Which tense is the sentence in: 'I will finish my homework later.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 2
    },
    {
      question: "Which tense is the sentence in: 'He is cooking dinner right now.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 3
    },
    {
      question: "Which tense is the sentence in: 'We watched a movie last night.'?",
      options: ["Past", "Present", "Future", "Present Continuous"],
      correct: 0
    }
  ];

  const voiceQuestions = [
    {
      question: "What is the active voice of: 'The cake was baked by Mary.'?",
      options: [
        "Mary was baking the cake.",
        "Mary baked the cake.",
        "The cake baked Mary.",
        "The cake is baked by Mary."
      ],
      correct: 1
    },
    {
      question: "What is the passive voice of: 'The teacher explained the lesson.'?",
      options: [
        "The lesson explained the teacher.",
        "The lesson is explaining by the teacher.",
        "The lesson was explained by the teacher.",
        "The teacher is explaining the lesson."
      ],
      correct: 2
    },
    {
      question: "What is the active voice of: 'The homework was completed by the student.'?",
      options: [
        "The student completed the homework.",
        "The homework completed the student.",
        "The homework is completed by the student.",
        "The student is completing the homework."
      ],
      correct: 0
    },
    {
      question: "What is the passive voice of: 'The chef cooked the meal.'?",
      options: [
        "The meal cooked the chef.",
        "The chef was cooked by the meal.",
        "The meal is cooking the chef.",
        "The meal was cooked by the chef."
      ],
      correct: 3
    },
    {
      question: "What is the active voice of: 'The song was sung by the choir.'?",
      options: [
        "The choir sung the song.",
        "The song is sung by the choir.",
        "The choir sang the song.",
        "The song sang the choir."
      ],
      correct: 2
    },
    {
      question: "What is the passive voice of: 'The manager approved the project.'?",
      options: [
        "The project was approved by the manager.",
        "The project approves the manager.",
        "The manager is approving the project.",
        "The project approves the manager."
      ],
      correct: 0
    },
    {
      question: "What is the active voice of: 'The letter was written by John.'?",
      options: [
        "John writes the letter.",
        "John wrote the letter.",
        "The letter wrote John.",
        "John is writing the letter."
      ],
      correct: 1
    },
    {
      question: "What is the passive voice of: 'The dog chased the cat.'?",
      options: [
        "The dog is chased by the cat.",
        "The cat chased the dog.",
        "The cat was chased by the dog.",
        "The dog is chasing the cat."
      ],
      correct: 2
    },
    {
      question: "What is the active voice of: 'The book was read by the student.'?",
      options: [
        "The student is reading the book.",
        "The student read the book.",
        "The book reads the student.",
        "The student reads the book."
      ],
      correct: 1
    },
    {
      question: "What is the passive voice of: 'The artist painted the portrait.'?",
      options: [
        "The portrait painted the artist.",
        "The artist is painting the portrait.",
        "The portrait is painted by the artist.",
        "The portrait was painted by the artist."
      ],
      correct: 3
    },
    {
      question: "What is the active voice of: 'The room was cleaned by the janitor.'?",
      options: [
        "The janitor cleans the room.",
        "The room cleans the janitor.",
        "The janitor cleaned the room.",
        "The janitor is cleaning the room."
      ],
      correct: 2
    },
    {
      question: "What is the passive voice of: 'The scientist discovered the cure.'?",
      options: [
        "The cure discovered the scientist.",
        "The cure was discovered by the scientist.",
        "The scientist is discovering the cure.",
        "The cure is discovered by the scientist."
      ],
      correct: 1
    },
    {
      question: "What is the active voice of: 'The story was told by the grandmother.'?",
      options: [
        "The grandmother tells the story.",
        "The grandmother told the story.",
        "The story tells the grandmother.",
        "The grandmother is telling the story."
      ],
      correct: 1
    },
    {
      question: "What is the passive voice of: 'The company launched the product.'?",
      options: [
        "The product launched the company.",
        "The product was launching the company.",
        "The company is launching the product.",
        "The product was launched by the company."
      ],
      correct: 3
    },
    {
      question: "What is the active voice of: 'The movie was directed by the filmmaker.'?",
      options: [
        "The filmmaker directed the movie.",
        "The filmmaker is directing the movie.",
        "The movie directed the filmmaker.",
        "The filmmaker directs the movie."
      ],
      correct: 0
    }
  ];
  
 
  const questions = {synonym: synonymQuestions, opposite: oppositeQuestions, verbNoun: mixedVerbNounQuestions, tense: tenseQuestions, voice: voiceQuestions};
  
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let userAnswers = [];
  let score = 0;
  
  function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const questionObj = questions[currentCategory][currentQuestionIndex];

    document.getElementById("questionText").textContent = questionObj.question;
    const options = document.getElementById("options");
    options.innerHTML = "";

    questionObj.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      options.appendChild(button);
    });
  }
  
  function selectAnswer(answerIndex) {
    const questionObj = questions[currentCategory][currentQuestionIndex];
    if (answerIndex === questionObj.correct) {
      score++;
    }
    userAnswers.push({
      questionIndex: currentQuestionIndex,
      answerIndex: answerIndex
    });
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
      showQuestion();
    } 
    else {
      showReview();
    }
  }
  
  function showReview() {
    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("reviewScreen").style.display = "block";
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    userAnswers.forEach((answer, index) => {
      const questionObj = questions[currentCategory][answer.questionIndex];
      const listItem = document.createElement("li");
      listItem.textContent = questionObj.question + " - Your answer: " +
        questionObj.options[answer.answerIndex] + " - Correct answer: " +
        questionObj.options[questionObj.correct];

        if (answer.answerIndex !== questionObj.correct) {
          listItem.style.color = "red";
        }
        reviewList.appendChild(listItem);
    });
    
    const scoreDisplay = document.createElement("p");
    scoreDisplay.textContent = "Your score: " + score + " out of " + questions[currentCategory].length;
    reviewList.appendChild(scoreDisplay);
  }
  
  document.getElementById("startSynonymQuiz").onclick = () => startQuiz("synonym");
  document.getElementById("startOppositeQuiz").onclick = () => startQuiz("opposite");
  document.getElementById("startVerbNounQuiz").onclick = () => startQuiz("verbNoun");
  document.getElementById("startTenseQuiz").onclick = () => startQuiz("tense");
  document.getElementById("startVoiceQuiz").onclick = () => startQuiz("voice");