function cats(arr) {

    let catInfo

    class Cat {
        constructor(name, age) {

            this.name = name,
            this.age = age
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for(let i = 0;i < arr.length; i++) {
        let currentCat = arr[i].split(" ");
        let name = currentCat[0];
        let age = currentCat[1];
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])