const div = (x,y) => {
    return x/y;
}
console.log(div(12,6));

const add = (string, char) => {
    return `${string}${char}`
}

console.log(add('Persona', 's'));

const addArray= (array, element) => {
    array.push(element);
    return array;
}

console.log(addArray(['Monitor', 'Mouse', 'Teclado'], 'CPU'));

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log('bill', bill([10,12,13], 0.18));