var liste = ["kagit.png", "makas.png", "tas.png"];
var kagit = document.getElementById("kagit");
var makas = document.getElementById("makas");
var tas = document.getElementById("tas");
var pcSecim = document.getElementById("pc-secim");
var sonucYazdir = document.getElementById("sonuc");


kagit.onclick = secimYap;
makas.onclick = secimYap;
tas.onclick = secimYap;


function secimYap() {
    var pc = RasgeleKagit();

    /*dizi s�ralamas�n� kullanmak daha mant�kl�yd� fakat yukar�daki resimlerin s�ralams� de�i�ince hata verecektir.*/
    /*bu kar��la�t�rmada da rsimlerin isimlerine dikkat etmek gerekiyor.*/
    var secim = this.dataset.id;
    if (pc == 0 && secim == 0) {
        sonuc = "ikinizde ayn� se�imi yapt�n�z";
    } else if (pc == 0 && secim == 1) {
        sonuc = "Kazand�n, makas ka��d� keser";
    } else if (pc == 0 && secim == 2) {
        sonuc = "Kaybettin, ka��t ta�� sarar";
    } else if (pc == 1 && secim == 0) {
        sonuc = "Kaybettin, makas ka��d� keser";
    } else if (pc == 1 && secim == 1) {
        sonuc = "ikinizde ayn� se�imi yapt�n�z";
    } else if (pc == 1 && secim == 2) {
        sonuc = "Kazand�n, Ta� makas� k�rar";
    } else if (pc == 2 && secim == 0) {
        sonuc = "Kazand�n, ka��t ta�� sarar";
    } else if (pc == 2 && secim == 1) {
        sonuc = "Kaybettin, Ta� makas� k�rar";
    } else if (pc == 2 && secim == 2) {
        sonuc = "ikinizde ayn� se�imi yapt�n�z";
    }

    sonucYazdir.innerHTML = sonuc;
}

function RasgeleKagit() {
    var sayi = Math.round(Math.random() * 2);
    pcSecim.src = liste[sayi];

    return sayi;
}