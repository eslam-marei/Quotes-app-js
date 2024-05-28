var Qutoes =[
    {
        qutoe:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde",
    },
    {
        qutoe:"“So many books, so little time.”",
        author:"― Frank Zappa",
    },
    {
        qutoe:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein",
    },
    {
        qutoe:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
    },
    {
        qutoe:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi",
    },
    {
        qutoe:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain",
    },
    {
        qutoe:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"― Andre Gide, Autumn Leaves",
    },
    
];


var newIndex;
var lastIndex;
var displayedQutoes=[];

function getQutoes(){
    if (displayedQutoes.length == Qutoes.length) {
        displayedQutoes=[];
    }

    do {
        newIndex = Math.floor(Math.random() * Qutoes.length);
    } while (newIndex == lastIndex || displayedQutoes.includes(newIndex));

    lastIndex=newIndex

    console.log(newIndex);

    displayedQutoes.push(newIndex);

    document.getElementById("qoute").innerHTML=Qutoes[newIndex].qutoe;
    document.getElementById("author").innerHTML=Qutoes[newIndex].author;
}