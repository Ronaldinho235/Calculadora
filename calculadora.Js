function appendToDisplay(value){
    document.getElementById("display").value+=value
}
function deleteLast(){
    let p = document.getElementById("display")
    p.value = p.value.slice(0,-1)
}
function clearScreen(){
    document.getElementById("display").value=""
}
function calculate(){
    try{
        let resultado = eval(document.getElementById("display").value)
        document.getElementById("display").value=resultado
    }catch (e){
        document.getElementById("display").value="Erro"
    }
}
