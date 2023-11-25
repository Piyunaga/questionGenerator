# questionGenerator
Designed and implemented a Question Paper Generator application.


I have assumed that questions of the same difficulty level have the same number of marks.
Total marks are 100.
20% easy,50% medium and 30% hard.
Questions are randomly selected from the questionStore.js file.


#Setting Up the Project:
Initialize a Node.js project using npm init.
Install necessary packages:  using npm install.
run using node app.js.

#DIRECTORIES 

question/
│   package.json
│   app.js
│
└───modules/
    │   questionStore.js
    │   questionPaperGenerator.js
    │
    └───utils/
        │   helpers.js


1. questionStore.js - This module will handle storing and retrieving questions.
2. helpers.js - This module will contain utility functions.
3. questionPaperGenerator.js - The main module for generating question papers.
4. app.js - The entry point of the application.




