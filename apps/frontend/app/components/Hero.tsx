export function Hero() {
  return (
    <div className="  bg-[#f9f7fc] mt-40">
      <div className="rounded-full w-full flex justify-center px-4 ">
        <span className="bg-[#6b829a] rounded-full   py-2 poppins text-bold px-10 text-xl text-white tracking-wide">
          Systematic Literature Review Tool
        </span>
      </div>

      <div className="mt-8 text-center ">
        <h2 className="text-7xl leading-26 poppins font-extrabold text-[#304D69]">
          Accelerate Your <br />
          Systematic Reviews
        </h2>
      </div>

      <div className=" text-center  mt-3">
        <h2 className="text-lg leading-8 text-[#6B829A] poppins tracking-wide">
          ReLis streamlines the systematic review process with powerful
          planning, <br />
          searching and analysis tools. Save time and increase accuracy your{" "}
          <br />
          research.
        </h2>
      </div>

      <div className=" justify-center flex space-x-3 mt-10">
        <button className=" p-6 text-2xl text-white bg-[#304D69] rounded-2xl  tracking-wide">
          Get Started Now
        </button>
        <button className=" border-2 border-[#6B829A] p-6 text-2xl text-[#304D69] rounded-2xl  tracking-wide hover:bg-[#f0e5dd]">
          Watch Demo
        </button>
      </div>
    </div>
  );
}
