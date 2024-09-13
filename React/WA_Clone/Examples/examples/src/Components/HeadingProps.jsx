function Heading(props) {
    const name = props.name;
    const age = props.age;
    const children = props.children;
    return <>
      <h1>Hi I am {name} and I am {age}</h1>
      {children}
    </>
  }

  export default Heading