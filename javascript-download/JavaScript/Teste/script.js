function calcular() {
    var p = document.getElementById('peso')
    var a = document.getElementById('altura')
    var res = document.getElementById('res')
    window.alert(`${Number(p.value)}`)
    window.alert(`${Number(a.value)}`)
    var vp = Number(p.value)
    var va = Number(a.value)
    if (p.value.length == 0 || a.value.length == 0) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var imc = vp / (va*va)
        res.innerHTML=`Seu IMC é de ----- ${imc.toFixed(2)} pontos`
        window.alert(`${Number(imc)}`)
    }


}