const {inRange} = require("lodash");
const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc17.txt', 'utf8', (_, content) => {
    const initialSlice = content
        .split('\n')
        .slice(0, -1) // strip ending line
        .map(x => [...x]);

    main(data);
    main2(data);
});

function getNeighbours() {
    
}

function isActive(cube) {
    return false;
}

function getNewState() {
    const neighbours = getNeighbours();
    const activeNeighbours = neighbours.filter(isActive);
    if(isActive(cube)) {
        if(inRange(activeNeighbours.length, 2, 4)) {
            return '#';
        }
    } else {
        if(activeNeighbours.length === 3) {
            return '#';
        }
    }
    return '.';
}

function main(data) {

}

function main2(data) {}
