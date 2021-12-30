def parse():
    with open("aoc25.txt") as file:
        card_key, door_key = map(int, file.read().rstrip("\n").splitlines())
    return card_key, door_key


def transform(subject_number, loop_size):
    # pow(subject_number, loop_size, 20201227)
    value = 1
    for i in range(loop_size):
        value = value * subject_number % 20201227
    return value


def solve():
    card_key, door_key = parse()
    card_loop_size = 0
    door_loop_size = 0
    value = 1
    results = {}
    while len(results) < 2:
        value = value * 7 % 20201227
        door_loop_size += 1
        card_loop_size += 1
        if value == door_key:
            results["door"] = door_loop_size
        if value == card_key:
            results["card"] = card_loop_size
    result = transform(card_key, results["door"])
    assert result == transform(door_key, results["card"])
    print(f'The answer to part one is {result}')


if __name__ == "__main__":
    from time import time

    start_time = time()
    solve()
    print("--- %s seconds ---" % (time() - start_time))
