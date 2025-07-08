

const CreateComponent = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <div className=' border border-gray-300 w-fit h-fit p-4'>
            <h1 className='text-3xl font-bold text-center mb-4 text-amber-600'>Create a Room</h1>
            
            <input type="text" placeholder='Creator Name' className='p-2 border border-gray-300 rounded mr-4 text-white' />
            <input type="text" placeholder='Room Name' className='p-2 border border-gray-300 rounded mr-4 text-white' />
            <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Create Room</button>
           
        </div>
    </div>
  )
}

export default CreateComponent