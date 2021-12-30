const { sum, uniq, intersection } = require('lodash');
const log = (...args) => console.log(...args) && args;

require('fs').readFile('./aoc6.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n\n')
        .map(line => ({answers: line.split('\n')}));

    main(data);
    main2(data);
});

function main(data) {
    const result = sum(data.map(group => uniq([...group.answers.join``]).length));

    log(result);
}

function main2(data) {
    const result = sum(data.map(group => intersection(...group.answers.map(x => [...x])).length));

    log(result);
}