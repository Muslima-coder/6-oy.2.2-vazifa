const listTodo = ({todos, setTodos}) => {

    // delete part
    function handleDelete(index) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }

    // edit part
      function handleEdit(id){
       let findbj = todos.find(item => item.id == id)
       let newValue = prompt("Edit", findbj.title)
       newValue = newValue.trim().slice(0, 10);
       findbj.title = newValue
       setTodos([...todos])
      }

    //check part
    function handleComplete(id) {
      if(li.id == id){
        classList.add("bg-green-400")
       }
      }


      
  return (
    <div>
      <ul className="flex justify-center mx-auto sm:justify-between p-20 items-center flex-wrap  w-full gap-[20px]">
        {todos.map((item, index) => (
          <li key={item.id} className={`sm:w-[300px] w-[300px] p-3 rounded-md shadow-xl shadow-slate-400 flex justify-between ${item.completed ? "bg-green-400" : ""}`}>
            <div className="flex items-center gap-1">
              <span className="sm:text-[17px] text-[14px] font-medium text-white">#{index +1}</span>
              <strong className="sm:text-[17px] text-[14px] font-medium text-white">{item.title}</strong>
            </div>

            <div className="flex items-center gap-2 ">
              <button onClick={() =>handleEdit(item.id)} className="border-[#3A70E2] border-[2px] cursor-pointer text-[13px] sm:text-[15px] font-medium text-[#3A70E2] sm:py-2 sm:px-4  py-1 px-2 rounded-md hover:scale-[1.04]  duration-300">Edit</button>
              <button onClick={() => handleDelete(index)} className="border-[#ff4d4d] border-[2px] cursor-pointer text-[13px] sm:text-[15px] font-medium text-[#ff4d4d] sm:py-2 sm:px-4  py-1 px-2 rounded-md hover:scale-[1.04] duration-300 ">Delete</button>
              <button onClick={() => handleComplete(item.id)} className="text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default listTodo 