from lark import Lark
import re


def solve(part2=False):
    with open('aoc19.txt') as file:
        rules, messages = file.read().split('\n\n')

    grammar = []
    for line in rules.splitlines():
        if part2:
            line = line\
                .replace('8: 42', '8: 42 | 42 8')\
                .replace('11: 42 31', '11: 42 31 | 42 11 31')
        line = re.sub("(\\d+)", "rule_\\1", line)
        grammar.append(line)
    grammar.append('start: rule_0')
    grammar = '\n'.join(grammar)

    parser = Lark(grammar)
    result = 0
    for message in messages.splitlines():
        try:
            parser.parse(message)
            result += 1
        except:
            pass

    print(result)


if __name__ == "__main__":
    solve()
    solve(True)
