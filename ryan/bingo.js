// https://codepen.io/bhmann/pen/QvGRdG

var lines = [
    "bingo1",
    "bingo2",
    "bingo3",
    "bingo4",
    "bingo5",
    "bingo6",
    "bingo7",
    "bingo8",
    "bingo9",
    "bingo10",
    "bingo11",
    "bingo12",
    "bingo13",
    "bingo14",
    "bingo15",
    "bingo16",
    "bingo17",
    "bingo18",
    "bingo19",
    "bingo20",
    "bingo21",
    "bingo22",
    "bingo23",
    "bingo24",
    "bingo25",
    "bingo26",
    
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
