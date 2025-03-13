import TraderFerd from "../assets/trader-ferd.jpg";
import SlideInSection from "./SlideInSection";

const Mentor = () => {
  return (
    <div
      id="mentor"
      className="flex xl:flex-row flex-col justify-center items-stretch gap-4 w-full px-10 mb-36"
    >
      <div className="xl:basis-[40%]">
        <SlideInSection direction="left">
          <img
            src={TraderFerd}
            className=""
            alt="Ferdinand Okafor - Trader Ferd"
          />
        </SlideInSection>
      </div>
      <div className="xl:basis-[60%] ">
        {" "}
        <SlideInSection direction="right">
          <div className="flex flex-col items-start">
            <p className="uppercase  text-[12px] tracking-widest xl:tracking-[10px] py-2 px-2 bg-[#04cc04] text-white mb-5">
              Meet Your Mentor
            </p>
            <h1 className="text-5xl font-semibold my-5">Ferdinand Okafor</h1>
            <p className="font-light leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              nisi laborum, similique amet facere dignissimos inventore
              consequuntur doloribus beatae et nobis quam nulla voluptatibus
              consequatur! Harum totam eligendi aliquid cumque libero unde
              veniam optio expedita odit tenetur. Velit magni nam nobis quaerat
              optio provident accusamus ab dignissimos veniam labore aut sit
              sapiente, vitae, magnam expedita quae itaque voluptatem aliquid
              maiores ex recusandae fuga veritatis. Numquam, mollitia
              necessitatibus dolorem dolore nostrum, et accusamus enim porro
              ipsam fugiat quaerat quia exercitationem commodi architecto
              laboriosam suscipit dicta quidem. Ratione laudantium rem quod qui
              unde? Sequi quos eius in quibusdam suscipit quaerat temporibus
              reiciendis?
            </p>
          </div>
        </SlideInSection>
      </div>
    </div>
  );
};

export default Mentor;
