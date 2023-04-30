const quotes = [
  {
    quote:
      'Never say goodbye because goodbye means going away and going away means forgetting.',
    author: '- Peter Pan',
  },
  {
    quote: 'Some people are worth melting for.',
    author: '- Frozen(Olaf)',
  },
  {
    quote:
      'The flower that blooms in adversity is the most rare and beautiful of all.',
    author: ' - Mulan',
  },
  {
    quote:
      'The past can hurt. But from the way I see it, you can either run from it, or learn from it.',
    author: '- Lion King',
  },
  {
    quote:
      'You cannot be happy every day. But there are happy things every day.',
    author: '- Winnie the Pooh',
  },
  {
    quote:
      'When you believe in a thing, believe in it all the way, implicitly and unquestionable.',
    author: '- Walt Disney',
  },
  {
    quote: 'To love someone, you have to love yourself first.',
    author: '- Beauty and the Beas',
  },
  {
    quote:
      'Share your gift with the world. Who knows how many lives you are saving just by doing so. ',
    author: '- Kung Fu Panda',
  },
  {
    quote: 'Remember, you’re the one who can fill the world with sunshine. ',
    author: '- Snow White and the Seven Dwarves',
  },
  {
    quote: 'Today’s special moments are tomorrow’s memories.',
    author: '- Aladdin',
  },
  {
    quote:
      'Don’t close your eyes. Look! The reality of fear can be different than you think.',
    author: '- Finding Nemo',
  },
  {
    quote:
      ' But the thing that makes Woody special is he will never give up on you, ever. ',
    author: '- Toy Story',
  },
  {
    quote: 'Anyone can be anything.',
    author: ' - Zootopia',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
// 0~1사이의 랜덤숫자 제공...
// 뒤에 소수점은 필요없으니 날리자! 3가지 방법이 있다
// 1.Math.round - 반올림
// 2.Math.ceil - 올림
// 3.Math.floor- 내림
