let arr = [
    "“Be yourself; everyone else is already taken.”\n" +
    "― Oscar Wilde",
    "“So many books, so little time.”\n" + "― Frank Zappa","“You only live once, but if you do it right, once is enough.”\n" +
    "― Mae West","“Be the change that you wish to see in the world.”\n" +
    "― Mahatma Gandhi","“To live is the rarest thing in the world. Most people exist, that is all.”\n" +
    "― Oscar Wilde"
];

let quote = document.getElementById('quote');
let btn = document.getElementById('btn');

let prev = -1;

btn.addEventListener('click', () => {
    let index;
    do {
        index = Math.floor(Math.random() * arr.length);
    } while (index === prev);
    prev = index;
    quote.textContent = arr[index];
});
