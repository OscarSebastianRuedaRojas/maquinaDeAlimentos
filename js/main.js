let texto = "\n"
let total
let monedas10= 0
let monedas50= 0
let monedas100= 0
let moneda = 1
function deVuelta(moneda, valor){
    if(moneda===0){
        texto += (``)
    } else{
        for (let i = 1; i <= moneda; i++) {
            texto += `${valor}$\n`
        }
    }
}
while(true){
    let eleccion = prompt(`Ingresa el alimento que deseas \n a. $270 \n b. $340 \n c. $370`)
    switch (eleccion) {
        case "a":
            total = 270;
            break;
        case "b":
            total = 340;
            break;
        case "c":
            total = 370;
            break;
        default:
            alert("La opcion no existe")
            continue;
    }
    break
}
while (moneda!==0) {
    moneda= Number(prompt("Ingresa tus monedas de 10$, 50$, 100$ (Ingrese 0 si desea acabar)"))
    switch (moneda) {
        case 10:
            monedas10++
            break;
        case 50:
            monedas50++
            break;
        case 100:
            monedas100++
            break;
        case 0:
            break;
        default:
            alert("Ingresa un valor correcto de moneda")
            break;
    }
}
let monedas10to=monedas10*10
let monedas50to=monedas50*50
let monedas100to=monedas100*100
let tomonedas=monedas10to+monedas50to+monedas100to
let vuelta=tomonedas-total
let vuelta100=(Math.floor(vuelta/100))
let resta=vuelta100*100
vuelta -=resta
let vuelta50=(Math.floor(vuelta/50))
resta=vuelta50*50
vuelta -=resta
let vuelta10=Math.floor(vuelta/10)
deVuelta(vuelta100, 100)
deVuelta(vuelta50, 50)
deVuelta(vuelta10, 10)
alert(`Tus vueltas son: ${texto}` )