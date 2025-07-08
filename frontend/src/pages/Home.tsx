

const Home = () => {
  return (
    <div>
        <div id="title">
            <h1 className="text-5xl font-bold underline text-center text-amber-600 italic">Welcome to Talksy</h1>            
        </div>
        <div className="flex flex-col items-center justify-center mt-[18%] gap-4.5">
            <button className="bg-red-400 p-2 rounded-2xl hover:bg-red-500">Create Room</button>
            <button  className="bg-green-400 p-2 rounded-2xl hover:bg-green-500">Join Room</button>
        </div>
    </div>
  )
}

export default Home