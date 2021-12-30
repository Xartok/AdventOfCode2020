const { sum } = require('lodash');

const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc7.txt', 'utf8', (_, content) => {
    const data = content
        .split('\.\n')
        .map(line => line.split(' bags contain '))
        .map(([parent, str]) => [parent, str.replace(/no /, '0 ')])
        .map(([parent, str]) => [
            parent,
            str
                .replace(/ (bags|bag)/g, '')
                .split(', ')
                .map(str => str.match(/^(\d+) (.+)$/).slice(1, 3))
        ])
        .map(([parent, children]) => ({color: parent, children: children.map(([qty, color]) => ({qty, color}))}));

    main(data);
    main2(data);
});

function hasShinyGold(tree, data) {
    // no other bag
    if(tree.children[0].qty == 0) return false;

    // direct
    if(tree.children.some(c => c.color === 'shiny gold')) return true;
    
    // indirect
    return tree.children.map(c => data.find(t => t.color === c.color)).some(t => hasShinyGold(t, data));
}

function main(data) {
    const result = data
        .filter(tree => hasShinyGold(tree, data))
        .length;

    log(result);
}

function countInnerBags(tree, data) {
    // no other bag
    if(tree.children[0].qty == 0) return 0;
    
    return sum(
        tree.children
            .map(c => {
                const cTree = data.find(t => t.color === c.color);
                return c.qty * (1 + countInnerBags(cTree, data));
            })
    );
}

function main2(data) {
    const bag = data[374];
    const result = countInnerBags(bag, data);

    log(result);
}