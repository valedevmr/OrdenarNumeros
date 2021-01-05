function validar(btn, numero) {


    entradaNumero = document.getElementById(numero);
    total = entradaNumero.value;
    if (total > 0 && total < 16 && total != " ") {
        btn.disabled = 'disabled';

        generarcontenido();
        document.getElementById("aviso").innerHTML = "";
        entradaNumero.disabled = 'disabled';
        entradaNumero.value = "";

    } else {
        document.getElementById("aviso").innerHTML = "Valor no permitido";
    }
}

function generarcontenido() {
    elementos = document.getElementById('nuevosE');
    for (var contador = 1; contador <= total; contador++) {
        setTimeout(function(){
            
        }, 3000);
        elementos.innerHTML = elementos.innerHTML + "<input type='text' required class='cajitas' name='arr[]'><br>";
  
        
    }

}

function obtener() {
    cajas = document.getElementsByClassName("cajitas");
    bandera = 0;
    var nu = cajas.length;
    arreglo = new Array()
    for (var i = 0; i < nu; i++) {
        arreglo.push(cajas[i].value);
        if (!cajas[i].value) {

            bandera = 1;
        }

    }


    if (bandera) {
        document.getElementById("lg").style.display = "none";
        document.getElementById("alert").style.display = "block";
    } else {

        document.getElementById("alert").style.display = "none";

        seleccion(arreglo);

    }




}

function seleccion(arr) {

    array = arreglo.sort(function(x, y) {
        return x - y;
    });
    for (var i = 0; i < cajas.length; i++) {
        cajas[i].value = array[i];
    }

    el = document.getElementById('submit');
    el.style.display = 'none';
    el1 = document.getElementById('submit2');
    el1.style.display = 'block';



}




function retornar() {
    location.href = "seleccion.html";
}