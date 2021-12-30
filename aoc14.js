const { zip, sum } = require('lodash');

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc14.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .slice(0, -1) // strip ending line
        .reduce((acc, line) => {
            if(line.startsWith('mask')) {
                acc.push({type: 'mask', value: line.split(' = ')[1]})
            }
            else {
                const {address, value} = /mem\[(?<address>\d+)\] = (?<value>\d+)/.exec(line).groups;
                acc.push({type: 'memory', binaryAddress: (+address).toString(2).padStart(36, '0'), address: +address, value: +value });
            }
            return acc;
        }, [])

    main(data);
    main2(data);
});

function main(data) {
    let currentMask;
    const addressValueMap = new Map();
    for(let i = 0; i < data.length; i++) {
        switch (data[i].type) {
            case 'mask':
                currentMask = data[i].value;
                break;
            case 'memory':
                const binValue = data[i].value.toString(2).padStart(36, 0);
                const maskedValue = zip([...binValue], [...currentMask]).map(([v, m]) => m === 'X' ? v : m).join``;
                const decimalValue = parseInt(maskedValue, 2);
                addressValueMap.set(data[i].address, decimalValue);
                break;
        }
    }
    const result = sum([...addressValueMap.values()]);
    log(result);
}

// idea generator
function getAddresses(maskedAddress) {
    if(maskedAddress.length === 0) {
        return [];
    }

    const maskedAddressRest = maskedAddress.slice(1);
    const nextMaskedAddresses = getAddresses(maskedAddressRest);
    if(maskedAddress[0] === 'X') {
        if(nextMaskedAddresses.length === 0) {
            return ['0', '1'];
        }
        else {
            return nextMaskedAddresses.flatMap(m => [
                '0'.concat(...m),
                '1'.concat(...m),
            ]);
        }
    }
    else {
        if(nextMaskedAddresses.length === 0) {
            return [maskedAddress[0]];
        }
        else {
            return nextMaskedAddresses.map(m => maskedAddress[0].concat(...m));
        }
    }
}

function applyMask(binaryAddressArray, mask) {
    return zip(binaryAddressArray, mask).map(([v, m]) => m === '0' ? v : m).join``;
}

function main2(data) {
    let currentMask;
    const addressValueMap = new Map();
    for(let i = 0; i < data.length; i++) {
        switch (data[i].type) {
            case 'mask':
                currentMask = data[i].value;
                break;
            case 'memory':
                const binaryAddressArray = [...data[i].binaryAddress];
                const maskedAddress = applyMask(binaryAddressArray, [...currentMask]);
                const allAddresses = getAddresses(maskedAddress);
                for (const address of allAddresses) {
                    addressValueMap.set(address, data[i].value);
                }
                break;
        }
    }
    const result = sum([...addressValueMap.values()]);
    log(result);
}