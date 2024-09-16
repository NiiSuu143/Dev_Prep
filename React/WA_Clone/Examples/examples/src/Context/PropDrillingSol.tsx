import React, { useContext } from 'react'
// 1
const ContextWrapper = React.createContext(1);

function PropDrillingSol() {
    const value = 1000;
  return (
    <>
      <div>Prop Drilling Solution</div>
      <ContextWrapper.Provider value={value}>
        <GrandParent></GrandParent>
      </ContextWrapper.Provider>
    </>
  )
}

function GrandParent() {
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent></Parent>
    </>
  )
}

function Parent() {
  return (
    <>
      <h2>Parent</h2>
      <Child></Child>
    </>
  )
}

function Child() {
    const message = useContext(ContextWrapper);
  return (
    <>
      <h2>Child</h2>
      <div>value : {message}</div>
    </>
  )
}

export default PropDrillingSol