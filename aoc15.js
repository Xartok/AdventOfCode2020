const {last} = require("lodash");

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc15.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .slice(0, -1) // strip ending line
        .map(x => x.split`,`.map(Number))[0];

    // main(data);
    main2(data);
});

function main(numbers, n = 2020) {
    const map = new Map(numbers.map((x, i) => [x, [i + 1, -1]]));
    let lastNumberSpoken = last(numbers);
    for (let i = numbers.length; i < n; i++) {
        const turnNumber = i + 1;
        const [lastTurnNumberAppeared, turnItAppearedBefore] = map.get(lastNumberSpoken);
        const lastNumberSpokenAppearedForTheFirstTime = turnItAppearedBefore === -1;

        let newNumberSpoken;
        if (lastNumberSpokenAppearedForTheFirstTime) {
            newNumberSpoken = 0;
        } else {
            newNumberSpoken = lastTurnNumberAppeared - turnItAppearedBefore;
        }

        const [lastTurnNewNumberAppeared, turnNewNumberAppearedBefore] =
            map.has(newNumberSpoken) ? [turnNumber, map.get(newNumberSpoken)[0]] : [turnNumber, -1];
        map.set(newNumberSpoken, [lastTurnNewNumberAppeared, turnNewNumberAppearedBefore]);

        lastNumberSpoken = newNumberSpoken;
    }
    log(lastNumberSpoken);
}

function main2(numbers) {
    main(numbers, 30000000);
}
