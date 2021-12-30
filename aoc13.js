const { range, unary } = require('lodash');
const bignum = require('bignum');
const crt = require('nodejs-chinese-remainder').crt_bignum;

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc13.txt', 'utf8', (_, content) => {
    const [earliestDepartureTimestamp, buses] = content
        .split('\n');

    const data = {
        earliestDepartureTimestamp: +earliestDepartureTimestamp,
        busesInService: buses.split(',').filter(b => b !== 'x').map(Number),
    }

    main(data);
    //main2(buses.split(',').map(b => b === 'x' ? 0 : +b));
});

function main(data) {
    const departuresAfterTimestamp = data.busesInService.map(busId => [busId, Math.ceil(data.earliestDepartureTimestamp / busId) * busId]);
    const [busId, closestDiff] = departuresAfterTimestamp
    .map(([busId, timestamp]) => [busId, timestamp - data.earliestDepartureTimestamp])
    .reduce(([id, diff], [currentId, currentDiff]) => diff < currentDiff ? [id, diff] : [currentId, currentDiff]);

    log(busId * closestDiff);
}

function check(timestamps) {
    const minTimestamp = timestamps[0];
    return timestamps
        .map((t, i) => t === 0 ? minTimestamp : t - i)
        .every(t => t === minTimestamp);
}

function main3(data) {
    let currentTimestamp = data[0];
    let timestamps = [];
    do {
        timestamps = data.map(n => n === 0 ? 0 : Math.ceil(currentTimestamp++ / n) * n);
        //log(timestamps.join`,`)
    } while(!check(timestamps));
    log(timestamps[0]);
}

function main2(data) {
    log(check(data.map(n => n === 0 ? 0 : Math.ceil((4199 - 782 + 2 * 4199) / n) * n)));
    //const x = crt(
    //    data.map(n => n === 0 ? 1 : n).map(String).map(unary(bignum)),
    //    range(0, data.length - 1, 1).map(String).map(unary(bignum))
    //);
    //log(x.toString());
}