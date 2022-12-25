export const User = (props) => {
    return (
      <div>
          <h3 style={{color: props.value.gender === 'F' ? 'pink' : 'blue'}}>Name: {props.value.name} | Age: {props.value.age}</h3>
      </div>
    )
  }

