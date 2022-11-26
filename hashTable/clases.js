/** ¿Cómo funcionan las classes en Javascript?
 * Juan Jose Ortiz
 * https://www.youtube.com/watch?v=RYkg88wMrJ8
 */

function Person (name, age) {
    this.name = name;
    this.age = age;
}

class Person{
    constructor (name, age) {
        this.name = name;
        this.age = age; 
    }
    static getAge() {
        return this.age;
    }
}

class Human {
    constructor(country, language){
        this.country = country;
        this.language = language;
    }
    setCountry(newCountry){
        this.country = newCountry;
    }
    getLanguage() {
        return this.languaje;
    }
    static setLanguage(newLanguage) {
        this.languaje = newLanguage;

    }
}

const human1 = new Human('Argentina', 'Español');
const human2 = new Human('USA', 'English');
const human3 = new Human ('Brasil','Portugues');

console.log(human1);
console.log(human2);
console.log(human3);

console.log(human1.getLanguage());
console.log(human2.setCountry('Peru'));
console.log(human2);