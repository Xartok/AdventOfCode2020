from itertools import islice, cycle


def parse():
    with open("aoc23.txt") as file:
        cups = [int(i) for i in list(file.read().splitlines()[0])]
    return cups


def solve(nb_turns=100):
    cups = parse()
    cups_count = len(cups)
    max_cup = max(cups)
    current_cup_index = 0
    current_cup = cups[current_cup_index]
    for x in range(nb_turns):
        # print("cups", cups)
        picked_up_cups = [
            cups[(current_cup_index+1) % cups_count],
            cups[(current_cup_index+2) % cups_count],
            cups[(current_cup_index+3) % cups_count]
        ]
        # print("picked", picked_up_cups)
        for cup in picked_up_cups:
            cups.remove(cup)

        destination_cup = current_cup - 1
        # print("dest", destination_cup)
        while destination_cup not in cups:
            destination_cup = destination_cup - 1
            if destination_cup < 1:
                destination_cup = max_cup
        destination_cup_index = cups.index(destination_cup)
        # print("dest", destination_cup, destination_cup_index)
        # print()

        for i in range(3):
            cups.insert(destination_cup_index + i + 1, picked_up_cups[i])
        current_cup_index = (cups.index(current_cup) + 1) % cups_count
        current_cup = cups[current_cup_index]
    # print("final cups", cups)

    index_of_1 = cups.index(1)
    result = list(islice(cycle(cups), index_of_1 + 1, index_of_1 + cups_count))
    print("".join(map(str, result)))


def solve2(nb_turns=100):
    cups = parse()
    cups.extend(range(10, 1000001))
    cups_count = len(cups)
    max_cup = max(cups)
    current_cup_index = 0
    current_cup = cups[current_cup_index]
    for x in range(nb_turns):
        # print("cups", cups)
        picked_up_cups = [
            cups[(current_cup_index+1) % cups_count],
            cups[(current_cup_index+2) % cups_count],
            cups[(current_cup_index+3) % cups_count]
        ]
        # print("picked", picked_up_cups)
        for cup in picked_up_cups:
            cups.remove(cup)

        destination_cup = current_cup - 1
        # print("dest", destination_cup)
        while destination_cup not in cups:
            destination_cup = destination_cup - 1
            if destination_cup < 1:
                destination_cup = max_cup
        destination_cup_index = cups.index(destination_cup)
        # print("dest", destination_cup, destination_cup_index)
        # print()

        for i in range(3):
            cups.insert(destination_cup_index + i + 1, picked_up_cups[i])
        current_cup_index = (cups.index(current_cup) + 1) % cups_count
        current_cup = cups[current_cup_index]
    # print("final cups", cups)

    index_of_1 = cups.index(1)
    result = cups[(index_of_1+1) % cups_count] * cups[(index_of_1+2) % cups_count]
    print(result)


def move(linked_cups, current_cup, min_cup, max_cup):
    picked_cups = [current_cup]
    for _ in range(3):
        picked_cups.append(linked_cups[picked_cups[-1]])
    picked_cups = picked_cups[1:]

    next_after_picked = linked_cups[picked_cups[-1]]
    linked_cups[current_cup] = next_after_picked

    destination_cup = current_cup - 1
    while destination_cup in picked_cups or destination_cup < min_cup:
        destination_cup -= 1
        if destination_cup < min_cup:
            destination_cup = max_cup

    destination_next = linked_cups[destination_cup]
    linked_cups[destination_cup] = picked_cups[0]
    linked_cups[picked_cups[-1]] = destination_next

    new_current_cup = linked_cups[current_cup]
    return new_current_cup


def solve3(nb_turns=100):
    initial_cups = parse()
    linked_cups = {}
    # circular linked list
    for i in range(len(initial_cups) - 1):
        linked_cups[initial_cups[i]] = initial_cups[i + 1]
    linked_cups[initial_cups[-1]] = max(initial_cups) + 1
    for cup in range(max(initial_cups) + 1, 1000000):
        linked_cups[cup] = cup + 1
    linked_cups[1000000] = initial_cups[0]

    max_cup = 1000000
    min_cup = 1
    current_cup = initial_cups[0]
    for x in range(nb_turns):
        current_cup = move(linked_cups, current_cup, min_cup, max_cup)

    result = linked_cups[1] * linked_cups[linked_cups[1]]
    print(result)


if __name__ == "__main__":
    # solve(100)
    solve3(10000000)
