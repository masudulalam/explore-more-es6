class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sleep () {
        console.log(`sleeping now ${this.name}`);
    }
};

const abdullah = new Person ('Abdullah', 5);
console.log(abdullah);
abdullah.sleep();

const umama = new Person ('Umama', 40); 
    console.log(umama);
    umama.sleep();
