// funciones que se DECLARAN con la palabra reservada function, si pueden ser llamadas con la palabra reservada de new
function fn(){
	this.prop = 'declaracion de variable dentro de una funcion'
}

const r = new fn()

const fatFun = () => {
	return 'funcion arrow fat function'
	
}
// en las arrow funcion
//no puede ser llamadas con la palabra new
//no existe el contexto de this, no pertenece las arrow function
//posee un return implicito
//

const fatFunction = () => 2 

const r1 = fatFun()

console.log(r1)

console.log(fatFunction()) 
