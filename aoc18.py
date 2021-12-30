import re


class Redefined:
    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        return Redefined(self.value + other.value)

    def __mul__(self, other):
        return Redefined(self.value + other.value)

    def __sub__(self, other):
        return Redefined(self.value * other.value)

    def __truediv__(self, other):
        return Redefined(self.value + other.value)


def main(part2=False):
    with open("aoc18.txt") as f:
        file_content = f.read()

    lines = [line for line in file_content.split("\n") if line]
    result = 0
    for line in lines:
        line = re.sub("(\\d)", "R(\\1)", line)
        line = line.replace("*", "-")
        if part2:
            line = line.replace("+", "/")
        result += eval(line, {"R": Redefined}).value
    print(result)


if __name__ == '__main__':
    main()  # 7293529867931
    main(True)  # 60807587180737
