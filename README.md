# Quiz App

A responsive browser-based quiz application built with **HTML, CSS, and vanilla JavaScript**.  
The application retrieves multiple-choice questions from the **Open Trivia Database (OpenTDB) API**, allows users to choose a difficulty level, tracks their score, and stores high scores locally in the browser.

## Overview

This project was created as a practice project to strengthen my front-end development skills, particularly working with:

- JavaScript DOM manipulation
- Fetching and processing data from an external API
- Asynchronous JavaScript (`async/await`)
- Browser `localStorage`
- Event handling
- Array manipulation
- Modular JavaScript
- Dynamic UI updates

The application provides a complete quiz flow from selecting a difficulty level to answering questions and saving the final score.

## Features

- Fetches **10 multiple-choice questions** dynamically from the OpenTDB API
- Three difficulty levels:
  - Easy
  - Medium
  - Hard
- Displays the current question number
- Tracks the user's score during the quiz
- Awards **10 points for each correct answer**
- Highlights correct and incorrect answers
- Prevents multiple answers from being selected for the same question
- Randomizes the position of the correct answer
- Allows the user to move through the questions one by one
- Displays the final score at the end of the quiz
- Allows users to save their name and score
- Stores the **top 10 high scores** in the browser
- Persists selected difficulty and scores using `localStorage`
- Includes loading and API error states

## Technologies Used

- **HTML5** – page structure
- **CSS3** – styling and layout
- **JavaScript (ES6+)** – application logic and DOM manipulation
- **Fetch API** – retrieving quiz questions
- **OpenTDB API** – external trivia question source
- **Local Storage API** – saving difficulty settings and high scores

## How It Works

### 1. Home Page

The main page provides access to:

- Start the quiz
- Select a difficulty level
- View saved high scores

### 2. Difficulty Selection

Users can select **Easy**, **Medium**, or **Hard**.

The selected difficulty is stored in `localStorage` and is used when requesting questions from the OpenTDB API.

If no difficulty has been selected, the application uses **Medium** as the default difficulty.

### 3. Fetching Questions

When the game page loads, the application sends a request to OpenTDB:

```text
https://opentdb.com/api.php?amount=10&difficulty={difficulty}&type=multiple
```

The request returns 10 multiple-choice questions based on the selected difficulty.

### 4. Formatting the API Data

The API provides the correct answer separately from the incorrect answers.

The application combines them into a single answers array and inserts the correct answer at a random position. This prevents the correct answer from always appearing in the same place.

### 5. Answer Selection

When the user chooses an answer:

- The selected answer is checked against the correct answer.
- A correct answer is highlighted.
- An incorrect selection is highlighted while the correct answer is also shown.
- The user cannot select another answer for the same question.
- A correct answer adds **10 points** to the score.

### 6. Completing the Quiz

The user can move through the quiz using the **Next** button.

After the final question, or when the user chooses to finish the quiz, the score is saved temporarily in `localStorage` and the user is redirected to the result page.

### 7. Saving High Scores

On the result page, the user can enter a name and save the score.

Saved scores are:

1. Added to the existing high-score list
2. Sorted from highest to lowest
3. Limited to the best **10 results**
4. Stored in `localStorage`

The high-score page then displays the saved ranking.

## Project Structure

```text
Quiz-app/
│
├── index.html
├── game.html
├── difficulty.html
├── end.html
├── scores.html
│
├── css/
│   ├── global.css
│   ├── index.css
│   ├── game.css
│   ├── difficulty.css
│   ├── end.css
│   └── scores.css
│
└── js/
    ├── index.js
    ├── game.js
    ├── helper.js
    ├── difficulty.js
    ├── end.js
    └── scores.js
```

## Running the Project Locally

This project does not require any package installation or build process.

### Option 1 – Clone the repository

```bash
git clone https://github.com/MojtabaNabid/Quiz-app.git
cd Quiz-app
```

Then open `index.html` in your browser.

### Option 2 – Use a local development server

For the best experience, run the project through a local server such as **Live Server** in Visual Studio Code.

This is especially useful because the project uses JavaScript modules.

## What I Practiced

This project helped me practice several important front-end development concepts:

- Working with REST APIs
- Handling asynchronous operations
- Transforming API response data
- Creating reusable JavaScript functions
- Working with ES modules
- Managing application state
- Updating the DOM dynamically
- Handling user interactions with event listeners
- Using `localStorage` for persistent browser data
- Sorting and limiting stored data
- Handling API loading and error states

## Possible Future Improvements

Some improvements I would like to add in future versions include:

- Quiz categories
- A countdown timer for each question
- More detailed result statistics
- A progress bar
- Responsive UI improvements
- Better handling for empty high-score data
- HTML entity decoding for API questions
- Automated tests
- GitHub Pages deployment

## API

Quiz questions are provided by the **Open Trivia Database (OpenTDB)**.

More information:

https://opentdb.com/

## Author

**Mojtaba Nabid**

GitHub: https://github.com/MojtabaNabid

---

This project was developed as a learning and portfolio project to demonstrate practical JavaScript, API integration, DOM manipulation, and browser storage skills.
