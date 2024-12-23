```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the component re-renders
    // every time the count changes, causing the effect to run again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```