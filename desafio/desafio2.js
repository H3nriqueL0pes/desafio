
//2
let velocidade = prompt('Insira sua velociddade')

if(velocidade>80){
    let multa = (velocidade-80)*5
    alert(`Atenção! a sua velocidade está acima de 80km/h. a sua é de R$ ${multa}`)
}else{
    alert  (' pode passar')
}