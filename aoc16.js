const {range, inRange, sum, remove} = require("lodash");
const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc16.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .slice(0, -1) // strip ending line;

    // const rules = data.slice(0, 3).map(line => {
    const rules = data.slice(0, 20).map(line => {
        const {ruleName, firstRange, secondRange} = /(?<ruleName>.+): (?<firstRange>\d+-\d+) or (?<secondRange>\d+-\d+)/.exec(line).groups;
        return {ruleName, firstRange: firstRange.split`-`.map(Number), secondRange: secondRange.split`-`.map(Number)};
    });

    // const nearbyTickets = data.slice(8).map(line => line.split`,`.map(Number));
    const nearbyTickets = data.slice(25).map(line => line.split`,`.map(Number));

    // const myTicket = data[5].split`,`.map(Number);
    const myTicket = data[22].split`,`.map(Number);

    const parsedData = {rules, nearbyTickets, myTicket};

    // main(parsedData);
    main2(parsedData);
});

function isFieldInvalidForEveryRules(rules) {
    return function(field) {
        return rules.every(({firstRange, secondRange}) =>
            !inRange(field, firstRange[0], firstRange[1] + 1)
            && !inRange(field, secondRange[0], secondRange[1] + 1));
    };
}

function main(data) {
    const invalidFieldsByTicket = data.nearbyTickets.map(ticket => ticket.filter(isFieldInvalidForEveryRules(data.rules)));
    const allInvalidFields = invalidFieldsByTicket.flat();
    log(sum(allInvalidFields));
}

function isFieldValidForRule({firstRange, secondRange}, field) {
    return inRange(field, firstRange[0], firstRange[1] + 1)
        || inRange(field, secondRange[0], secondRange[1] + 1);
}

function x(rules, tickets) {
    // const possibleFieldIndicesByRule = new Map(rules.map(rule => [rule, range(0, 3)]));
    const possibleFieldIndicesByRule = new Map(rules.map(rule => [rule, range(0, 20)]));
    for (const [rule, possibleFieldIndicesForRule] of possibleFieldIndicesByRule.entries()) {
        caca:
        for (const index of possibleFieldIndicesForRule.slice()) {
            console.log(rule.ruleName, index)
            for (const ticket of tickets) {
                if(!isFieldValidForRule(rule, ticket[index])) {
                    console.log('inv')
                    remove(possibleFieldIndicesByRule.get(rule), x => x === index);
                    continue caca;
                }
            }
        }
    }
    log(
        [...possibleFieldIndicesByRule.entries()]
            .map(
                ([{ruleName}, possibleFieldIndicesForRule]) => `${ruleName}:${possibleFieldIndicesForRule.join`,`}`
            )
    );
}

function main2(data) {
    const validTickets = data.nearbyTickets.filter(ticket => !ticket.some(isFieldInvalidForEveryRules(data.rules)));
    validTickets.unshift(data.myTicket);
    x(data.rules, validTickets);
}
