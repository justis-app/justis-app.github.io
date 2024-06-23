import { char, createRegExp, digit, exactly, letter,not, oneOrMore } from "magic-regexp";

export let emailRegex = createRegExp(
    char.and(not.digit),
    oneOrMore(char).groupedAs("name"),
    exactly("@"),
    oneOrMore(char).groupedAs("provider").after("@"),
    exactly("."),
    oneOrMore(char).groupedAs("domain")
)
