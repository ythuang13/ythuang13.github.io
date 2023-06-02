// https://codepen.io/bhmann/pen/QvGRdG

var lines = [
    "snap",
    "snap then finger gun",
    "forget something is called",
    "fucking WTF",
    "babagaboosh",
    "FREE SPACE",
    "roguelike",
    "laugh uncontrollably",
    "uses ryan gadget",
    "therapy",
    "talk about volunteer",
    "free epic games",
    "show a specific youtube video",
    "sharing braincell with someone",
    "play with his bottle hook",
    "play mobile phone while driving",
    "on mobile games for a while",
    "ARKKNIGHT",
    "talks about GOTCHA",
    "Being supportive",
    "Wondering how kyle is",
    "magicka 2",
    "stumble",
    "you cannot be serious",
    "lost direction",
    "almost kill everyone while driving",
    "shit on blizzard",
    "shit on overwatch",
    "being tired/busy",
    "dice",
    "dnd",
    "loud when excite",
    "final fantasy"
    
    
];

// Fisher-Yates Shuffle
var shuffle = function (array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
};
// Did I just steal this code from Wikipedia, or something?

var insertToCard = function (array) {
    var slot = 25;
    while (slot) {
        $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
        slot--;
    }
};

$(document).ready(function () {
    var shuffledLines = shuffle(lines);
    insertToCard(shuffledLines); // #hellaswag
    $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
});
