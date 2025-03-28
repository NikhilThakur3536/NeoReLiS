"use client"

type props = {
  clickHandler: () => void,
}

export const DemoMainSection = ({ clickHandler }: props) => {
  return (
    <div className="flex flex-col w-full h-full ml-16 mt-2">
      
      {/* Main Heading */}
      <div className="flex flex-col w-[80%] px-6" >
        <h2 className="font-bold text-[#304D69] text-4xl mb-1">Getting Started</h2>
        <h3 className="font-medium text-[#6B829A] mb-4">Follow this tutorial to learn how to use our platform effectively.</h3>
      </div>

      {/* The Video Displaying Component containing heading, subheading and video player */}
      <div className="  flex flex-col w-[90%] h-[90%] bg-white rounded-2xl p-4">
        <div className="w-full px-4">
          <h3 className="w-full h-12 font-semibold text-3xl mb-2 text-[#304D69]">Heading</h3>
          <h3 className="w-full h-12 text-[#6B829A] text-xl">Sub Heading</h3>
        </div>
        <div className="w-[90%] h-[65%] bg-gray-100 rounded-xl ml-14 border-2 border-dashed ">
        </div>
        {/* Section Below the Video Player that contains Next, previous and Mark as Completed button */}
        <div className="flex flex-col w-full px-8">
          <hr className="w-full h-2 text-gray-200 mt-4" />
          <div className="flex justify-between w-full px-8">
            <div className="flex gap-2">
              <button className="bg-[#6B829A]/10 w-24 h-12 p-2 rounded-xl border border-[#6B829A]/30 text-lg font-medium text-[#304D69] hover:cursor-pointer">Previous</button>
              <button className=" bg-[#6B829A]/10 w-24 h-12 p-2 rounded-xl border border-[#6B829A]/30 text-lg font-medium text-[#304D69] hover:cursor-pointer">Next</button>
            </div>
            <div>
              <button className="w-48 h-12 bg-[#304D69] rounded-xl text-white text-lg font-medium hover:cursor-pointer" onClick={clickHandler}>Mark As Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
