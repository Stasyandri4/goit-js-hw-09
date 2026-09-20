const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  checkFields();
  formData.email = event.currentTarget.email.value.trim();
  formData.message = event.currentTarget.message.value.trim();

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function checkFields() {
  const localData = localStorage.getItem(LS_KEY);
  const parseData = JSON.parse(localData);
  if (localData) {
    event.currentTarget.email.value = parseData.email;
    event.currentTarget.message.value = parseData.message;
  }
}

function handleSubmit(event) {
  if (
    event.currentTarget.email.value === '' ||
    event.currentTarget.message.value === ''
  ) {
    alert('Fill please all fields');
  }
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(LS_KEY);
  event.target.reset();
}
