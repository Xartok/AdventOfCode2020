require('fs').readFile('./aoc3.txt', 'utf8', (_, content) => {
    const data = content.split('\n');
    main(data);
    main2(data);
});

function getTreeEncounteredCount(right, down, data) {
    const width = data[0].length;
    let curElt = '.';
    let lineCursor = 0;
    let treeEncounteredCount = 0;
    for (let i = down; i < data.length; i += down) {
        lineCursor += right;
        curElt = data[i][lineCursor % width];
        if(curElt === '#') {
            treeEncounteredCount++;
        }
    }
    return treeEncounteredCount;
}

function main(data) {
    console.log(getTreeEncounteredCount(3, 1, data));
}

function main2(data) {
    console.log(
        getTreeEncounteredCount(1, 1, data)
        * getTreeEncounteredCount(3, 1, data)
        * getTreeEncounteredCount(5, 1, data)
        * getTreeEncounteredCount(7, 1, data)
        * getTreeEncounteredCount(1, 2, data)
    );
}