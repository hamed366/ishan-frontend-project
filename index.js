// const emojiList = ['🤗', '🍀', '(⚈ ̫ ⚈)', '😀', '😁', '😅', '😇', '😉'];
// const p = document.querySelector('p');
// p.addEventListener('click', () => {
//   p.innerText = emojiList[Math.floor((Math.random() * 100) % emojiList.length)];
// });

const comment = document.querySelector('.comment-icon');
const retweet = document.querySelector('.retweet-icon');
const like = document.querySelector('.like-icon');
const share = document.querySelector('.share-icon');
const time = document.querySelector('.time');
let now = new Date();
let hour = now.toLocaleTimeString();
let day = now.getUTCDate();
let month = now.getUTCMonth();
let year = now.getUTCFullYear()

switch (month) {
  case 0:
    month = 'Jan';
    break;
  case 1:
    month = 'Feb';
    break;
  case 2:
    month = 'Mar';
    break;
  case 3:
    month = 'Apr';
    break;
  case 4:
    month = 'May';
    break;
  case 5:
    month = 'Jun';
    break;
  case 6:
    month = 'Jul';
    break;
  case 7:
    month = 'Aug';
    break;
  case 8:
    month = 'Sep';
    break;
  case 9:
    month = 'Oct';
    break;
  case 10:
    month = 'Nov';
    break;
  case 11:
    month = 'Dec';
    break;
}
time.textContent = hour + " . " + month + " " + day + " " + year;

comment.addEventListener('click', () => {
  console.log('You clicked on comment')
});
retweet.addEventListener('click', () => {
  console.log('You clicked on retweet')
});
like.addEventListener('click', () => {
  console.log('You clicked on like')
});
share.addEventListener('click', () => {
  console.log('You clicked on share')
});



