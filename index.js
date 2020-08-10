/////////////// ENTRADA ///////////////

// Lista con los datos ingresados.
var inputList = [
  ['Peugeot', '206', 200000, 4],
  ['Honda', 'Titan', 60000, '125c'],
  ['Peugeot', '208', 250000, 5],
  ['Yamaha', 'YBR', 80500.5, '160c']
];


/////////////// CLASES ///////////////

// Crea una clase primaria para todos los vehículos.
class Vehicle {
  constructor (marca, modelo, precio) {
    this.brand = marca;
    this.model = modelo;
    this.price = precio;
  }
}

// Crea una clase secundaria para los autos.
class Car extends Vehicle {
  constructor (marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this.doors = puertas;
  }
}

// Crea otra clase secundaria para las motos.
class Motorcycle extends Vehicle {
  constructor (marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.capacity = cilindrada;
  }
}


/////////////// FUNCIONES ///////////////

// Esta función instancia las clases construyendo una lista de objetos a partir de la lista de datos ingresados.
// Toma como argumento la lista de datos ingresados.
function makeVehicleList(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i][3] === 'number') {
      result.push(new Car(list[i][0], list[i][1], list[i][2], list[i][3]))
    }
    else {
      result.push(new Motorcycle(list[i][0], list[i][1], list[i][2], list[i][3]))
    }
  };
  return result; 
}

// Esta función retorna el vehículo con el precio más alto, buscando el valor más alto para la propiedad 'price' en toda la lista de objetos.
// Toma como argumento la lista de objetos donde buscar.
function findMaxPrice(list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i].price > max.price) {
      max = list[i];
    }
  };
  return max;
}

// Esta función retorna el vehículo con el precio más bajo, buscando el valor más bajo para la propiedad 'price' en toda la lista de objetos.
// Toma como argumento la lista de objetos donde buscar.
function findMinPrice(list) {
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i].price < min.price) {
      min = list[i];
    }
  };
  return min;
}

// Esta función retorna el objeto cuya propiedad 'model' incluye en su valor dterminado caracter pasado como argumento.
// Toma como argumentos el caracter buscado y la lista de objetos donde buscar.
function findLetterInModel(letter, list) {
  let result = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].model.includes(letter)) {
      result = list[i];
    }
  };
  return result;
}


// Con estas variables se llaman las funciones con los argumentos pertinentes para ejecutarlas.
var vehicleList = makeVehicleList(inputList);
var maxPrice = findMaxPrice(vehicleList);
var minPrice = findMinPrice(vehicleList);
var letterY = findLetterInModel('Y', vehicleList);


/////////////// SALIDA ///////////////

// En esta sección comienza el algoritmo de impresión para la salida de resultados por consola.
for (let i = 0; i < vehicleList.length; i++) {
  if (vehicleList[i] instanceof Car) {
    console.log('Marca: %s // Modelo: %s // Puertas: %i // Precio: %s', vehicleList[i].brand, vehicleList[i].model, vehicleList[i].doors, vehicleList[i].price.toLocaleString("es-AR", {style:"currency", currency: "ARS"}));
  }
  else {
    console.log('Marca: %s // Modelo: %s // Cilindrada: %s // Precio: %s', vehicleList[i].brand, vehicleList[i].model, vehicleList[i].capacity, vehicleList[i].price.toLocaleString("es-AR", {style:"currency", currency: "ARS"}))
  }
}
console.log('='.repeat(29))
console.log('Vehículo más caro: %s %s', maxPrice.brand, maxPrice.model)
console.log('Vehículo más barato: %s %s', minPrice.brand, minPrice.model)
console.log("Vehículo que contiene en el modelo la letra 'Y': %s %s %s", letterY.brand, letterY.model, letterY.price.toLocaleString("es-AR", {style:"currency", currency: "ARS"}))

// Esta subsección implementa el ejercicio extra.
vehicleList.sort((a, b) => b.price - a.price);

console.log('='.repeat(29))
console.log('Vehículos ordenados por precio de mayor a menor:')
for (let i = 0; i < vehicleList.length; i++) {
  console.log('%s %s', vehicleList[i].brand, vehicleList[i].model)
}
