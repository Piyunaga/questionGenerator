// modules/utils/helpers.js

module.exports = {
    calculateMarksDistribution: (totalMarks, difficultyDistribution) => {
      const marksDistribution = {};
  
      // Calculate marks for each difficulty based on the specified distribution
      for (const difficulty in difficultyDistribution) {
        const percentage = difficultyDistribution[difficulty];
        marksDistribution[difficulty.toLowerCase()] = Math.round(totalMarks * percentage);
      }
  
      return marksDistribution;
    },
     shuffleArray:(array) => {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    
        return array;
      },
  };
  