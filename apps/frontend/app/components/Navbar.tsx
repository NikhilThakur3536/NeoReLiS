export default function Navbar() {
  return (
    <div className="flex justify-between bg-[#f7f9fc]  p-2 w-full">
      <div className="  ml-2 p-2 poppins py-2">
        <div className="p-2 font-semibold text-2xl">ReLiS</div>
      </div>

      <div className=" p-2 flex transform translate-y-1.5 justify-between">
        <div className="p-2 text-[#6b829a] inter">Home</div>
        <div className="p-2 text-[#6b829a] inter">Features</div>
        <div className="p-2 text-[#6b829a] inter">Documentation</div>
        <div className="p-2 text-[#6b829a] inter">About</div>
      </div>

      <div className="  mr-2 p-2 flex justify-between">
        <button className="relative px-4 py-2 bg-[#f0e5dd]  rounded-md overflow-hidden cursor-pointer mr-2">
          <span className="relative inline-block group">
            Log In
            <span className="absolute left-0 bottom-0 w-0 h-0.5  bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
        <button className="relative px-4  bg-[#2e4e6d] text-white rounded-md overflow-hidden cursor-pointer">
          <span className="relative inline-block group">
            Get Started
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#f7f9fc] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
    </div>
  );
}
