from collections import deque
from itertools import islice


def parse():
    with open("aoc22.txt") as file:
        player1_deck, player2_deck = file.read().split("\n\n")
        player1_deck = deque(int(x) for x in player1_deck.splitlines()[1:])
        player2_deck = deque(int(x) for x in player2_deck.splitlines()[1:])
    return player1_deck, player2_deck


def solve():
    player1_deck, player2_deck = parse()
    initial_decks_size = len(player1_deck)
    while len(player1_deck) < (2 * initial_decks_size) and len(player2_deck) < (2 * initial_decks_size):
        card1, card2 = (player1_deck.popleft(), player2_deck.popleft())
        if card1 > card2:
            player1_deck.extend((card1, card2))
        else:
            player2_deck.extend((card2, card1))
    winning_deck = player1_deck if len(player1_deck) == (2 * initial_decks_size) else player2_deck
    score = sum((i + 1) * n for i, n in enumerate(reversed(winning_deck)))
    print(score)


# def recursive_combat(player1_deck, player2_deck):
def recursive_combat(p1, p2):
    seen = set()

    while p1 and p2:
        kk = str((p1, p2))
        if kk in seen:
            return 1, p1, p2
        seen.add(kk)
        c1 = p1.popleft()
        c2 = p2.popleft()

        if len(p1) >= c1 and len(p2) >= c2:
            winner, _, _ = recursive_combat(deque(islice(p1, 0, c1)), deque(islice(p2, 0, c2)))
            if winner == 1:
                p1.append(c1)
                p1.append(c2)
            else:
                p2.append(c2)
                p2.append(c1)
        else:
            if c1 > c2:
                p1.append(c1)
                p1.append(c2)
            else:
                p2.append(c2)
                p2.append(c1)


    return 1 if p1 else 2, p1, p2

def solve2():
    player1_deck, player2_deck = parse()
    initial_decks_size = len(player1_deck)

    winner, p1, p2 = recursive_combat(player1_deck, player2_deck)
    winning_deck = p1 if winner == 1 else p2

    score = sum((i + 1) * n for i, n in enumerate(reversed(winning_deck)))
    print(score)


if __name__ == "__main__":
    solve()
    solve2()
