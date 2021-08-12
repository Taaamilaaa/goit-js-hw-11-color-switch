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


// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let arrOfIndex = [];
let min;
let max;

function findRandomNumber(arr) {
  arr.forEach(el => {
    arrOfIndex.push(arr.indexOf(el))
  }); 
  
  min = arrOfIndex[0];
  max = arrOfIndex.length - 1;
  arrOfIndex = [];
 return randomIntegerFromInterval(min, max)
  
};

//меняем цвет фона

refs.startBtn.addEventListener('click', onStartBtnClick);

let id;

function onStartBtnClick() {  
  id = setInterval(changeColor, 1000);
  console.log('жму на кнопку старт');
  refs.startBtn.removeEventListener('click', onStartBtnClick);
}; 

function changeColor() {
  refs.body.style.backgroundColor = `${colors[findRandomNumber(colors)]}`
};

//Останавливаем замену цвета

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  console.log('жму на стоп');
  clearInterval(id);
  refs.startBtn.addEventListener('click', onStartBtnClick);
};





