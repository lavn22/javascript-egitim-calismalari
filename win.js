function mesaj() {
    alert ("5 saniye geçti" );
}

function baglantiAc(){
    window.open("https://www.btkakademi.gov.tr/","_blank");
}

var i=0;
function sayaca(){
    document.getElementById("sayac").innerHTML="<b>" + i + "</b>";
    i++;
}
window.setInterval(sayaca,1000);