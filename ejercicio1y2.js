class Animal {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
        
    }
    get nombre() {
return this._nombre;
}
    set nombre(in_nombre) {
this._nombre = in_nombre;
}
    hacerSonido = () =>{
        console.log("el animal hace un sonido")
   }
   
}

class Perro extends Animal {

    constructor(nombre,edad,raza){
        super(nombre,edad)
        this.raza = raza
    }


    hacerSonido = () => {
        console.log("El perro ladra: ¡Guau!")

    } 

    
    informacion(){
        console.log(
        `         **************************************
          Nombre: ${this.nombre}                    
          Edad: ${this.edad}  
          Raza: ${this.raza}              
                                             
         **************************************`)
        this.hacerSonido()
     }
    
}

let perroSinSangre = new Perro("Pirulai","Con una pata en el mas alla","Se cree pincher")

perroSinSangre.informacion()

