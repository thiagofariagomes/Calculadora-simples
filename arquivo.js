
function calc(){

    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let operation = document.getElementById("operacao").value;
    let valor1 = parseInt(num1);
    let valor2 = parseInt(num2);

    switch (num1, num2, operation){

        case "soma":
            
            let som = valor1 + valor2;

            document.getElementById("resultado").innerHTML = ("O resultado da operação é: " + som);
        
         break;
        case "subtracao":

           let sub = valor1 - valor2;

           document.getElementById("resultado").innerHTML =  ("O resultado da operação é: " + sub);

         break;
        case "multiplicacao":

            let mult = valor1 * valor2;

            document.getElementById("resultado").innerHTML = ("O resultado da operação é: " + mult);

         break;
        case "divisao":

            let divi = valor1 / valor2;

            document.getElementById("resultado").innerHTML = ("O resultado da operação é: " + divi)

         break;
        default:
            document.getElementById("resultado").innerHTML = ("Operação Invalida");

    };


    if( isNaN(valor1) || isNaN (valor2) ){

        document.getElementById("resultado").innerHTML = ("Por favor insira um número");
        return

    };

    if (operation === "divisao" && valor2 === 0 ){

        let nulo = document.getElementById("resultado").innerHTML = ("Error:Null");
        document.getElementById("resultado").style.color = "red";
        alert("Divisão por zero não é permitido")

    };
    
    

}

