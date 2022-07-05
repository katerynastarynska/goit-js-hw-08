import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaInput = document.querySelector('.feedback-form  textarea');
const emailInput = document.querySelector('.feedback-form  input');
let formFeedbackData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', handleSubmit);

function onFormInput(event) {
    formFeedbackData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formFeedbackData));
}
populateFeedbackData();

function populateFeedbackData() {
    const feedbackSavedData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
console.log(feedbackSavedData)
    if (feedbackSavedData && Object.keys(feedbackSavedData).length !== 0) {
        if (feedbackSavedData.email !== undefined) {
            emailInput.value = feedbackSavedData.email;
            formFeedbackData.email = feedbackSavedData.email;
        }
        if (feedbackSavedData.message !== undefined) {
            textareaInput.value = feedbackSavedData.message;
            formFeedbackData.message = feedbackSavedData.message;
        }
    }
}
function handleSubmit(event) {
    event.preventDefault();
    console.log('data', formFeedbackData);
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    formFeedbackData = {};
}