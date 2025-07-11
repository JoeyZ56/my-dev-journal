## Core Questions — answer in your own words:

    •	What is JSX?
    •	How do props differ from state?
    •	What’s the purpose of useEffect()?
    •	When would you use useMemo() or React.memo()?

1. What is JSX?

- JSX is an extension of Javascript, allowing the developer to write html along with javascript for a more streamline file structure.

2. How do props differ from state?

- Both state and props are objects used to hold data. they differ in origin, mutability and purpose.

        Props(Properties)
        - Origin: A prop is passed from the parent component.
        - Immutable" Is read only from the from the perspective of the receiving component.
        -Purpose: Used to pass data and functions down the component tree.

        State
        - Origin: Managed internally within a component.
        - Mutable: A component can modify the data using (useState)
        - Purpose: Used to modify data that will change over time

3. What’s the purpose of useEffect()?

- useEffect allows you to render code after the component has mounted or when props or state changes from user interaction or api fetch changes.

```jsx
import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Runs after the component mounts or when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

4. When would you use useMemo() or React.memo()?

- useMemo() and React.memo() are both performance optimization tools in React, but they serve different purposes:

        When to use React.memo():
        - To prevent unnecessary re-renders of a functional component:
            Wrap a functional component with React.memo() when its rendering is solely dependent on its props and you want to avoid re-rendering it if its props haven't changed. React.memo() performs a shallow
            comparison of props by default.

        - When a parent component frequently re-renders:
            If a parent component updates frequently, but its child component (wrapped in React.memo()) receives the same props, React.memo() will prevent the child from re-rendering, saving performance.

useMemo example:

```jsx
import { useMemo, useState } from "react";

function ExpensiveCalculator({ number }) {
  // This function simulates a slow calculation
  const slowSquare = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e9; i++) {} // fake delay
    return num * num;
  };

  // Only recalculates when `number` changes
  const result = useMemo(() => slowSquare(number), [number]);

  return <div>Result: {result}</div>;
}
```
