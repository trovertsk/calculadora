function appendToDisplay(value) {
    document.getElementById("display").value += value;  //Acrescenta valores ao display
}

function clearDisplay() {
    document.getElementById("display").value = "";  // Limpa o visor
}

function calculateResult() {
    const displayValue = document.getElementById("display").value; //calcula o resultado e mostra no visor 
    try {
        document.getElementById("display").value = eval(displayValue); 
    } catch (error) {
        document.getElementById("display").value = "Erro"; 
    }
}
