const SIZE = {
  '2*4': 8,
  '3*4': 12,
  '3*6': 18,
};

const SIZEARR = [
  '2*4',
  '3*4',
  '3*6',
];

const TOPIC = {
  'Children`s': 1,
  'Game of Thrones': 2,
  'Figures': 3,
  'Детская': 1,
  'Игры престолов': 2,
  'Фигуры': 3,
};

const formEn = {
  user: 'Enter your nickname',
  save: 'Save the result',
  close: 'Close',
  nick: 'Nickname'
};

const formRu = {
  user: 'Введите свой никнейм',
  save: 'Сохранить',
  close: 'Выйти',
  nick: 'Никнейм'
};

const exitEn = {
  question: 'Are you sure to end the game?',
  end: 'End the game',
  close: 'Close',
};

const exitRu = {
  question: 'Вы уверены, что хотите закончить игру?',
  end: 'Закончить игру',
  close: 'Выйти',
};

const LANGUAGES = [
  'en',
  'ru',
];

const TOPICEN = [
  'Children`s',
  'Game of Thrones',
  'Figures',
];

const TOPICRU = [
  'Детская',
  'Игры престолов',
  'Фигуры',
];

const paramEn = ['User', 'Moves', 'Time', 'Win', 'Lose'];
const paramRu = ['Имя', 'Ходы', 'Время', 'Победа', 'Проигрыш'];
const paramScoreEn = ['User', 'Moves', 'Time'];
const paramScoreRu = ['Имя', 'Ходы', 'Время'];

const maxCountCards = 18;
const widthForMaxCountCards =  '15.4%';
const widthForCards =  '20%';
const fontSizeEnglish = '2rem';
const fontSizeRussian = '1.5rem';

const startRu = 'Начать';
const startEn = 'Start';
const h1Ru = 'Игра на запоминание';
const h1En = 'Game Memory';
const timeEn = 'Time: ';
const timeRu = 'Время: ';
const moveEn = 'moves';
const moveRu = 'ходов';

export {SIZE, TOPIC, LANGUAGES, TOPICRU, TOPICEN, maxCountCards, widthForMaxCountCards, widthForCards, startRu, startEn, h1Ru, h1En,SIZEARR,
  timeEn, moveRu, moveEn, timeRu, fontSizeEnglish, fontSizeRussian, formRu, formEn, exitRu, exitEn, paramEn, paramRu, paramScoreEn, paramScoreRu};