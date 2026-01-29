// 1
const myName = 'Алексей';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Никиты Михайловича';
const reasonText = 'это круто';
const numberOfMonth = 0;

const resultText = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе 
по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, 
потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. 
Я уверен, что пройду данный курс до конца!`;

console.log(resultText);

// 2
let myInfoText = resultText;
myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase());

console.log(myInfoText);

console.log(myInfoText.length);

console.log(myInfoText[0]); 

console.log(myInfoText[myInfoText.length - 1]);

// 3
const userName = prompt('Как вас зовут?');
const formattedUserName = userName.toLowerCase().trim();

alert(`Вас зовут ${formattedUserName}`);

// 4
const userAge = prompt('Сколько вам лет?');
const formattedUserAge = Number(userAge.trim());

alert(`Вас зовут ${formattedUserName} и вам ${formattedUserAge} лет`);

// 5
const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки'));
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки'));

const slicedString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${slicedString}`);

// 6
const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();

const indexOfWord = userText.indexOf(wordFromText);

const finalResult = userText.slice(0, indexOfWord);

alert(`Результат: ${finalResult}`);

