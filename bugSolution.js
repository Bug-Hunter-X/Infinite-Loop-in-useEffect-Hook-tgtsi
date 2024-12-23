```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array ensures this only runs once on mount.
    setCount(count + 1);
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}
```