import re
from hopcroftkarp import HopcroftKarp
from collections import defaultdict


def parse():
    regex = re.compile(r"^(?P<ingredients>.+) \(contains (?P<allergens>.+)\)$")
    recipes_words_by_allergen = defaultdict(list)
    all_ingredients = []
    with open("aoc21.txt") as file:
        for line in file.read().splitlines():
            m = regex.search(line)
            ingredients, allergens = m.groups()
            ingredients = ingredients.split(" ")
            all_ingredients.extend(ingredients)
            allergens = allergens.split(", ")
            for allergen in allergens:
                recipes_words_by_allergen[allergen].append(set(ingredients))
    return recipes_words_by_allergen, all_ingredients


def solve():
    recipes_words_by_allergen, all_ingredients = parse()
    known_allergens = []
    graph = {}
    for allergen in recipes_words_by_allergen:
        inter = set.intersection(*recipes_words_by_allergen[allergen])
        graph[allergen] = inter
        known_allergens.extend(inter)
    result = sum(1 for ingredient in all_ingredients if ingredient not in known_allergens)
    print(result)

    # https://www.geeksforgeeks.org/hopcroft-karp-algorithm-for-maximum-matching-set-1-introduction/
    matching = HopcroftKarp(graph).maximum_matching(keys_only=True)
    result = [matching[key] for key in sorted(matching.keys())]
    print(",".join(result))


if __name__ == "__main__":
    solve()
