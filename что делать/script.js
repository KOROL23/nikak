let phrases = [
{ text: 'отправить другу смешной мем', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
{ text: 'мечтать о полёте в Дубай', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'разобраться, о чём поёт моргенштерн', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'Сеня молодец', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'писать код', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'строить мост', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'чекнуть новости', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'послушать новые трэки', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
{ text: 'посмотреть трейлер сериала, заодно первый сезон и выключить компьютер', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'отправить телеграмму', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
