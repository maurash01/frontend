import React from 'react'

const MessengerApp = () => {


  const addNewMessage = (e) => {
    if (e.code=== 'Enter'){
        if (!e.target.value) return toast.error('Please enter a task');

        console.log(e.target.value);

        const newTask = {
            task : e.target.value, completed: false
        };

        setTaskList([newTask, ...taskList]);
        toast.success('Task added successfully!');

 
  return (
    <div className='mx-64'>
        <h1 className='text-3xl font-bold text-center my-5'>Messages</h1>
        <div className='border-2 shadow-lg rounded-lg p-5'>
        <input onKeyDown={addNewMessage} type="text" className='w-full  border border-blue-500 px-4 py-2 rounded-md' placeholder='Add a new todo' />



        </div>
    </div>
  )
}

export default MessengerApp ;