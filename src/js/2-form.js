const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

const LS_KEY = 'feedback-form-state';

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

checkFields();

function handleInput(event) {
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function checkFields(event) {
  const parseData = JSON.parse(localStorage.getItem(LS_KEY));
  formData.email = parseData.email;
  formData.message = parseData.message;
  if (parseData) {
    email.value = parseData.email;
    message.value = parseData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.email.value === '' ||
    event.currentTarget.message.value === ''
  ) {
    alert('Fill please all fields');
    return event.preventDefault();
  }

  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(LS_KEY);
  event.target.reset();
}
