const log = (arg) => console.log(arg) && arg;
const { readFileSync } = require('fs');

function parse() {
    const content = readFileSync('./aocNN.txt', 'utf8');
    let data = content
        .split('\n')
        .map(line => line);
    return data;
}

const parsedInputs = parse();
main(parsedInputs);
main2(parsedInputs);

function main(data) {}

function main2(data) {}
