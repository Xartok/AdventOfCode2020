import functools
import operator
import networkx
import numpy as np
import itertools


def parse():
    tiles = {}
    with open("aoc20.txt") as file:
        for tile_data in file.read().strip().split("\n\n"):
            tile_id_str, *tile_lines = tile_data.splitlines()
            tile_id = int(tile_id_str.strip(":").split()[1])
            tiles[tile_id] = np.array([[char == "#" for char in row] for row in tile_lines], dtype=np.uint8)
    return tiles


def nptobin(s):
    return int("".join([str(k) for k in s]), 2)


def get_borders(tile):
    return [nptobin(tile[0]), nptobin(tile[:, -1]), nptobin(tile[-1,]), nptobin(tile[:, 0])]


def get_flips(tile):
    res = tile
    for _ in range(4):
        yield res
        res = np.rot90(res)
    res = np.flip(tile, 1)
    for _ in range(4):
        yield res
        res = np.rot90(res)


def solve1():
    tiles = parse()
    borders = {}

    for n, t in tiles.items():
        # all possible borders for each tile
        borders[n] = set.union(*[set(get_borders(fl)) for fl in get_flips(t)])

    graph = networkx.Graph()

    for i, j in itertools.combinations(borders, 2):
        # 2 adjacent tiles share 2 versions of their common border (normal and flipped)
        if len(set(borders[i]) & set(borders[j])) == 2:
            graph.add_edge(i, j)

    corners = [n for n in graph if len(graph[n]) == 2]

    print(functools.reduce(operator.mul, corners))
    return corners, tiles, graph


def place_adjacent_tiles_on_grid(grid, coords, graph, tiles):
    used = set(tile_id for tile_id, _ in grid.values())
    tile_id, tile = grid[coords]
    tile_borders = get_borders(tile)
    for adjacent_tile_id in graph[tile_id]:
        if adjacent_tile_id in used:
            continue
        for fl in get_flips(tiles[adjacent_tile_id]):
            fl_borders = get_borders(fl)
            if fl_borders[0] == tile_borders[2]:
                grid[(coords[0] + 1, coords[1])] = (adjacent_tile_id, fl)
            if fl_borders[3] == tile_borders[1]:
                grid[(coords[0], coords[1] + 1)] = (adjacent_tile_id, fl)


def solve2():
    corners, tiles, graph = solve1()
    for fl in get_flips(tiles[corners[0]]):
        grid = {(0, 0): (corners[0], fl)}
        place_adjacent_tiles_on_grid(grid, (0, 0), graph, tiles)
        # correct position of top left corner is found because we placed its adjacent tiles
        if len(grid) == 3:
            break

    for i in range(12):
        for j in range(12):
            place_adjacent_tiles_on_grid(grid, (i, j), graph, tiles)

    ###########
    image = np.concatenate(
        [np.concatenate(
            [grid[i, j][1][1:-1, 1:-1] for j in range(12)], axis=1
        ) for i in range(12)], axis=0
    )
    ##########

    monster_str = (
        "                  # \n"
        "#    ##    ##    ###\n"
        " #  #  #  #  #  #   ".splitlines()
    )

    monster_image = np.array([[char == "#" for char in row] for row in monster_str], dtype=np.uint8)
    monster_width, monster_height = monster_image.shape

    for image in get_flips(image):
        image_width, image_height = image.shape
        count = 0
        for i in range(image_width - monster_width + 1):
            for j in range(image_height - monster_height + 1):
                image_sample = image[i: i + monster_width, j: j + monster_height]
                if (image_sample & monster_image == monster_image).all():
                    count += 1
        if count > 0:
            break

    print(int(np.sum(image) - count * np.sum(monster_image)))


if __name__ == "__main__":
    solve2()
