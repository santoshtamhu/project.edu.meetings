import backgroundVideo from "/backgroundVideo/backgroundVideo.mp4";

export default function Hero() {
  return (
    <div>
      <div className="relative text-white">
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            className="top-0 left-0 h-screen w-full  object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="w-full h-full top-0  bg-[rgba(31,39,43,0.75)] absolute"></div>
        </div>

        <div className=" absolute w-full top-64 ">
          <div className="flex flex-col gap-5 container sm:smContainer 2xl:xxlContainer md:mdContainer xl:xlContainer lg:lgContainer ">
            <div className="font-semibold tracking-wider uppercase">
              Hello Students
            </div>
            <div className="uppercase tracking-wider text-4xl font-extrabold">
              Welcome to Education
            </div>
            <div className="text-[14px]  max-w-[570px] leading-6">
              This is an edu meeting HTML CSS template provided by{" "}
              <span className="text-blue-400 hover:text-yellow-500 cursor-pointer">
                TemplateMo website
              </span>
              . This is a Bootstrap v5.1.3 layout. The video background is taken
              from Pexels website, a group of young people by{" "}
              <span className="text-blue-400 hover:text-yellow-500 cursor-pointer">
                Pressmaster
              </span>
              .
            </div>
            <div>
              <button className="btn">JOIN US NOW!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
