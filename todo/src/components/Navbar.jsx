

function Navbar() {
  return (
   <nav className="flex justify-between bg-indigo-800 text-white py-2">
    <div className="logo">
        <span className="cursor-pointer font-bold text-xl mx-9">iTask</span>
    </div>
    <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your Task</li>
    </ul>
   </nav>
  )
}

export default Navbar
