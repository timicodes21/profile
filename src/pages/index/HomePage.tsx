import CustomButton from "@/components/CustomButton";

const HomePage = () => {
  return (
    <div
      className="bg-purple-100 h-[100vh] w-[100vw] fixed top-0 left-0 flex flex-col justify-center items-center px-5 md:px-10"
      style={{ zIndex: -10 }}
    >
      <div>
        <p className="text-white-100 text-[36px] sm:text-[52px] md:text-[72px] font-bold text-center w-[100vw] sm:w-[80vw] md:w-[50vw] line-h">
          Detail Oriented Web and Mobile Developer
        </p>
      </div>
      <div className="mt-5 flex flex-col md:flex-row">
        <a href="#work">
          <CustomButton mode="background"> Dig into my universe</CustomButton>
        </a>

        <div className="mt-3 md:mt-0">
          <CustomButton mode="border">See Services</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
