'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const messageContainer = (message, className) => {
  const div = document.createElement('div');

  div.innerText = message;
  div.className = className;
  document.body.append(div);
};

promise1.then((message) => {
  messageContainer(message, 'message');
});

promise2.catch((message) => {
  messageContainer(message, 'error-message');
});
