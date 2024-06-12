
function gerar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
 
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
    let n1 = Number(num.value)
    tab.innerHTML = ''
        for (let n2 = 1; n2 <= 10 ; n2++) {
            let res = n1 * n2;
            let item = document.createElement('option')
            item.text = `${n1} x ${n2} = ${res}`;
            item.value = `tab${n2}`
            tab.appendChild(item);
        }

    }

}
