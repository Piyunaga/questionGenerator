// app.js
const questionPaperGenerator = require('./modules/questionPaperGenerator');

// Example usage
const totalMarks = 100;
const difficultyDistribution = { "easy": 0.2, "medium": 0.5, "hard": 0.3};

const generatedPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
console.log(generatedPaper);
