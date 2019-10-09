const getTodos = () => {
  return JSON.parse(window.localStorage.getItem('todos')) || []
}

const addTodo = todo => {
  const todos = [...getTodos(), todo]

  window.localStorage.setItem('todos', JSON.stringify(todos))

  return todos
}
