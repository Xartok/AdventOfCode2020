const log = (arg) => console.log(arg) && arg;

require('fs').readFile('./aoc12.txt', 'utf8', (_, content) => {
    const data = content
        .split('\n')
        .map(x => [x[0], +x.slice(1)])

    main(data);
    main2(data);
});

function mod(x, n) {
    return ((x % n) + n) % n;
}

const directions = ['N', 'E', 'S', 'W'];

function main(data) {
    const [north, east] = data.reduce(([x, y, currentDirection], [direction, unit]) => {
        switch(direction) {
            case 'L':
                currentDirection = directions[mod(directions.indexOf(currentDirection) - unit / 90, 4)];
                break;
            case 'R':
                currentDirection = directions[mod(directions.indexOf(currentDirection) + unit / 90, 4)];
                break;
            case 'F':
                switch(currentDirection) {
                    case 'N':
                        y += unit;
                        break;
                    case 'S':
                        y -= unit;
                        break;
                    case 'E':
                        x += unit;
                        break;
                    case 'W':
                        x -= unit;
                        break;
                }
                break;
            case 'N':
                y += unit;
                break;
            case 'S':
                y -= unit;
                break;
            case 'E':
                x += unit;
                break;
            case 'W':
                x -= unit;
                break;
        }
        return [x, y, currentDirection];
    }, [0, 0, 'E']);

    log(Math.abs(north) + Math.abs(east));
}

function rotateWaypoint(translateX, translateY, angle) {
    angle = mod(angle, 360);
    switch (angle) {
        case 90: return [translateY, -translateX];
        case 180: return [-translateX, -translateY];
        case 270: return [-translateY, translateX];
        case 0: return [translateX, translateY];
    }
}

function main2(data) {
    const [north, east] = data.reduce(([x, y, translateX, translateY], [direction, unit]) => {
        switch(direction) {
            case 'L':
                [translateX, translateY] = rotateWaypoint(translateX, translateY, -unit);
                break;
            case 'R':
                [translateX, translateY] = rotateWaypoint(translateX, translateY, unit);
                break;
            case 'F':
                x += unit * translateX;
                y += unit * translateY;
                break;
            case 'N':
                translateY += unit;
                break;
            case 'S':
                translateY -= unit;
                break;
            case 'E':
                translateX += unit;
                break;
            case 'W':
                translateX -= unit;
                break;
        }
        return [x, y, translateX, translateY];
    }, [0, 0, 10, 1]);

    log(Math.abs(north) + Math.abs(east));
}
