function Todo(props) {
  return (
    <div className='card'>
      <h2>{props.test}</h2>
      <div className='action'>
        <button className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default Todo
