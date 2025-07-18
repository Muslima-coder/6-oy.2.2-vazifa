const formTodo = ({todos, setTodos}) => {
    function handleSubmit(e){

        e.preventDefault()
        
        const data = {
          id: todos[todos.length - 1]?.id ? todos[todos.length - 1].id + 1 : 1,
          title: e.target.todo.value,
          isComplated: false
        } 
        e.target.reset()
        setTodos([... todos, data])
      }
      
return(
    <form onSubmit={handleSubmit} className="bg-transparent border-[2px] border-slate-300 p-4 rounded-xl w-[320px] sm:w-[380px] mx-auto mt-5 flex justify-between items-center">
        <input maxLength={10} className="outline-none w-[78%] border-[1.5px] text-white border-purple-900 shadow-md   p-2 rounded-md" autoComplete="off" required type="text" placeholder="Enter your todo" name="todo" />
        <button className="w-[20%] sm:text-[18px] text-[13px] px-1 py-2 rounded-md cursor-pointer border-[1.5px] border-purple-900 text-white hover:scale-[1.04] duration-500" type="submit">Create</button>
      </form>
)
}


export default formTodo