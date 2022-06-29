import throttle from 'lodash.throttle';

const FEEDBACK_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');
const textareaInput = document.querySelector('.feedback-form  textarea');
const emailInput = document.querySelector('.feedback-form  input');
const formFeedbackData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener("submit", handleSubmit);

function onFormInput(event) {
    formFeedbackData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formFeedbackData));
  }
  populateFeedbackData();
  function populateFeedbackData() {
    const feedbackSavedData = localStorage.getItem(FEEDBACK_KEY);
    const feedbackParsedData = JSON.parse(feedbackSavedData);
        if (feedbackParsedData) {
         emailInput.value = feedbackParsedData.email;
         textareaInput.value = feedbackParsedData.message;
    
         formFeedbackData.email = feedbackParsedData.email;
         formFeedbackData.message = feedbackParsedData.message;
  }}
function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(formFeedbackData);
}