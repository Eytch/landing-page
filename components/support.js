import React from "react";
import Image from "next/image";
function Support() {
  return (
    <div className="bg-[#F9F8FE] dark:bg-zinc-900 gap-2">
      <div className="max-w-[1440px] m-auto p-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start py-8">
          <div className="basis-2/3 flex flex-col max-w-screen-xl gap-8">
            <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-semibold lg:text-left">
              How we support our pratner all over the world
            </h2>
            <p className="text-sm text-center md:text-base lg:text-left opacity-50">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-10">
              <div className="flex flex-col text-center lg:text-left gap-2">
                <Image
                  src="/5stars.svg"
                  width={100}
                  height={100}
                  alt="5stars"
                />
                <p>
                  <span className="font-bold">4.8</span> / 5 rating
                </p>
                <p className="text-sm font-bold opacity-50">databricks</p>
              </div>
              <div className="flex flex-col text-center lg:text-left gap-2">
                <Image
                  src="/4stars.svg"
                  width={100}
                  height={100}
                  alt="5stars"
                />
                <p>
                  <span className="font-bold">4.8</span> / 5 rating
                </p>
                <p className="text-sm font-bold opacity-50">Chainalysis</p>
              </div>
            </div>
          </div>
          <div className="basis-1/4 flex flex-col max-w-sm xl:max-w-full gap-8 ">
            <div className="flex gap-3">
              <div className="min-w-12">
                <Image
                  src="/publishingIcon.png"
                  className="bg-white shadow-md p-2"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-2xl">Publishing</h3>
                </div>
                <div>
                  <p className="opacity-50 leading-6 text-sm">
                    Plan, collaborate, and publishing your contetn that drivees
                    meaningful engagement and growth for your barnd
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="min-w-12">
                <Image
                  src="/pie.png"
                  className="bg-white shadow-md p-2"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-2xl">Analytics</h3>
                </div>
                <div>
                  <p className="opacity-50 leading-6 max-w-xs text-sm">
                    Analyze your performance and create goegeous report
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="min-w-12">
                <Image
                  src="/engagement.png"
                  className="bg-white shadow-md p-2"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-2xl">Engagement</h3>
                </div>
                <div>
                  <p className="opacity-50 leading-6 max-w-xs text-sm">
                    Quiuckly navigate you anda engage with your adience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
