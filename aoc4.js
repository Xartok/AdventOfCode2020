const { find, map } = require('lodash');

require('fs').readFile('./aoc4.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n\n')
        .map(line => line.replace(/\n/g, ' '))
        .map(line => line.split(' '))
        .map(kvStrings => kvStrings.map(kv => {
            const [key, value] = kv.split(':');
            return { key, value };
        }));

    main(data);
    main2(data);
});

function main(data) {
    const result = data
        .map(passport => {
            const keys = map(passport, 'key').filter(key => key !== 'cid');
            return keys.length === 7;
        })
        .filter(Boolean).length;

    console.log(result);
}

function main2(data) {
    const result = data
        .map(passport => {
            const keys = map(passport, 'key').filter(key => key !== 'cid');
            if (keys.length !== 7) return false;
            return keys.every(key => {
                const value = find(passport, { key }).value;
                switch (key) {
                    case 'byr':
                        return /^\d{4}$/ && 1920 <= +value && +value <= 2002;
                    case 'iyr':
                        return /^\d{4}$/ && 2010 <= +value && +value <= 2020;
                    case 'eyr':
                        return /^\d{4}$/ && 2020 <= +value && +value <= 2030;
                    case 'hgt':
                        const parsed = value.match(/^(\d+)(cm|in)$/);
                        if (!parsed) return false;
                        const [height, unit] = parsed.slice(1, 3);
                        if (unit === 'cm') {
                            return 150 <= +height && +height <= 193;
                        } else if (unit === 'in') {
                            return 59 <= +height && +height <= 76;
                        } else { return false; }
                    case 'hcl':
                        return /^#[0-9a-f]{6}$/.test(value);
                    case 'ecl':
                        return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
                    case 'pid':
                        return /^[0-9]{9}$/.test(value);
                }
            })
        })
        .filter(Boolean).length;

    console.log(result);
}