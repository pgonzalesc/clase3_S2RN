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