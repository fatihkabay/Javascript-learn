"use strict";
  var hakSayisi = 0;
  var rastgeleSayi = 0;
  var _tahminEt = document.getElementById("tahminEt");
  var _yeniOyun = document.getElementById("yeniOyun");
  var _sonuc = document.getElementById("sonuc");
  var _sayi = document.getElementById("sayi");

  _yeniOyun.onclick = yeni;
  _tahminEt.onclick = tahmin;

"use strict";
function tahmin() {
  if (hakSayisi == 0) return;
  var girilenSayi = parseInt(_sayi.value);
  var mesaj = "";
  if (isNaN(girilenSayi)) return;

  if (rastgeleSayi > girilenSayi) {
    mesaj = "Daha buyuk deger deneyin";
  } else if (girilenSayi > rastgeleSayi) {
    mesaj = "Daha kucuk deger deneyin";
  } else {
    mesaj = "Tebrikler!!!";
    _tahminEt.disabled = true;
    _yeniOyun.disabled = false;
  }
  hakSayisi--;
  _sonuc.innerHTML = mesaj
  _sonuc.innerHTML += "<br />"
  _sonuc.innerHTML += "Kalan hak sayisi : " + hakSayisi
  if (hakSayisi == 0) {
    _tahminEt.disabled = true;
    _yeniOyun.disabled = false;
  }
}


"use strict";
  var hakSayisi = 0;
  var rastgeleSayi = 0;
  var _tahminEt = document.getElementById("tahminEt");
  var _yeniOyun = document.getElementById("yeniOyun");
  var _sonuc = document.getElementById("sonuc");
  var _sayi = document.getElementById("sayi");

  _yeniOyun.onclick = yeni;
  _tahminEt.onclick = tahmin;

   function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function yeni() {
    rastgeleSayi = randomInt(0, 99);
    hakSayisi = 10;
    _sonuc.innerHTML = "";
    _sayi.value = "";
    _tahminEt.disabled = false;
    _yeniOyun.disabled = true;
  }
  
  function tahmin() {
    if (hakSayisi == 0) return;
    var girilenSayi = parseInt(_sayi.value);
    var mesaj = "";
    if (isNaN(girilenSayi)) return;

    if (rastgeleSayi > girilenSayi) {
      mesaj = "Daha buyuk deger deneyin";
    } else if (girilenSayi > rastgeleSayi) {
      mesaj = "Daha kucuk deger deneyin";
    } else {
      mesaj = "Tebrikler!!!";
      _tahminEt.disabled = true;
      _yeniOyun.disabled = false;
    }
    hakSayisi--;
    _sonuc.innerHTML = mesaj
    _sonuc.innerHTML += "<br />"
    _sonuc.innerHTML += "Kalan hak sayisi : " + hakSayisi
    if (hakSayisi == 0) {
      _tahminEt.disabled = true;
      _yeniOyun.disabled = false;
    }
  }
