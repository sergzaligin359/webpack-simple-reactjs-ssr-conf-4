import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { fetchTodo } from '@actions';

const Todo = () => {
  
  console.log('process.env NODE_ENV', process.env.NODE_ENV);
  console.log('process.env IS_CLIENT', process.env.IS_CLIENT);
  console.log('process.env IS_SERVER', process.env.IS_SERVER);

  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('render', todos);
    // setTodos(window.INITIAL_STATE.todo.todo);
    // dispatch(fetchTodo());
  }, []);

  // const handlerShowTodos = () => {
  //   dispatch(fetchTodo());
  // };

  return(
    <div>
      <h1>Todos page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </nav>

      {/* <button onClick={handlerShowTodos}>Show todos</button> */}

      <div>
        {
          todos && todos.map((el, index) => <h3 key={el.id}>{index+1}. {el.title}</h3>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todo.todo
});

Todo.fetching = ({dispatch}) => [dispatch(fetchTodo())];

export default connect(mapStateToProps, {} )(Todo);