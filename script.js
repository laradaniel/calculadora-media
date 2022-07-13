let notas = [];

function somaNotas() {

    let notaDigitada = document.getElementById("nota").value;

    if(notaDigitada === ""){
        return;
    } 
    
    let nota = Number(notaDigitada).toFixed(2);
    
    notas.push(nota);
    document.getElementById("notasSoma").innerHTML = notas.join(" + ");

    document.getElementById("nota").value = '';

}

function mediaNotas(){
somaNotas();

let notasNumber = notas.map(Number);
let soma = notasNumber.reduce((total, value) => {
    return total + value;
});

let resultadoMedia = soma / notas.length;
console.log(resultadoMedia)
document.getElementById("media").innerHTML = resultadoMedia.toFixed(2);
}

function limparMedia(){
    notas = [];
    document.getElementById("notasSoma").innerHTML = "";
    document.getElementById("media").innerHTML = "";
}



