const { sum, range } = require('lodash');

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc9.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(Number)

    main(data);
    main2(data);
});

function isValid(i, data, shift) {
    const previous = data.slice(i - shift, i);
    for (const [curIndex, value] of previous.entries()) {
        const rest = [...previous.slice(0, curIndex), ...previous.slice(curIndex + 1)];
        if (rest.includes(data[i] - value)) return true;
    }
    return false;
}

function main(data) {
    const result = data.slice(25).find((_, i) => !isValid(i + 25, data, 25));

    log(result);
}

function* sumNDigits(n, data) {
    for (const [i, x] of data.slice(0, -1).entries()) {
        yield sum(data.slice(i, i + n));
    }
}

function main2(data) {
    const n = 466456641;
    const r = [...sumNDigits(17, data.slice(0, 550))].map(x => n - x);
    const i = r.findIndex(p => p === 0);
    const r = range(2, 20, 1).flatMap(p => [[...sumNDigits(p, data.slice(0, 550))].map(x => n - x), p]);
    log(r.join`\n`)
    //log(Math.min(...data.slice(i, i + 17)) + Math.max(...data.slice(i, i + 17)));
}