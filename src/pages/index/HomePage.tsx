const HomePage = () => {
  return (
    <div
      className="bg-purple-100 h-[100vh] w-[100vw] fixed top-0 left-0 flex flex-col justify-center items-center"
      style={{ zIndex: -10 }}
    >
      <div>
        <p className="text-white-100 md:text-[72px] font-bold text-center w-[100vw] sm:w-[80vw] md:w-[50vw] line-h">
          Detail Oriented Web and Mobile Developer
        </p>
      </div>
      <div className="mt-5 flex">
        <button
          className="bg-white-100 px-10 py-5  text-center border-white-100 font-[16px] mx-2"
          type="button"
        >
          <p className="text-purple-100">Dig into my universe</p>
        </button>
        <button
          className="bg-transparent border-[1px] px-10 py-5  text-center border-white-100 font-[16px] mx-2"
          type="button"
        >
          <p className="text-white-100">See Services</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
