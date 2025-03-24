Concepts to Focus On:

    1.	Basic Methods: charAt(), toUpperCase(), toLowerCase()
    2.	String Searching: indexOf(), includes(), startsWith(), endsWith()
    3.	String Transformation: split(), join(), slice(), trim(), replace()
    4.	Template Literals: Embedding variables within strings with ${}
    5.	Regular Expressions (optional): If you want to challenge yourself.

Redex:

    Symbol	Meaning	Example
    . | Any character except a newline | /h.t/ matches hat, hot, hit
    \d | Any digit (0-9)	/\d/ matches 3 in abc3xyz
    \w | Any word character (a-z, A-Z, 0-9, _) | /\w/ matches a in abc
    \s | Any whitespace (space, tab, etc.) | /\s/ matches the space in a b
    + | One or more occurrences | /\d+/ matches 123 in a123b
    * | Zero or more occurrences | /a*/ matches aaa or empty in b
    ^ | Start of the string | /^A/ matches A in Apple
    $ | End of the string | /z$/ matches z in buzz
    [abc] | Any one character in the set | /[aeiou]/ matches e in hello
    [^abc] | Any character not in the set | /[^aeiou]/ matches h in hello
