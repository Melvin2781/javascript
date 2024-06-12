
function gerar() {
    var num = document.getElementById('inum')
    var tabela = document.getElementById('corpo')
    var n1 = Number(num.value)
    var n2 = 1
    tabela.innerHTML = ""
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
   for(var n2; n2 <= 10; n2++)    for(var n2; n2 <= 10; n2++) {
    var res = n1 * n2;
    tabela.innerHTML += `<tr><td>${n1} x ${n2} = ${res}</td> </tr>`;
   }
}

}
