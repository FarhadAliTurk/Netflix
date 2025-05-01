# React LearnMCQs

Welcome to the **React Quiz App**! This is a fully responsive, modern quiz application built with **React 19** and styled using **Bootstrap 5**. It allows users to test their knowledge with multiple-choice questions (MCQs) and provides a sleek, interactive user experience.

---

## Features

- **Dynamic Quiz Categories**: Choose between different quiz categories, such as:
  - *Countries and their Capitals*
  - *Countries and their Currencies*
  - *Discoveries and Inventions*
  
- **Stylish Landing Page**: A beautifully designed landing page with a "Start Quiz" button.
  
- **Responsive UI**:
  - Fully mobile-first design using the **Bootstrap grid system**.
  - Optimized for all screen sizes.

- **Interactive Question Display**:
  - One question at a time with four multiple-choice options.
  - Immediate feedback on the selected answer:
    - **Green** for correct answers.
    - **Red** for incorrect answers.
  
- **Smooth Animations**:
  - Minimal, smooth animations using Bootstrap's `fade` and `show` classes.

- **Score Summary**:
  - Displays the final score in a modern card at the end of the quiz.
  - Allows users to restart the quiz.

- **Fixed Footer**:
  - Includes social media links with hover effects for an added modern touch.

---

## Screenshots

### Landing Page
![Landing Page](./screenshots/landing-page.png)

### Quiz Page
![Quiz Page](./screenshots/quiz-page.png)

### Result Page
![Result Page](./screenshots/result-page.png)

---

## Technologies Used

- **React 19**: For building the dynamic user interface.
- **Bootstrap 5**: For styling and responsive design.
- **Font Awesome**: For modern social media icons.
- **Custom CSS**: For additional styling and hover animations.

---

## Installation and Setup

Follow these steps to clone and run the app on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/FarhadAliTurk/react-quiz-app.git
   cd react-quiz-app
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Usage

1. **Start the Quiz**:
   - Click the "Start Quiz" button on the landing page.

2. **Select a Category**:
   - Choose a quiz category (e.g., Capitals or Currencies).

3. **Answer Questions**:
   - Select an answer for each question.
   - The app will immediately show whether your answer is correct or incorrect.

4. **View Results**:
   - At the end of the quiz, view your final score.
   - Restart the quiz if you'd like to try again.

---

## Folder Structure

```
react-quiz-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LandingPage.js
│   │   ├── CategoryPage.js
│   │   ├── QuizPage.js
│   │   ├── ResultPage.js
│   │   └── Footer.js
│   ├── questions.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── README.md
```

---

## Contribution

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/FarhadAliTurk/react-quiz-app/issues).

---

## Author

**Farhad Ali Turk**

- [GitHub](https://github.com/FarhadAliTurk)
- [LinkedIn](https://linkedin.com/in/farhad-ali-turk-135369305)
- [Email](mailto:369farhadali@gmail.com)

---

## License

This project is licensed under the [MIT License](./LICENSE).