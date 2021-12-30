from collections import defaultdict

input_path = 'aoc17.txt'

what = set()
with open(input_path, mode='r') as input_file:
    for y, line in enumerate(input_file.read().splitlines(keepends=False)):
        for x, char in enumerate(line):
            if char == '#':
                what.add((x, y))


def p1(arg):
    neighbors_delta = set(
        (x, y, z)
        for x in (-1, 0, 1)
        for y in (-1, 0, 1)
        for z in (-1, 0, 1)
    )
    neighbors_delta.remove((0, 0, 0))
    neighbors_delta = tuple(neighbors_delta)

    def tick(active_cubes):
        neighbors = defaultdict(int)
        for active_cube in active_cubes:
            for neighbor_delta in neighbors_delta:
                neighbor = (
                    active_cube[0] + neighbor_delta[0],
                    active_cube[1] + neighbor_delta[1],
                    active_cube[2] + neighbor_delta[2],
                )
                neighbors[neighbor] += 1

        for cube, active_neighbors_count in neighbors.items():
            if active_neighbors_count == 3:
                yield cube
            elif active_neighbors_count == 2:
                if cube in active_cubes:
                    yield cube

    state = set((x, y, 0) for x, y in arg)
    for _ in range(6):
        state = set(tick(state))
    return len(state)


def p2(arg):
    neighbors_delta = set(
        (x, y, z, w,)
        for x in (-1, 0, 1)
        for y in (-1, 0, 1)
        for z in (-1, 0, 1)
        for w in (-1, 0, 1)
    )
    neighbors_delta.remove((0, 0, 0, 0))
    neighbors_delta = tuple(neighbors_delta)

    def tick(active_cubes):
        neighbors = defaultdict(int)
        for active_cube in active_cubes:
            for neighbor_delta in neighbors_delta:
                neighbor = (
                    active_cube[0] + neighbor_delta[0],
                    active_cube[1] + neighbor_delta[1],
                    active_cube[2] + neighbor_delta[2],
                    active_cube[3] + neighbor_delta[3],
                )
                neighbors[neighbor] += 1

        for cube, active_neighbors_count in neighbors.items():
            if active_neighbors_count == 3:
                yield cube
            elif active_neighbors_count == 2:
                if cube in active_cubes:
                    yield cube

    state = set(
        (x, y, 0, 0)
        for x, y in arg
    )
    for _ in range(6):
        state = set(tick(state))
    return len(state)


print(p1(what))
print(p2(what))
