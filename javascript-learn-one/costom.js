var btn = document.querySelector("#btn");
var question = document.querySelector("#question");

function innerHTML() {
    var date = new Date().toLocaleString();
    document.getElementById('answer').innerHTML = date;
}
document.getElementById('btn').addEventListener('click', function () {
    this.innerText = "Cevabini ver";
    setInterval(innerHTML, 1000);
    innerHTML();
});
