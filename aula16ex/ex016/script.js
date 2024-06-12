let numbers = []
function add() {
    let res = document.getElementById('res')
    let num = document.getElementById('inum')
    let n1 = Number(num.value)
    let tabela = document.getElementById('seltab')
    res.innerHTML = ""
    
    if(n1 < 1 || n1 > 100 || num.value.length == 0 || numbers.indexOf(n1) != -1) {
        alert('Valor invalido ou já encontrado na lista')
    } else {
        numbers.push(n1)
        let item = document.createElement('option')
        item.text = `Valor ${n1} adicionado`;
        item.value = `tab${n1}`
        tabela.appendChild(item)
    }
} 

function somar() {
    let addition = 0
    for(let pos in numbers) {
        addition += Number(numbers[pos])
    }
    return addition
}

function end() {
    numbers.sort
    let res = document.getElementById('res')
    let total = numbers.length
    let ultimo = numbers.length -1
    res.innerHTML = ""
    if(total == 0) {
    alert('Adicione valores antes de continuar')
    } else {
    let soma = String(somar())
    let media = soma / numbers.length
    res.innerHTML = 
      (`<p>Ao todo, temos ${total} números cadastrados.</p>
        <p>O maior valor informado foi ${numbers[ultimo]}.</p>
        <p>O menor valor informado foi ${numbers[0]}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}.</p>`)
    }
}