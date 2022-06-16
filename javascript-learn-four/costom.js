KayanYazi=function(nesne,zaman){
    let yaziNesne=nesne;
   
   setInterval(function(){
       let yazi  = yaziNesne.innerHTML;
       let harf  = yazi.substring(0,1);
       let kalan = yazi.substring(1,yazi.length);
       kalan=kalan+harf
       yaziNesne.innerHTML=kalan;
   }, zaman);
}
   
var nesne=document.getElementById("text"); 
KayanYazi(nesne,750);