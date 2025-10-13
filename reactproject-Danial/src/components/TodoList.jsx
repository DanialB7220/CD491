import React from 'react'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = { todos: [], input: '', error: '' }
  }

  handleAddTodo = () => {
    const trimmedInput = this.state.input.trim()
    
    if (!trimmedInput) {
      this.setState({ error: 'Please enter a task!' })
      return
    }
    
    // Check for duplicates
    const isDuplicate = this.state.todos.some(todo => 
      todo.text.toLowerCase() === trimmedInput.toLowerCase()
    )
    
    if (isDuplicate) {
      this.setState({ error: 'This task already exists!' })
      return
    }
    
    this.setState({
      todos: [...this.state.todos, {text: trimmedInput, done: false}],
      input: '',
      error: ''
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAddTodo()
    }
  }

  render() {
    return (
      <div className="p-5 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-5">My Todo List</h2>
        
        <div className="mb-5">
          <input 
            value={this.state.input} 
            onChange={e => this.setState({input: e.target.value, error: ''})}
            onKeyPress={this.handleKeyPress}
            placeholder="Add a new task (Press Enter to add)"
            className="p-2 mr-2 w-64 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Add new todo task"
          />
          <button 
            onClick={this.handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Add todo task"
          >
            Add
          </button>
        </div>
        
        {this.state.error && (
          <div className="mb-3 p-2 bg-red-100 border border-red-300 text-red-700 rounded">
            {this.state.error}
          </div>
        )}
        
        {this.state.todos.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg mb-2">🎉 No tasks yet!</p>
            <p>Add your first task above to get started.</p>
          </div>
        ) : (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              {this.state.todos.filter(todo => !todo.done).length} task(s) remaining
            </p>
          </div>
        )}
        
        {this.state.todos.map((todo, i) => (
          <div key={i} className="mb-2 p-2 border border-gray-300 rounded hover:bg-gray-50">
            <input 
              type="checkbox" 
              checked={todo.done} 
              onChange={() => {
                const newTodos = [...this.state.todos]
                newTodos[i].done = !newTodos[i].done
                this.setState({todos: newTodos})
              }}
              className="mr-2"
              aria-label={`Mark "${todo.text}" as ${todo.done ? 'incomplete' : 'complete'}`}
            />
            <span className={todo.done ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <button 
              onClick={() => {
                this.setState({todos: this.state.todos.filter((_, idx) => idx !== i)})
              }}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`Delete task "${todo.text}"`}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default TodoList
