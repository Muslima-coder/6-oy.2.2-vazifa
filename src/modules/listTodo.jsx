const listTodo = ({todos, setTodos}) => {

    function handleDelete(ind){
        todos.splice(ind, 1)
        setTodos([...todos])
      }
      function handleEdit(id){
       let findbj = todos.find(item => item.id == id)
       let newValue = prompt("Edit", findbj.title)
       newValue = newValue.trim().slice(0, 10);
       findbj.title = newValue
       setTodos([...todos])
      }
      
  return (
    <div>
      <ul className="flex justify-center mx-auto sm:justify-between p-20 items-center flex-wrap  w-full gap-[20px]">
        {todos.map((item, index) => (
          <li key={item.id} className="sm:w-[300px] w-[300px] p-3 rounded-md shadow-xl shadow-slate-400 flex justify-between ">
            <div className="flex items-center gap-1">
              <span className="sm:text-[17px] text-[14px] font-medium text-white">#{index +1}</span>
              <strong className="sm:text-[17px] text-[14px] font-medium text-white">{item.title}</strong>
            </div>

            <div className="flex items-center gap-2 ">
              <button onClick={() =>handleEdit(item.id)} className="border-[#3A70E2] border-[2px] cursor-pointer text-[13px] sm:text-[15px] font-medium text-[#3A70E2] sm:py-2 sm:px-4  py-1 px-2 rounded-md hover:scale-[1.04]  duration-300">Edit</button>
              <button onClick={() => handleDelete(index)} className="border-[#ff4d4d] border-[2px] cursor-pointer text-[13px] sm:text-[15px] font-medium text-[#ff4d4d] sm:py-2 sm:px-4  py-1 px-2 rounded-md hover:scale-[1.04] duration-300 ">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default listTodo 