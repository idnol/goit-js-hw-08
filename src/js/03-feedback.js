import _ from 'lodash';
const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const data = {};

form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit);

if (localStorage[KEY]) {
  setInputValues(form, data);
}


function handleInput(e) {
  new FormData(e.currentTarget).forEach((value, index) => {
    data[index] = value;
  });
  localStorage.setItem(KEY, JSON.stringify(data));
}

function setInputValues(form, data) {
  data = JSON.parse(localStorage.getItem(KEY));
  form.querySelector('input').value = data.email;
  form.querySelector('textarea').value = data.message;
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY)));
  localStorage.clear();
  form.reset();
}