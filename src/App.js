import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'React 시험 통과하기'},
  ])
  const [content, setContent] = useState('')

  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  const clickAddButtonHandler = () => {
    const newContent = {
      id: todos.length + 1,
      content
    }
    setTodos([...todos, newContent])
    setContent('')
  }

  return (
    <div className='total-box'>
      <div className='input-box'>
        <input type="text" value={content} onChange={contentChangeHandler}/>
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='logo-box'>Todo List</div>

      <div className='main-box'>
        {
          todos.map((item) => {
            return (
              <div key={item.id} className='content-box'>{item.content}</div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App