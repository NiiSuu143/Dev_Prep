import React from 'react'

function PropDrilling() {
  const value = 10;
  return (
    <>
      <div>Prop Drilling Example</div>
      <GrandParent gpValue={value}></GrandParent>
    </>
  )
}

function GrandParent(props) {
  const { gpValue } = props
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent paValue={gpValue}></Parent>
    </>
  )
}

function Parent(props) {
  const { paValue } = props
  return (
    <>
      <h2>Parent</h2>
      <Child cValue={paValue}></Child>
    </>
  )
}

function Child(props) {
  const { cValue } = props;
  return (
    <>
      <h2>Child</h2>
      <div>value : {cValue}</div>
    </>
  )
}

export default PropDrilling