## Concepts to Define:

### 1. React.memo

React.memo: optimizing functional component rendering

    React.memo is a higher-order component (HOC) in React that acts as a performance optimization tool for functional components. It essentially "memoizes" a component's rendering, meaning it caches the rendered output and only re-renders the component if its props have changed.

How it works

    Normally, when a parent component re-renders (due to state changes, for instance), all of its child components also re-render by default. This can lead to performance issues, especially in applications with a complex UI or components with expensive rendering logic. React.memo helps address this by performing a shallow comparison of a component's props with its previous props.

    If the props are the same as the previous render, React.memo reuses the cached output and skips the re-rendering process. This can significantly improve performance by reducing the workload on the browser.

    If the props have changed, the component will re-render, and its new output will be cached for future use.

When to use React.memo

    Pure Functional Components: Components that rely solely on their props to determine rendering output and have no internal state or side effects.

    Components with Expensive Rendering Logic: If a component performs complex computations during its rendering process.

    Components Receiving Static Props: When a component receives props that are unlikely to change frequently.

    Large Component Lists: Optimizing the rendering of large lists by wrapping individual list items in React.memo.

    Optimizing Component Trees: Memoizing higher-level components that act as containers for multiple child components.

You can implement React.memo like this:

```jsx
import React, { memo } from "react";

const MyComponent = ({ prop1, prop2 }) => {
  /* component rendering logic */
};

export default memo(MyComponent);
```

When to avoid React.memo

    It's important to use React.memo judiciously, as overuse can add complexity and potentially introduce performance overhead from the prop comparison itself.

Avoid using React.memo when:

    Components render frequently with different props.

    Components are small and simple and don't involve complex rendering logic.

    Components rely on non-pure values like random numbers or time-based values.

Shallow vs. Deep Comparison

    By default, React.memo performs a shallow comparison of props, checking if primitive values are the same and comparing memory references for objects or arrays. If a complex object or array's contents change but its reference stays the same, React.memo might not trigger a re-render.

    For situations requiring a deeper comparison, a custom comparison function can be provided as the second argument to React.memo. However, deep comparisons can be computationally expensive. It's often more effective to simplify props or use the useMemo hook to memoize complex objects before passing them.

---

### 2. useMemo

    useMemo is a React Hook that helps optimize performance by memoizing (caching) the result of a calculation between re-renders.

Purpose of useMemo

    Caching expensive computations: If you have a function that performs a resource-intensive calculation (like sorting a large dataset, filtering a long list, or complex data transformations), useMemo can cache its result. This way, the calculation is only re-run when its dependencies change, preventing unnecessary recalculations on every render.

    Preventing unnecessary re-renders of child components: When passing props (especially objects or arrays) to child components wrapped in React.memo, if those props are recreated on every parent re-render, the child component will also re-render unnecessarily. useMemo helps stabilize these references by returning the same memoized value if dependencies haven't changed, preventing redundant re-renders of child components.

    Optimizing dependencies of other Hooks: If the value of a useMemo calculation is used as a dependency in other Hooks (like useEffect or another useMemo), memoizing that value can prevent those Hooks from running unnecessarily.

How it works

    Wrap the expensive calculation: You wrap the expensive calculation function within useMemo.

    Provide dependencies: You pass a dependency array as a second argument to useMemo. This array includes all the values that the calculation depends on (props, state, etc.).

Memoization:

    On the initial render, the function inside useMemo is executed, and its result is cached.

    On subsequent renders, React compares the current dependencies with the previous dependencies using Object.is.

    If the dependencies haven't changed, useMemo returns the cached value, skipping the calculation.

    If any dependency has changed, the function inside useMemo is executed again, the new result is cached, and that new result is returned.

Example:

```jsx
import React, { useMemo, useState } from "react";

function MyComponent({ items }) {
  const [filter, setFilter] = useState("");

  // Expensive calculation (filtering a large array)
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.includes(filter));
  }, [items, filter]); // Dependencies: items and filter

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

In this example, filteredItems will only be recalculated when items or filter change, thanks to useMemo.

When to use it

    When a calculation is noticeably slow and its dependencies rarely change.

    When passing the memoized value as a prop to a component wrapped in React.memo to prevent unnecessary re-renders of the child component.

    When a value is used as a dependency of another Hook, and you want to prevent that Hook from running unnecessarily.

---

### 3. React.lazy

React.lazy: optimizing performance with lazy loading

React.lazy() is a built-in function in React, introduced in version 16.6, that allows you to implement lazy loading or code-splitting for components in your React applications.

Here's a breakdown of what that means:

    Lazy loading: Instead of loading all components and their associated code upfront when the application starts, React.lazy() enables you to defer loading components until they are actually needed by the user or when they are about to be rendered.

    Code splitting: In essence, React.lazy() works hand-in-hand with tools like Webpack to automatically split your application's code into smaller, separate bundles (or chunks). Only the necessary chunks are downloaded when a lazy-loaded component is required.

How it works

1. Dynamic Import: React.lazy() takes a function as an argument. This function dynamically imports the component you want to lazy load using the import() syntax.

```jsx
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

2. Suspense for Loading State: Since the component is being loaded asynchronously, you need to provide a fallback UI while it's being fetched. This is where the <Suspense> component comes in.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

3. Rendering: When LazyComponent is about to be rendered for the first time, React calls the function provided to React.lazy() to fetch the component's code. While the component is loading, the fallback prop of <Suspense> is displayed. Once the component is loaded, it replaces the fallback content and renders as a regular component.

Why use React.lazy()?

    Improved Initial Page Load Time: By splitting your code and only loading what's immediately needed, lazy loading reduces the initial bundle size, leading to faster loading times for your application.

    Better User Experience: Users don't have to wait for the entire application to load before interacting with it. They can see and interact with critical parts of the page while other components are loading in the background.

    Efficient Resource Utilization: Reduces bandwidth consumption by only requesting the necessary code chunks.

    Enhanced Scalability: Facilitates building larger, more complex applications by breaking them down into manageable chunks, making development and maintenance easier.

---

### 4. Suspense

React Suspense: a better way to handle loading states in React

    React Suspense is a built-in React component that helps manage the loading of components and data in a declarative way, leading to smoother user experiences and more efficient applications.

    Instead of manually tracking loading states with boolean flags and conditional rendering, Suspense allows you to specify a fallback UI (like a loading spinner or placeholder) that will be displayed while a component or data is being fetched.

How it works

    You wrap a component that might take time to load (either due to lazy loading or data fetching) within a <Suspense> component.

    The <Suspense> component takes a fallback prop, which can be any React component you want to display during the loading phase.

    When the child component is not yet ready to render (e.g., still loading its code or fetching data), React "suspends" its rendering and displays the fallback UI instead.

    Once the child component and its dependencies are fully loaded, React automatically replaces the fallback with the actual component.

Key benefits

    Improved user experience: No more blank screens or choppy loading states. Users see a smooth transition between loading indicators and the actual content.

    Simplified code: Eliminates the need for complex conditional rendering and managing loading states with useEffect or other state management solutions, according to Hygraph.

    Code Splitting and Lazy Loading: Works seamlessly with React.lazy() for dynamically loading components only when needed, reducing initial page load time.

    Better integration with Concurrent Mode: Suspense is a key part of React's Concurrent Mode, allowing React to prioritize rendering updates and provide a more responsive UI, particularly in complex applications or slow networks.

---

### 5. Virtual DOM (why it matters for performance)

React's virtual DOM: a blueprint for efficient UI updates

    The virtual DOM (VDOM) is a core concept in React that allows it to efficiently update and render changes to the user interface. It is a lightweight, in-memory representation of the actual DOM (Document Object Model), which is the browser's standard way of representing the HTML structure of a webpage.

Here's how it works:

    1. Initial Rendering: When the React application starts, React builds a virtual DOM tree that mirrors the structure of the real DOM.

    2. State and Props Changes: When a component's state or props change, React generates a new virtual DOM tree that reflects these updates.

    3. Diffing: React then employs a diffing algorithm to compare the new virtual DOM tree with the previous one, identifying the precise differences between them.

    4. Reconciliation: Based on these differences, React calculates the most efficient way to update the actual DOM.

    5. Updating the Real DOM: Instead of re-rendering the entire webpage, React only applies the necessary changes to the corresponding elements in the real DOM.

Benefits of the virtual DOM

    Improved Performance: By minimizing direct interactions with the real DOM, which is a slow operation, React significantly enhances rendering performance, especially for complex applications with frequent UI updates.

    Simplified Development: The virtual DOM allows developers to write code in a declarative style, focusing on describing what the UI should look like at any given time, rather than imperatively detailing how to update the DOM. React takes care of the efficient updates behind the scenes.

    Enhanced User Experience: Faster updates translate to a smoother and more responsive user experience, reducing the likelihood of lag or glitches.

    Cross-platform Development: The principles of the virtual DOM are not limited to web development. React Native, for example, utilizes a similar approach for building cross-platform mobile applications.

Virtual DOM vs. real DOM vs. shadow DOM

It's important to differentiate between the Virtual DOM, Real DOM, and Shadow DOM:

    Real DOM: The actual HTML structure rendered by the browser.

    Virtual DOM: A lightweight, in-memory representation of the Real DOM used by React for efficient updates.

    Shadow DOM: A browser technology for encapsulating the structure and styling of web components, creating an isolated DOM subtree.

In essence, React's virtual DOM acts as an intermediary, optimizing the process of updating the real DOM by only modifying the necessary elements, thus delivering faster and smoother user experiences in web applications.

---

### 6. Hydration (especially for SSR in Next.js)

    React hydration is the process of making a server-rendered HTML page interactive on the client side. When using Server-Side Rendering (SSR) in React, the server generates the initial HTML, which is sent to the client. This provides a fast initial load and benefits SEO. However, this HTML is initially static and lacks interactivity. Hydration connects this static HTML to the dynamic React application.

How hydration works

    1. Server Rendering (SSR): The server generates the initial HTML.

    2. HTML Delivery: The HTML is sent to the client's browser, allowing quick content viewing.

    3. JavaScript Loading: The browser downloads the React application's JavaScript.

    4. Hydration: React compares the static HTML with the component tree.

    5. Event Attachment: If they match, React adds interactivity to the HTML elements.

Benefits of hydration

    Faster Initial Load: Content is visible quickly.

    Improved SEO: Search engines can crawl the pre-rendered content.

    Enhanced User Experience: Users see content while JavaScript loads.

Key takeaways

    Hydration is crucial for making server-rendered React apps interactive on the client side.

    It combines the speed of SSR with client-side React interactivity.

    Newer versions of React include features to improve hydration efficiency.
