const emojiList = ['🤗', '🍀', '(⚈ ̫ ⚈)', '😀', '😁', '😅', '😇', '😉'];
const p = document.querySelector('p');
p.addEventListener('click', () => {
  p.innerText = emojiList[Math.floor((Math.random() * 100) % emojiList.length)];
});
