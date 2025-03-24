<<<<<<< HEAD

# python-mini-projects

=======

# python Docs

## Methods

### List Methods

- .append() - Adds a new sublist to the end of list.
- - list.append(element) adds an element to the end of the list

- .remove() - Removes a specific value from a sublist.
- - list.remove(element) removes the element in a list \*if multiple elements of it exists it ONLY removes the first.
- - list[index].remove(element) removes an element from a specific index in a 2D list.

- "+" (concatenation) - Combines multiple lists into a single list.

- zip() - Pairs up elements from two lists to create a 2D list.

- .count() - To count the number of occurrences of an element in a list.
  -- variable.count("String" or number)

- insert() - To insert an element into a specific index of a list.
- - list.insert(index, element)

- .pop() - To remove an element from a specific index or from the end of a list.
- - list.pop() removes last index
- - list.pop(index) removes specific index

- list() returns a list from an iterable. "creates a new list"

- range() - To create a sequence of integers.
- - The function range() takes a single input, and generates numbers starting at 0 and ending at the number before the input.
- - using a third input, we can create a list that “skips” numbers.
- - - my_range2 = range(2, 9, 2)
- - - Output: [2, 4, 6, 8]

- len() - To get the length of a list.

  - - my_list = [1, 2, 3, 4, 5]
  - - print(len(my_list))
  - - Output: 5

- .sort()/sorted() - To sort a list.
  -- variable.sort()
  -- sort() does not make a new list so print the variable after a sort()
  -- sort changes the list alphabetically
  -- to reverse a sort() do variable.sort(reverse=True)

- sorted()
  variable = sorted(list_variable)
  -- It comes before a list, instead of after as all built-in functions do.
  -- It generates a new list rather than modifying the one that already exists.

- Slicing - A way to extract a portion of a list using the syntax
  - - variable[start:end]
  - - variable[:n] - gets the first elements of a list
  - - variable[n:] - gets the last elements of a list

#### List docs from Codecademy

https://www.codecademy.com/resources/docs/python/lists

#### Built in functions

https://www.codecademy.com/resources/docs/python/built-in-functions?page_req=catalog

> > > > > > > a47e936 (Reinitialize repository after folder move. updated README)

---

### Strings

- f-strings (formatted string literals) are a way to embed expressions inside string literals using {}. They are prefixed with f or F and provide a more readable and efficient way to format strings
- - name = "Alice"
- - age = 25
- - print(f"My name is {name} and I am {age} years old.")
- - Output: My name is Alice and I am 25 years old.
