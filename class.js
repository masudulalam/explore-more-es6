const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 3, name: 'HP', price: 50000 },
    { id: 4, name: 'Mac', price: 100000 },
];

// similar many things to maintain using class 
// every class has two things: 1. some properties or attribute 2. method
class Product {
    country = 'Bangladesh';

    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    speak(talk) {
        console.log(`Talking about ${talk}`)
        }
};

const mac = new Product('Mac book', 60000);
// console.log(mac);
// mac.speak('purpose of life.');


class Teacher {
    constructor (name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture () {
        console.log('Sir is teaching math.');
    }
};

const taher = new Teacher ('Abu Taher', 'Mathematics');
console.log(taher);

const abdurRahman = new Teacher('Abdur Rahman', 'Quranul Kareem');
console.log(abdurRahman);
