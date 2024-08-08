
let amtOfQuestions = 16;
let genQuestions= [];
let i = 0;
const DifLevel = localStorage.getItem('difficulty');

function generateQuestion(difficulty) {
    let generatedQuestion = [];
    let QuestionGenereted = "";

    //dont generate the same question twice 
    while (amtOfQuestions > 0){
        if(i < 4){
            QuestionGenereted = generateAddition(difficulty);
            if(generatedQuestion.includes(QuestionGenereted))
                continue;
            generatedQuestion.push( QuestionGenereted);
            amtOfQuestions--;
            i++;
        }else if(i < 8){
            QuestionGenereted = generateSubtraction(difficulty);
            if(generatedQuestion.includes(QuestionGenereted))
                continue;
            generatedQuestion.push(QuestionGenereted);
            amtOfQuestions--;
            i++;
        }else if(i < 12){
            QuestionGenereted = generateMultiplication(difficulty);
            if(generatedQuestion.includes(QuestionGenereted))
                continue;
            generatedQuestion.push( QuestionGenereted);
            amtOfQuestions--;
            i++;
        }else{
            QuestionGenereted =  generateDivision(difficulty);
            if(generatedQuestion.includes(QuestionGenereted))
                continue;
            generatedQuestion.push( QuestionGenereted);
            amtOfQuestions--;
            i++;
        }
    }
    return generatedQuestion
}

function generateAddition(difficulty) { // add in difficulty level for easy, medium and hard
    let questionPhrase = "", questionAnswer = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    if(difficulty == "easy"){
        firstNumber = Math.floor(Math.random()*50 + 1)+1;
        secondNumber = Math.floor(Math.random()*50 + 1);
    }else if(difficulty == "medium"){
        firstNumber = Math.floor(Math.random()*100 + 1)+1;
        secondNumber = Math.floor(Math.random()*100 + 1);
    }else if(difficulty == "hard"){
        firstNumber =100 + Math.floor(Math.random()*900 + 1);
        secondNumber =100 +  Math.floor(Math.random()*900 + 1);
    }

    let phraseChoice = Math.floor(Math.random()*3);

    if (phraseChoice === 1) {
        questionPhrase = `Solve: ${firstNumber} + ${secondNumber}`;
    } else if(phraseChoice == 2){
        questionPhrase = `Find the sum of ${firstNumber} and ${secondNumber}`;
    }else{
        questionPhrase = `If you have ${firstNumber} marbles and John give you ${secondNumber} more marbles, how many do you have?`
    }

    questionAnswer = firstNumber + secondNumber;
    
    return {question: questionPhrase, answer: questionAnswer};
}

function generateSubtraction(difficulty) { // add in difficulty level for easy, medium and hard
    let questionPhrase = "", questionAnswer = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    if(difficulty == "easy"){
        firstNumber = Math.floor(Math.random()*50 + 1)+1;
        secondNumber = Math.floor(Math.random()*50 + 1);
    }else if(difficulty == "medium"){
        firstNumber = Math.floor(Math.random()*100 + 1)+1;
        secondNumber = Math.floor(Math.random()*100 + 1);
    }else if(difficulty == "hard"){
        firstNumber =100 + Math.floor(Math.random()*900 + 1);
        secondNumber =100 +  Math.floor(Math.random()*900 + 1);
    }
    
    let phraseChoice = Math.floor(Math.random()*4);

    if (phraseChoice === 1) {
        if(firstNumber>secondNumber){
            questionPhrase = `Solve: ${firstNumber} - ${secondNumber}`;
            questionAnswer = firstNumber - secondNumber;
        }else{
            questionPhrase = `Solve: ${secondNumber} - ${firstNumber}`;
            questionAnswer = secondNumber - firstNumber;
        }
        
    } else if(phraseChoice === 2){
        if(firstNumber > secondNumber){
            questionPhrase = `Subtract ${secondNumber} from ${firstNumber}`;
            questionAnswer = firstNumber - secondNumber;
        }else{
            questionPhrase = `Subtract ${firstNumber} from ${secondNumber}`;
            questionAnswer = secondNumber - firstNumber;
        }
        
    }else if(phraseChoice === 3){
        if(firstNumber > secondNumber){
            questionPhrase = `If you have ${firstNumber} marbles and you give away ${secondNumber} of them, how many do you have left?`;
            questionAnswer = firstNumber - secondNumber;
        }else{
            questionPhrase = `If you have ${secondNumber} marbles and you give away ${firstNumber} of them, how many do you have left?`;
            questionAnswer = secondNumber - firstNumber;
        }
        
    }else{
        questionPhrase = `Find the difference between ${firstNumber} and ${secondNumber}`;
        if(firstNumber > secondNumber){
            questionAnswer = firstNumber - secondNumber;
        }else{
            questionAnswer = secondNumber - firstNumber;
        }
    }

    return {question: questionPhrase, answer: questionAnswer};
}

function generateMultiplication(difficulty) { // add in difficulty level for easy, medium and hard
    let questionPhrase = "", questionAnswer = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    if(difficulty == "easy"){
        firstNumber = Math.floor(Math.random()*10 + 1);
        secondNumber = Math.floor(Math.random()*10 + 1);
    }else if(difficulty == "medium"){
        firstNumber = Math.floor(Math.random()*20 + 1);
        secondNumber = Math.floor(Math.random()*20 + 1);
    }else if(difficulty == "hard"){
        firstNumber =10 + Math.floor(Math.random()*90 + 1);
        secondNumber =10 +  Math.floor(Math.random()*90 + 1);
    }
    let phraseChoice = Math.floor(Math.random()*2);

    if (phraseChoice === 1) {
        questionPhrase = `Solve: ${firstNumber} x ${secondNumber}`;
    } else{
        questionPhrase = `Find the product of ${firstNumber} and ${secondNumber}`;
    }
    questionAnswer = firstNumber * secondNumber;
    
    return {question: questionPhrase, answer: questionAnswer};
}

function generateDivision(difficulty) { // add in difficulty level for easy, medium and hard
    let questionPhrase = "", questionAnswer = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    if(difficulty == "easy"){
        firstNumber = Math.floor(Math.random()*12 + 1);
        secondNumber = Math.floor(Math.random()*12 + 1);
    }else if(difficulty == "medium"){
        firstNumber = Math.floor(Math.random()*50 + 1)+1;
        secondNumber = Math.floor(Math.random()*50 + 1);
    }else if(difficulty == "hard"){
        firstNumber =10 + Math.floor(Math.random()*100 + 1);
        secondNumber =10 +  Math.floor(Math.random()*100 + 1);
    }
    let phraseChoice = Math.floor(Math.random()*2);
    while(true){
        if(firstNumber%secondNumber ===0 || secondNumber%firstNumber ===0)
            break

        if(difficulty == "easy"){
            firstNumber = Math.floor(Math.random()*12 + 1);
            secondNumber = Math.floor(Math.random()*12 + 1);
        }else if(difficulty == "medium"){
            firstNumber = Math.floor(Math.random()*50 + 1)+1;
            secondNumber = Math.floor(Math.random()*50 + 1);
        }else if(difficulty == "hard"){
            firstNumber =10 + Math.floor(Math.random()*90 + 1);
            secondNumber =10 +  Math.floor(Math.random()*90 + 1);
        }
    }
    if (phraseChoice === 1) {
        if(firstNumber > secondNumber){
            questionPhrase = `Solve: ${firstNumber} / ${secondNumber}`;
            questionAnswer = firstNumber / secondNumber;
        }else{
            questionPhrase = `Solve: ${secondNumber} / ${firstNumber}`;
            questionAnswer = secondNumber / firstNumber;
        }
            
    } else{
        if(firstNumber > secondNumber){
            questionPhrase = `Find the quotient of ${firstNumber} and ${secondNumber}`;
            questionAnswer = firstNumber / secondNumber;
        }else{
            questionPhrase = `Find the quotient of ${secondNumber} and ${firstNumber}`;
            questionAnswer = secondNumber / firstNumber;
        }  
    }
    return {question: questionPhrase, answer: questionAnswer};
}

genQuestions.push(generateQuestion(DifLevel));
const Questions = genQuestions[0];
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

}

let currentQuestionIndex = Math.floor(Math.random()*15);
let elementsChoosen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
shuffle(elementsChoosen);
let score = 0;
let startQuestion = 0;

function displayQuestion() {
    document.getElementById("question").textContent = Questions[elementsChoosen[startQuestion]].question;  
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === Questions[elementsChoosen[startQuestion]].answer) {
        document.getElementById("feedback").textContent = "Correct! 🎉";
        document.getElementById('answer').value = '';
        score++;
    } else {
        document.getElementById("feedback").textContent = "Oops, that's incorrect. Try again!";
        document.getElementById('answer').value = '';
    }
    startQuestion++;

    // Move to the next question
    if (startQuestion === 16) {
        // All questions answered; show final score
        document.getElementById("question").textContent = "Quiz completed!";
        document.getElementById("feedback").textContent = `Score: ${score} out of 16`;
        
    } else {
        // Display the next question
        document.getElementById("question").textContent = Questions[elementsChoosen[startQuestion]].question;
        document.getElementById("Quize_Completed").textContent = ` ${startQuestion}`;
    } 
    
}

// Display the first question on page load
displayQuestion();