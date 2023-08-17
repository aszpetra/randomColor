
let color;
let text;
let html;

$("document").ready(function () { 
    html = $("html");
    text = $("#hexcode");
    random();
    html.on("click", random);
});

function random(ev) {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",];
    color = "#"
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex.length);
        color = color + hex[random];
    }
    text.text(color);
    html.css("background-color", color);
}
