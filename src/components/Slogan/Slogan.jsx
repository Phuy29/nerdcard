import Cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p>Pay Less</p>
        <button className="text-white text-20 px-6 py-[6px] mt-[27px] font-bold bg-purple-500 rounded-[10px] hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
        <img src={Cards} alt="Credit card" />
      </div>
    </section>
  );
};

export default Slogan;
