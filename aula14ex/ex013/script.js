function clique() {
var interativo = document.getElementById('conta');
var res = document.getElementById('res');
var ini = document.getElementById('istart');
var fim = document.getElementById('iend');
var pas = document.getElementById('icount');
res.innerHTML = `Contando:<br>`;

var n1 = Number(ini.value);
var n2 = Number(fim.value);
var n3 = Number(pas.value);

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = `<p>Impossível Contar! Por favor preencha todos os campos!</p>`;
    } 
    else if (n2 <= 0 || n1 < 0 || n1 == n2) {
        res.innerHTML = `<p>Impossível Contar! Por favor preencha os campos corretamente!</p>`;
    } 
    else if(n3 <= 0) {
        alert("PASSO INVÁLIDO! O valor será reajustado para 1!");
        n3 = 1;
        for(var n1; n1 <= n2 ; n1 += n3) {
            res.innerHTML += `${n1} \u{1F449} `;
        }
        res.innerHTML += ` &#x1F3C1`;
    }  
    else {
        if(n1 < n2) {
        for(var n1; n1 <= n2 ; n1 += n3) {
            res.innerHTML += `${n1} \u{1F449} `;
        }
        res.innerHTML += ` &#x1F3C1`;
    } 
    else {
            for(var n1; n2 <= n1 ; n1 -= n3) {
                res.innerHTML += `${n1} \u{1F449} `;
            }
            res.innerHTML += ` &#x1F3C1`;
    }
    }
}