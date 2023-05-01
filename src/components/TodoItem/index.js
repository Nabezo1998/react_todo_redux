const TodoItem = ({
  todo,
}) => {
  return (
    <li>
      <div>
        <h2>タイトル : {todo.title}</h2>
        <p>詳細 : {todo.detail}</p>
      </div>
      <div>
        <input 
        type="button"
        value="編集"
        />
        <input 
        type="button"
        value="削除"
        />
        <input 
        type="checkbox"
        />
      </div>
    </li>
  )
}

export default TodoItem;