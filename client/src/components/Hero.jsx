import backgroundVideo from "/backgroundVideo/backgroundVideo.mp4";

export default function Hero() {
  return (
    <div>
      <div className="relative text-white">
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="w-full h-full top-0  bg-[rgba(31,39,43,0.75)] absolute"></div>
        <div className="container">
          <div className="flex absolute top-64 flex-col gap-5">
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
