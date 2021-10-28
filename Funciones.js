function Cpro() {
    var N1 = parseInt(document.getElementById("N1").value);
    var N2 = parseInt(document.getElementById("N2").value);
    var N3 = parseInt(document.getElementById("N3").value);
    var Sum = N1+N2+N3;
    var Pro = Math.round(Sum/3);
    if (N1===3&N2===2&N3===2005) {
        alert("Como conoces mi fecha de nacimiento {'°'}");
    }
    if (Pro>=70&Pro<=100) {
        alert("Tu promedio es de "+Pro+", por ende, apruebas");
    } 
    if (Pro>100) {
        alert("La nota no corresponde entre 1 a 100");
    }
    if (Pro<70) {
        alert("Tu promedio es de "+Pro+", por ende, repruebas");
    }
}
function Con () {
    var Km = parseInt(document.getElementById("Km").value);
    var Kg = parseInt(document.getElementById("Kg").value);
    var m = Km*1000
    var L = Kg*2.205
    if (Kg===69 & Km===69) {
        alert("La convercion indica "+m+"m y "+L+"libras");
        alert("Me parece sospechosos esos numeros {._.}");
    }
    else {
        if (Kg===0 & Km===0) {
            alert("Cual crees que es la respuesta {7n7}");
            alert("La convercion indica "+m+"m y "+L+"libras");
        } 
        else {
            alert("La convercion indica "+m+"m y "+L+"libras");
        }
    }
}
function Cal () {
    var Bol = document.getElementById("bol").value;
    var CB = parseInt(document.getElementById("CB").value);
    switch (Bol) {
        case "Puntarenas":
            var Cos = 3200;
            var Pre = CB*Cos;
            alert("El costo por boleto es de ₡"+Cos+", por ende. El total es de ₡"+Pre);
            break;
        case "Limón":
            var Cos = 3800;
            var Pre = CB*Cos;
            alert("El costo por boleto es de ₡"+Cos+", por ende. El total es de ₡"+Pre);
            break;
        case "Pérez Zeledón":
            var Cos = 3350;
            var Pre = CB*Cos;
            alert("El costo por boleto es de ₡"+Cos+", por ende. El total es de ₡"+Pre);
            break;
        case "Guanacaste":
            var Cos = 4500;
            var Pre = CB*Cos;
            alert("El costo por boleto es de ₡"+Cos+", por ende. El total es de ₡"+Pre);
            break;
    }
}
