// 1 masala

let getAvarage = ([1, 2, 3]);

getAvarage = getAvarage.toString();

let a = getAvarage.charAt(2);

console.log(a)

// 2 masala

let invert = (array) => {
    let newarr = []
    for (let i = 0; i <= array.length; i++) {
        array[i] === 0 ? newarr.push(array[i]) : newarr.push(-array[i])
    }

    return newarr;
}

let result = invert ([1, 2, 3])
let result2 = invert ([-1, 2, -3, 0, -5])

console.log(result)
console.log(result2)

// 3 masala

let getbonus = (n) => {
    if (n === true) {
        return '5000'
    } else {
        return '1000'
    }
}

let t = getbonus (true);
let f = getbonus (false);

console.log(t, f)

// 5 masala

let enough = (a, b, c) => {
    return a - (b + c)
}

let result3 = enough(10, 5, 5);

console.log(result3);

let enough2 = (a, b, c) => {
    return a - (b + c)
}

let result4 = enough2(12, 5, 10);

console.log(-result4);

// 6 masala

let formatmoney = (39.30)

