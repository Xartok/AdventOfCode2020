const { sortBy, sum } = require("lodash");
const nearley = require("nearley");
const log = arg => console.log(arg) && arg;
const { execSync } = require('child_process');
const { writeFileSync, readFileSync } = require('fs');

function parse() {
    const content = readFileSync('./aoc19.txt', 'utf8');
    let [rules, messages] = content
        .split('\n\n');
    rules = rules.split`\n`;
    rules = sortBy(rules, rule => rule.substring(0, rule.indexOf(':')));
    rules = rules.map(rule => rule.replace(/(\d+)/g, 'rule_$1'));
    rules = rules.map(rule => rule.replace(/:/g, ' ->'));
    messages = messages.slice(0, -1).split`\n`;

    return { rules, messages };
}

const parsedInputs = parse();
main(parsedInputs);
main2(parsedInputs);

function isMessageValid(grammar) {
    return message => {
        const parser = new nearley.Parser(grammar);
        try {
            parser.feed(message);
            return parser.results.length !== 0;
        }
        catch(e) {
            return false;
        }
    };
}

function main({rules, messages}) {
    rules = rules.map(rule => rule.replace(/:/g, ' ->'));
    writeFileSync(`./aoc19/grammar1.ne`, rules.join`\n`);
    execSync('nearleyc ./aoc19/grammar1.ne > ./aoc19/grammar1.js');
    const grammar = nearley.Grammar.fromCompiled(require('./aoc19/grammar1.js'));
    const result = sum(messages.map(isMessageValid(grammar)));
    log(result);
}

function main2({rules, messages}) {
    rules = rules.map(
        rule => rule
            .replace('rule_8 -> rule_42', 'rule_8 -> rule_42 | rule_42 rule_8')
            .replace('rule_11 -> rule_42 rule_31', 'rule_11 -> rule_42 rule_31 | rule_42 rule_11 rule_31')
    );
    writeFileSync(`./aoc19/grammar2.ne`, rules.join`\n`);
    execSync('nearleyc ./aoc19/grammar2.ne > ./aoc19/grammar2.js');
    const grammar = nearley.Grammar.fromCompiled(require('./aoc19/grammar2.js'));
    const result = sum(messages.map(isMessageValid(grammar)));
    log(result);
}
