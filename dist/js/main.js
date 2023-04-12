///////////////////
// url = "https://dummyjson.com/products/1"
// url1 = "https://dummyjson.com/products/2"
// url2 = "https://dummyjson.com/products/3"
// let hi = async () => {
//     try {
//         let results = await Promise.all([
//             fetch(url),
//             fetch(url1),
//             fetch(url2)
//         ])
//         let data = await results.map(result => result.json())
//         let finalData = await Promise.all(data)
//         return finalData
//     } catch (error) {
//         console.log(error);
//     }
// }
// (async () => {
//     let data = await hi()
//     console.log(data);
// })();
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//////
// var went = true;
// var going = went ? "yes" : "no"
// function getNum(num) {
//     let str = num.toString()
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i + 1] !== str[i]) {
//             arr.push(1, str[i])
//         } else if (str[i + 1] === str[i] && str[i + 2] === str[i]) {
//             arr.push(3, str[i])
//             i += 2
//         } else if (str[i + 1] === str[i]) {
//             arr.push(2, str[i])
//             i += 1
//         }
//     }
//     console.log(arr)
// }
// getNum(24666)


// (function () {
//     var a = b = 5;
// })();

// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     getAllProperties() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender
//         }
//     }
// }
// let personOne = new Person("Ahmed", 15, "male")
// let personTwo = new Person("Omar", 18, "male")
// let personThree = new Person("Asmaa", 18, "Female")

// class Students extends Person {
//     constructor(name, age, gender) {
//         super(name, age, gender)
//     }
//     getRes() {
//         console.log(this.name, this.age, this.gender)
//     }
//     getAllProperties() {
//         return {
//             ...super.getAllProperties(),
//             name: this.name,
//             age: this.age,
//             gender: this.gender
//         }
//     }
// }
// const res = new Students("Sara", 17, "Female")
// console.log(res.getAllProperties())




class Person {
    #privateProperty = 'private'; // private property

    constructor(name) {
        this.name = name;
    }

    #privateMethod() { // private method
        console.log('This is a private method.');
    }

    publicMethod() { // public method
        console.log('This is a public method.');
        this.#privateMethod(); // calling the private method
    }
}

// console.log(b);
// // function ArrayChallenge(num) {
//     let str = num.toString();
//     let result = "";
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             result += count + str[i];
//             count = 1;
//         }
//     }
//     console.log(result)
// }
// ArrayChallenge(1211)

const randomColors = () => {
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColors())







//get canvas from html
function draw() {
    const canvas = document.getElementById("hi");
    canvas.width = window.innerWidth
    canvas.style.background = "darkblue"
    const ctx = canvas.getContext('2d');

    //circle 
    // start new path 
    for (let i = 0; i < 50; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        let minSize = 30;
        let maxSize = 50;
        let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI, false)
        // ctx.strokeStyle = randomColors()
        ctx.fillStyle = randomColors()
        ctx.fill();
        ctx.stroke();
    }
}
draw()