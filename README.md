# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook.  The bug arises from modifying state variables within the effect without properly managing dependencies.  The solution showcases how to correctly utilize the dependency array to prevent the infinite loop.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable using `useEffect` without specifying any dependencies. This triggers an infinite loop as the state change causes a re-render, which leads to the effect running again and again, thus constantly updating the state.

## Solution
The `bugSolution.js` file provides a fix by adding the state variable `count` to the dependency array. This ensures the effect only runs when the `count` value changes (initially) and not every time the component re-renders.