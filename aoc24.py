import collections


def tile_neighbor(pos, move):
    x, y = pos
    if move == 'e':
        return x + 1, y
    if move == 'w':
        return x - 1, y
    if move == 'sw':
        return x - 1, y - 1
    if move == 'se':
        return x, y - 1
    if move == 'nw':
        return x, y + 1
    if move == 'ne':
        return x + 1, y + 1


def get_initially_active_tiles(move_list):
    active_tiles = set()
    for moves in move_list:
        pos = (0, 0)
        while moves:
            if moves[0] in 'sn':
                pos = tile_neighbor(pos, moves[:2])
                moves = moves[2:]
            else:
                pos = tile_neighbor(pos, moves[0])
                moves = moves[1:]
        if pos in active_tiles:
            active_tiles.remove(pos)
        else:
            active_tiles.add(pos)
    return active_tiles


def solve1():
    moves = parse()
    answer = len(get_initially_active_tiles(moves))
    print(f'The answer to part one is {answer}')


def all_neighbors(x, y):
    return [
        (x + 1, y),
        (x - 1, y),
        (x - 1, y - 1),
        (x, y - 1),
        (x, y + 1),
        (x + 1, y + 1)
    ]


def iterate(active_tiles):
    neighbor_counts = collections.defaultdict(int)
    for pos in active_tiles:
        for n in all_neighbors(*pos):
            neighbor_counts[n] += 1
    new_active = {
        pos
        for pos in active_tiles
        if neighbor_counts.pop(pos, 0) in (1, 2)
    } | {
        pos
        for pos, count in neighbor_counts.items()
        if count == 2
    }
    return new_active


def solve2():
    moves = parse()
    active_tiles = get_initially_active_tiles(moves)
    for _ in range(100):
        active_tiles = iterate(active_tiles)
    answer = len(active_tiles)
    print(f'The answer to part two is {answer}')


def parse():
    with open("aoc24.txt") as file:
        moves = file.read().rstrip("\n").splitlines()
    return moves


if __name__ == "__main__":
    from time import time
    start_time = time()
    solve1()
    solve2()
    print("--- %s seconds ---" % (time() - start_time))
