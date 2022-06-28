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

    /*dizi sýralamasýný kullanmak daha mantýklýydý fakat yukarýdaki resimlerin sýralamsý deðiþince hata verecektir.*/
    /*bu karþýlaþtýrmada da rsimlerin isimlerine dikkat etmek gerekiyor.*/
    var secim = this.dataset.id;
    if (pc == 0 && secim == 0) {
        sonuc = "ikinizde ayný seçimi yaptýnýz";
    } else if (pc == 0 && secim == 1) {
        sonuc = "Kazandýn, makas kaðýdý keser";
    } else if (pc == 0 && secim == 2) {
        sonuc = "Kaybettin, kaðýt taþý sarar";
    } else if (pc == 1 && secim == 0) {
        sonuc = "Kaybettin, makas kaðýdý keser";
    } else if (pc == 1 && secim == 1) {
        sonuc = "ikinizde ayný seçimi yaptýnýz";
    } else if (pc == 1 && secim == 2) {
        sonuc = "Kazandýn, Taþ makasý kýrar";
    } else if (pc == 2 && secim == 0) {
        sonuc = "Kazandýn, kaðýt taþý sarar";
    } else if (pc == 2 && secim == 1) {
        sonuc = "Kaybettin, Taþ makasý kýrar";
    } else if (pc == 2 && secim == 2) {
        sonuc = "ikinizde ayný seçimi yaptýnýz";
    }

    sonucYazdir.innerHTML = sonuc;
}

function RasgeleKagit() {
    var sayi = Math.round(Math.random() * 2);
    pcSecim.src = liste[sayi];

    return sayi;
}