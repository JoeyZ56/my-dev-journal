### 🧪 Step 1: Check the Layout Responsiveness

Open the app in your browser and:

    •	Shrink the window down to mobile size (under 640px): Do the cards stack vertically?
    •	Expand it to tablet (640–768px): Do you see two cards per row?
    •	Expand to desktop (768px and up): Should be three cards per row.

Replace the placeholder "Card 1" text with real JSX content inside each card:

```jsx
<div className="bg-white shadow p-4 rounded">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600 mb-2">Short description here.</p>
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    View More
  </button>
</div>
```
