const { sum, range, zip } = require('lodash');

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc10.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(Number)

    main(data);
    main2(data);
});

function main(data) {
    const sorted = [0, ...data.slice().sort((a, b) => a - b), 150 /* max + 3 */];
    const diffs = zip(sorted.slice(0, -1), sorted.slice(1)).map(([a, b]) => b - a);

    const oneJoltCount = diffs.filter(n => n === 1).length;
    const threeJoltCount = diffs.filter(n => n === 3).length;

    log(oneJoltCount * threeJoltCount);
}
                
const cache = new Map();
function computePaths(data) {
    if(cache.has(data[0])) return cache.get(data[0]);
    if (data.length === 1) return 1;
    const nexts = data.slice(1, 4);
    const childrenPathsCount = nexts
        .filter(x => x - data[0] <= 3)
        .map((_, i) => computePaths(data.slice(i + 1)));
    const result = sum(childrenPathsCount);
    cache.set(data[0], result);
    return result;
}

function main2(data) {
    const sorted = [0, ...data.slice().sort((a, b) => a - b)];
    const result = computePaths(sorted);

    log(result);
}
