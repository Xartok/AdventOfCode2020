require('fs').readFile('./aoc2.txt', 'utf8', (_, content) => {
    const data = content.split('\n');
    main(data);
    main2(data);
});

function main(data) {
    const result = data
        .map(x => x.split(': '))
        .map(([rule, password]) => {
            const [minMax, l] = rule.split(" ");
            const [min, max] = minMax.split("-");
            const occurrences = password.match(new RegExp(l, 'g'))?.length ?? 0;
            return min <= occurrences && occurrences <= max;
        })
        .reduce((acc, c) => acc += +c, 0);
    console.log(result);
}

function main2(data) {
    const result = data
        .map(x => x.split(': '))
        .map(([rule, password]) => {
            const [minMax, l] = rule.split(" ");
            const [min, max] = minMax.split("-");
            password = " " + password;
            return Number(password[min] === l) + Number(password[max] === l) === 1;
        })
        .reduce((acc, c) => acc += +c, 0);
    console.log(result);
}