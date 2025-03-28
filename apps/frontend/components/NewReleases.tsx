export function NewReleases() {
  return (
    <div className="w-full flex justify-center mt-24  mb-4">
      <div className=" rounded-xl w-200 bg-[#ffffff] shadow-(--div-shadow) px-4 pt-2 pb-4">
        <div className=" pt-3">
          <div className="bg-[#304D69] rounded-xl relative">
            <div className="flex justify-between items-center ml-3  absolute text-center h-full  space-x-2">
              <div className="bg-[#F57273] rounded-full w-4 h-4"></div>
              <div className="bg-[#EAC52B] rounded-full w-4 h-4"></div>
              <div className="bg-[#4BD882] rounded-full w-4 h-4"></div>
            </div>
            <h2 className="text-center text-2xl p-4 drop-shadow-(--black-shadow) text-white">
              New Releases
            </h2>
          </div>
        </div>
        <div className="rounded-b-2xl rounded-t-xl px-4 py-1.5 mt-2 shadow-(--div-shadow-y) ">
          <h3 className=" roboto text-[#304D69] font-bold font-4xl">
            New Release Announcement!!
          </h3>
          <p className="pt-4 font-md text-[#6B829A] roboto tracking-wide">
            We are excited to announce the latest release of our project. You
            can use your
            <span className="text-[#304D69] font-bold ">
              {" "}
              existing credentials{" "}
            </span>
            from previous releases to access the new features. Please note that
            projects from previous releases are
            <span className="text-[#304D69] font-bold"> not imported </span> but
            can be accessed at{" "}
            <span className="font-bold font-[#304D69] underline hover:cursor-pointer">
              relis-archive.iro.umontreal.ca
            </span>
          </p>

          <div className="mb-3">
            <div className="mt-6 bg-[#c3d5e8] px-6 rounded-xl">
              <div className="text-[#304D69] pt-2 font-semibold text-xl">
                Plan The Review
              </div>

              <div className="pt-4 pb-3 leading-4 roboto tracking-wide text-[#6B829A]">
                ReLis feature a domain specific language to define a protocol
                that will guide thr process of conducting the review
              </div>
            </div>
            <div className="mt-6 bg-[#c3d5e8] px-6 rounded-xl">
              <div className="text-[#304D69] pt-2 font-semibold text-xl">
                Import Articles
              </div>

              <div className="pt-4 pb-3 roboto leading-4 tracking-wide text-[#6B829A]">
                ReLis allows you to manually add references or import a list of
                CSV, Bibex and EndNote files
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
