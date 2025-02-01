# React Native Uninitialized State/Prop Access

This repository demonstrates a common error in React Native: attempting to access state or props before they've been initialized.  This often happens when working with asynchronous operations.  The `UninitializedBug.js` file shows the problematic code, while `UninitializedSolution.js` provides the fix.

## Setup

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the directory: `cd <repository_name>`
3. Run the project using your preferred React Native development environment (Expo, react-native run-android, etc.)

## Problem

In the `UninitializedBug.js` component, the state variable `data` is initialized to `null`.  We then attempt to render the component before the `fetchData` asynchronous operation completes and populates the `data` state. This causes the app to crash or display an error because the component tries to use `data.value` while `data` is still `null`. 

## Solution

`UninitializedSolution.js` solves this by using the optional chaining operator (`?.`) and nullish coalescing (`??`) to gracefully handle the case where `data` is `null` or `undefined`.  This ensures that the component doesn't crash and provides a fallback value.

This improved code also includes a loading indicator to provide a better user experience while waiting for the data to load.