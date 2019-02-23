import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../../store/ducks/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li onClick={() => removeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo("Novo todo")}>Adicionar</button>
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// Abaixo era o componente statefull antes de implementarmos os testes com REDUX
// export default class TodoList extends Component {
//   state = {
//     todos: []
//   };

//   componentDidMount() {
//     const todos = localStorage.getItem("todos");

//     if (todos) {
//       this.setState({ todos: JSON.parse(todos) });
//     }
//   }

//   addTodo = () => {
//     this.setState({
//       todos: [...this.state.todos, { id: Math.random(), text: "Novo Todo" }]
//     });

//     this.saveTodos();
//   };

//   saveTodos = () => {
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };

//   removeTodo = id => {
//     this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
//     this.saveTodos();
//   };

//   render() {
//     return (
//       <Fragment>
//         <ul>
//           {this.state.todos.map(todo => (
//             <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>
//               {todo.text}
//             </li>
//           ))}
//         </ul>
//         <button onClick={this.addTodo}>Adicionar</button>
//       </Fragment>
//     );
//   }
// }
