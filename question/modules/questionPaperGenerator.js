// modules/questionPaperGenerator.js
const { getQuestions } = require('./questionStore');
const { calculateMarksDistribution, shuffleArray } = require('./utils/helpers');



module.exports = {
    generateQuestionPaper: (totalMarks, difficultyDistribution) => {
        const questions = getQuestions();
        const marksDistribution = calculateMarksDistribution(totalMarks, difficultyDistribution);
        
        // Shuffle the questions array

        const shuffledQuestions = shuffleArray(questions);
        // console.log(shuffledQuestions);

        let questionPaper = [];


        let easyMarks, mediumMarks, hardMarks;
        for (const difficulty in marksDistribution) {
            const marksForDifficulty = marksDistribution[difficulty];
            const filteredQuestions = shuffledQuestions.filter(question => question.difficulty.toLowerCase() === difficulty);

            if (difficulty == 'easy') easyMarks = filteredQuestions[0].marks;
            if (difficulty == 'medium') mediumMarks = filteredQuestions[0].marks;
            if (difficulty == 'hard') hardMarks = filteredQuestions[0].marks;


        }
        let easyCount = 20 / easyMarks;
        let mediumCount = 50 / mediumMarks;
        let hardCount = 30 / hardMarks;
        console.log(easyCount,mediumCount,hardCount)

        // Generate question paper based on difficulty distribution
        for (const difficulty in marksDistribution) {
            const marksForDifficulty = marksDistribution[difficulty];
            const filteredQuestions = shuffledQuestions.filter(question => question.difficulty.toLowerCase() === 'easy');
            let sum=0;
            for (let i = 0; i < easyCount; i++) {
              
                questionPaper.push(filteredQuestions[i]);
            }
            
            if (sum < marksForDifficulty) {
                
                console.error(`Not enough questions for difficulty level: ${difficulty}`);
                break;
            }
        }

        for (const difficulty in marksDistribution) {
            const marksForDifficulty = marksDistribution[difficulty];
            const filteredQuestions = shuffledQuestions.filter(question => question.difficulty.toLowerCase() === 'medium');
            
            let sum=0;
            for (let i = 0; i < mediumCount; i++) {
              
                questionPaper.push(filteredQuestions[i]);
            }
            
            if (sum < marksForDifficulty) {
                
                console.error(`Not enough questions for difficulty level: ${difficulty}`);
                break;
            }
        }


        for (const difficulty in marksDistribution) {
            const marksForDifficulty = marksDistribution[difficulty];
            const filteredQuestions = shuffledQuestions.filter(question => question.difficulty.toLowerCase() === 'hard');
            
            let sum=0;
            for (let i = 0; i < hardCount; i++) {
              
                questionPaper.push(filteredQuestions[i]);
            }
            
            if (sum < marksForDifficulty) {
                
                console.error(`Not enough questions for difficulty level: ${difficulty}`);
                break;
            }
        }

    
      return questionPaper;
    },

   
};
