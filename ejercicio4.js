class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    obtenerDetalles() {
      console.log(`Empleado: ${this.nombre}, Salario: $${this.salario}`)
    }
  }
  
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario);
      this.departamento = departamento;
    }
  
    obtenerDetalles() {
      console.log( `${super.obtenerDetalles()}, Departamento: ${this.departamento}`)
    }
  }
  
  // Empleado
  const empleado1 = new Empleado("Juan", 50000);
  empleado1.obtenerDetalles()
  
  //Gerente
  const gerente1 = new Gerente("Ana", 70000, "Ventas");
  gerente1.obtenerDetalles() 
  