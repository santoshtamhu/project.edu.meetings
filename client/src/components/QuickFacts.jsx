import { MdOutlinePlayCircle } from "react-icons/md";

export default function QuickFacts() {
  return (
    <div
      style={{ backgroundImage: "url('bg-image/facts-bg.jpg')" }}
      className=" mt-32 py-28 bg-center bg-cover bg-fixed"
    >
      <div className="container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer text-white">
        <div className="lg:flex lg:gap-20 lg:items-center">
          <div className="lg:flex-1">
            <h2 className="text-4xl mb-16 font-bold text-center lg:text-left">
              A Few Facts About Our University
            </h2>
            <div className="lg:flex lg:gap-7">
              <div className="w-full">
                <div className="quick-fact mb-7">
                  <span className="quick-fact-number">94%</span>
                  <span className="quick-fact-label">Succesed Students</span>
                </div>

                <div className="quick-fact">
                  <span className="quick-fact-number">126</span>
                  <span className="quick-fact-label">Current Teachers</span>
                </div>
              </div>
              <div className="w-full mt-7">
                <div className="quick-fact mb-7">
                  <span className="quick-fact-number">234</span>
                  <span className="quick-fact-label">New Students</span>
                </div>

                <div className="quick-fact">
                  <span className="quick-fact-number">32</span>
                  <span className="quick-fact-label">Awards</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url('thumbnail/video-item-bg.jpg')" }}
            className=" mt-10 lg:mt-0 flex justify-center items-center bg-cover w-full h-[396px] bg-center rounded-2xl lg:flex-1"
          >
            <span className="text-7xl">
              <a
                href="https://www.youtube.com/watch?v=HndV87XpkWg"
                target="_blank"
              >
                <MdOutlinePlayCircle />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
