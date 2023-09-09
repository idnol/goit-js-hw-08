import _ from 'lodash';
const form = document.querySelector('.feedback-form');
let email = '';
let text = '';
let data = '';
let parsedData = {};
form.addEventListener('input', function(e) {
  switch (e.target.name) {
    case 'email':
      email = e.target.value;
      break;
    case 'message':
      text = e.target.value;
      break;
  }
  const settings = {
    email: email,
    message: text,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(settings))

  console.log(parsedData);
})
if (localStorage.length > 0) {
  data = localStorage.getItem('feedback-form-state');
  parsedData = JSON.parse(data);
  form.querySelector('input').value = parsedData.email;
  form.querySelector('textarea').value = parsedData.message;
} else {
  form.querySelector('input').value = '';
  form.querySelector('textarea').value = '';
}

console.log(parsedData);
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(parsedData);
  form.reset();
  localStorage.clear();
  console.log(localStorage);
})

console.log(localStorage);