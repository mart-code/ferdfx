import ImgCommunity from "../assets/fx-community.jpg";
const Community = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-[#212121] to-[#111] w-full 2xl:h-[50vh] h-[100vh] relative mb-35">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ImgCommunity})` }}
      ></div>

      {/* Content */}
      <h2 className="text-white xl:text-6xl text-5xl font-semibold text-center lg:w-1/2 px-4 mx-auto relative z-10">
        Ready to make the best financial decision of your life?
      </h2>
      <button className="btn btn-primary relative z-10">
        Join the Community
      </button>
    </div>
  );
};

export default Community;
