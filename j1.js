function clic()
{
    let a = parseFloat(prompt("Podaj 1 liczbę"));
    let b = parseFloat(prompt("Podaj 2 liczbę"));
    let suma = document.getElementById("suma");
    let iloczyn = document.getElementById("iloczyn");
    let iloraz = document.getElementById("iloraz");
    suma.innerHTML="Suma wynosi:"+ a+b;
    iloczyn.innerHTML="Iloczyn wynosi:" + a*b;
    if(b==0)
    {
        alert("Nie można dzielić przez 0!!!");
    }
    else
    {
        iloraz.innerHTML="Iloraz wynosi:"+ a/b;
    }
}