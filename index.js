const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let id;

function onStartBtnClick() {
  id = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  console.log('жму на кнопку старт');
  refs.startBtn.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick() {
  console.log('жму на стоп');
  clearInterval(id);
  refs.startBtn.addEventListener('click', onStartBtnClick);
}

