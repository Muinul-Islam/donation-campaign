const Banner = () => {
  const handleSearchCategory = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };

  return (
    <div className="h-[70vh] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80"></div>
      <h1 className="absolute flex justify-center items-center w-full h-full text-2xl md:text-3xl lg:text-5xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <img
        className="h-full w-full"
        src="https://i.ibb.co/Vp9Xw24/Rectangle-4281-1.jpg"
        alt=""
      />
      <div className="flex justify-center items-center">
        <div className="absolute bottom-[30%] w-[75%] md:w-[490px] ">
          <form onSubmit={handleSearchCategory}>
            <div className="flex">
              <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                name="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-black rounded-l-lg bg-gray-50 "
                placeholder="Search here...."
                required
              />
              <button
                type="submit"
                className="text-white  right-2.5 bottom-2.5 bg-[#ff444a] hover:bg-[#ff141c] font-medium rounded-r-lg text-sm px-6 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
