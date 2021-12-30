const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc8.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(x => x.split` `)
        .map(([op, value]) => ({op, value: +value}));

    main(data);
    main2(data);
});

function getAccValue(data) {
    const executions = data.reduce((acc, _, index) => {
        acc[index] = false;
        return acc;
    }, []);
    let acc = 0, curIndex = 0, endIsReached = false;

    while (!executions[curIndex]) {
        if (curIndex >= data.length) {
            endIsReached = true;
            break;
        }
        executions[curIndex] = true;
        const {op, value} = data[curIndex];
        switch (op) {
            case 'jmp':
                curIndex += value;
                break;
            case 'acc':
                acc += value;
                curIndex += 1;
                break;
            case 'nop':
                curIndex += 1;
                break;
        }
    }

    if (endIsReached) {
        return {endReached: true, acc};
    } else {
        return {endReached: false, acc};
    }
}

function main(data) {
    const result = getAccValue(data).acc;

    log(result);
}

function main2(data) {
    let accValue, result;
    for (const [index, instruction] of data.entries()) {
        if (instruction.op === 'nop') {
            accValue = getAccValue([...data.slice(0, index), {op: 'jmp', value: instruction.value}, ...data.slice(index + 1)]);
        } else if (instruction.op === 'jmp') {
            accValue = getAccValue([...data.slice(0, index), {op: 'nop', value: instruction.value}, ...data.slice(index + 1)]);
        } else {
            continue;
        }
        if (accValue.endReached) {
            result = accValue.acc;
            break;
        }
    }

    log(result);
}