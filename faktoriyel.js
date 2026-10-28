function FaktoriyelHesapla(sayi){
    carpim=1;
    for(var i=2;i<=sayi;i++)
    {
        carpim*=i;
    }
    return carpim;                                          
}

var sayi;
sayi=Number(prompt("Faktöriyelini hesaplamak istediğiniz sayıyı girin:"));
faktoriyel=FaktoriyelHesapla(sayi);
alert(sayi+"! = "+carpim);