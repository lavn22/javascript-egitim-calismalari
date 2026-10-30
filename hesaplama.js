function Topla(){
    var s1=Number(document.getElementById("s1").value);
    var s2=Number(document.getElementById("s2").value);
    var toplam=s1+s2
    document.getElementById("sonuc").value=toplam;
}

function Cikar(){
    var s1=Number(document.getElementById("s1").value);
    var s2=Number(document.getElementById("s2").value);
    var cikar=s1-s2;
    document.getElementById("sonuc").value=cikar;
}

function Carp(){
    var s1=Number(document.getElementById("s1").value);
    var s2=Number(document.getElementById("s2").value);
    var carp=s1*s2;
    document.getElementById("sonuc").value=carp;
}

function Bol(){
    var s1=Number(document.getElementById("s1").value);
    var s2=Number(document.getElementById("s2").value);
    if(s2==0)
        alert("sıfıra bölme hatası");
    else{
        var bol=s1/s2;
        document.getElementById("sonuc").value=bol;
    }   
}
