let texto
function deVuelta(moneda, valor){
    if(moneda===0){
        texto += (``)
    } else{
        for (let i = 0; i <= moneda; i++) {
            texto += (`${valor}\n`)
        }
    }
}