const { negate, isEqual, isNil, flatten } = require('lodash');

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc11.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(row => [...row]);

    main(data);
    main2(data);
});

function adjacentSeats(x, y, rows) {
    const seats = [rows[y][x - 1], rows[y][x + 1]];
    if(y > 0) seats.push(...[rows[y - 1][x - 1], rows[y - 1][x], rows[y - 1][x + 1]]);
    if(y < rows.length - 1) seats.push(...[rows[y + 1][x - 1], rows[y + 1][x], rows[y + 1][x + 1]]);
    return seats.filter(negate(isNil));
}

function getUpdatedSeat(x, y, rows) {
    if(rows[y][x] === 'L') {
        if(adjacentSeats(x, y, rows).every(seat => seat === '.' || seat === 'L')) {
            return '#';
        }
    } else if(rows[y][x] === '#') {
        if(adjacentSeats(x, y, rows).filter(seat => seat === '#').length >= 4) {
            return 'L';
        }
    }
    return rows[y][x];
}

function countOccupiedSeats(rows) {
    return flatten(rows).map(seat => seat === '#').filter(Boolean).length;
}

function main(rows) {
    const height = rows.length;
    const width = rows[0].length;
    let newRows = rows;
    let oldRows;

    do {
        oldRows = newRows.slice().map(row => row.slice());
        newRows = [];
        for (let y = 0; y < height; y++) {
            newRows.push([]);
            for (let x = 0; x < width; x++) {
                newRows[y].push(getUpdatedSeat(x, y, oldRows))
            }
        }
    } while(flatten(oldRows).join`` !== flatten(newRows).join``);

    log(countOccupiedSeats(newRows));
}

function adjacentSeats2(x, y, rows) {
    const seats = [];
    let i = x, j = y;
    // left
    while (rows[j][--i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // right
    while (rows[j][++i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // up
    while (rows[--j]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // down
    while (rows[++j]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // upper left
    while ((rows[--j]??[])[--i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // upper right
    while ((rows[--j]??[])[++i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // down left
    while ((rows[++j]??[])[--i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }
    i = x, j = y;
    // down right
    while ((rows[++j]??[])[++i]) {
        if(rows[j][i] === '#' || rows[j][i] === 'L') {
            seats.push(rows[j][i]);
            break;
        }
    }

    return seats;
}

function getUpdatedSeat2(x, y, rows) {
    if(rows[y][x] === 'L') {
        if(adjacentSeats2(x, y, rows).every(seat => seat === '.' || seat === 'L')) {
            return '#';
        }
    } else if(rows[y][x] === '#') {
        if(adjacentSeats2(x, y, rows).filter(seat => seat === '#').length >= 5) {
            return 'L';
        }
    }
    return rows[y][x];
}

function main2(rows) {
    //log(adjacentSeats2(3, 4, rows));
    const height = rows.length;
    const width = rows[0].length;
    let newRows = rows;
    let oldRows;

    do {
        oldRows = newRows.slice().map(row => row.slice());
        newRows = [];
        for (let y = 0; y < height; y++) {
            newRows.push([]);
            for (let x = 0; x < width; x++) {
                newRows[y].push(getUpdatedSeat2(x, y, oldRows))
            }
        }
    } while(flatten(oldRows).join`` !== flatten(newRows).join``);

    log(countOccupiedSeats(newRows));
}
