require('fs').readFile('./aoc5.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(line => ({first: line.slice(0, 7), second: line.slice(7)}));

    // main(data);
    main2(data);
});

function findRow(str) {
    const finalRange = [...str].slice(0, -1).reduce(([min, max], l) => {
        const diff = Math.floor((max - min) / 2);
        if(l === 'F') {
            return [min, min + diff];
        } else if(l === 'B') {
            return [max - diff, max];
        }
    }, [0, 127]);

    return str[str.length - 1] === 'F' ? finalRange[0] : finalRange[1];
}

function findCol(str) {
    const finalRange = [...str].slice(0, -1).reduce(([min, max], l) => {
        const diff = Math.floor((max - min) / 2);
        if(l === 'L') {
            return [min, min + diff];
        } else if(l === 'R') {
            return [max - diff, max];
        }
    }, [0, 7]);
    
    return str[str.length - 1] === 'L' ? finalRange[0] : finalRange[1];
}

function getId (row, col) {
    return row * 8 + col;
}

function main(data) {
    const result = data.map(({first, second}) => getId(findRow(first), findCol(second)));
    console.log(Math.max(...result));

    //console.log([findRow('BFFFBBF'), findCol('RRR'), getId(findRow('BFFFBBF'), findCol('RRR'))]);
    //console.log([findRow('FFFBBBF'), findCol('RRR'), getId(findRow('FFFBBBF'), findCol('RRR'))]);
    //console.log([findRow('BBFFBBF'), findCol('RLL'), getId(findRow('BBFFBBF'), findCol('RLL'))]);
}

function main2(data) {
    const result = data.map(({first, second}) => [findRow(first), findCol(second)]);

    //console.log(result.map(([r, c]) => String(r).padStart(3, '0') + ',' + String(c)).sort().join`\n`);
    console.log(result.map(x => getId(...x)).map(x => String(x).padStart(3, '0')).sort().join`\n`);
}