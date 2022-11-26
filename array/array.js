// const array = ['Diego', 'Karen', 'Oscar'];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push (item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop (){
    let ultimoItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length --;
    return ultimoItem; // es para saber cual fue el ultimo elemento que se borro.
  }s
  
  //vamos a crear otro elemento delete, distinto al Key delete
  delete (index){
    let item = this.data[index];
    this.shifIndex(index)

    return item;
  };
  shifIndex(index){
    for (let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1]
    this.length --;
  }
  //Voy agregar el elemento en primer lugar
  //Antes voy a correr todos los elementos un indice mas y recien lo ingreso primero al nuevo elemento
  unshift(item) {
    for(let i = this.length - 1; i > 0; i--){
      this.data[i + 1] = this.data[i];
    };
    this.data[0]= item;
    this.length++
    return this.data;
  };
  // eliminar el primer elemento de un array
  shift(){
    let primerElemento = this.data[0];
    this.shifIndex(0);
    return primerElemento;
  };

  //Voy a crear un metodo que me permita buscar un elemento en el array
  // y me devuelva el indice donde se encuentra
  indexOf(item){
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === item){
        return i;
      }
    }
    return -1;
  }
};


const myArray = new MyArray();

/* aca string son inmutables. No se cambia o 
tendriamos que tomar como nuevos elementos */

const saludo = 'Hola'; // string

/* en memoria queda guardada como un array
0: H
1: o
2: l
3: a
*/

