# react-spring-scroll-to-hook
Simple custom hook for scrollTo functionality in react-spring v9

# Usage

`const {scrollToTarget} = useScrollToElement();` where useScrollToElement is imported hook

then on mouse handler: `scrollToTarget(document.getElementById('#test'))` or `scrollToTarget(ref.current)`

see ref usage here: https://reactjs.org/docs/hooks-reference.html#useref
