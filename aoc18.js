const {isNumber} = require("lodash");
const {sum} = require("lodash");
const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc18.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .slice(0, -1) // strip ending line
        .map(expression => expression)

    main(data);
    main2(data);
});

function parseLine(line, startIndex = 0) {
    for(let i = startIndex; i < line.length; i++) {
        if(isNumber(line[i])) {

        }
        else if(isOperator(line[i])) {

        }
        else if(isOpeningParenthese(line[i])) {

        }
        else if(isClosingParenthese(line[i])) {

        }
    }
}

function main(data) {
    log(sum(data.map(parseLine)));
}

// (7 * 5 * 6 + (9 * 8 + 3 * 3 + 5) + 7) * (6 + 3 * 9) + 6 + 7 + (7 * 5) * 4
// (4 + 9 + (8 * 2) + 5) * 8 + (3 + 2 * 3 * 7 * (7 * 4 * 5) * 9) * 2
// 3 + 7 + (9 + 6 + 4 * 7 * 3 + 5) * 9

function main2(data) {}
