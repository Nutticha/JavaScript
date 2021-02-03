class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log("This is " + this._name + " !");
    }

    // A static method
    static brak(){
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

const myDog1 = new Dog("Gemjie");
myDog1.introduce();

// Calling the static method
Dog.brak();