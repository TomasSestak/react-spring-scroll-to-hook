import React from 'react'

import { useMyHook } from 'react-spring-scroll-to-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
