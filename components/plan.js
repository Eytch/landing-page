import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "./ui/button";

function Plan() {
  return (
    <div className="max-w-[1440px] m-auto p-8 plans-section relative">
      <div>
        <h3 className="text-4xl text-center font-semibold">
          Choose Plan That’s Right For You
        </h3>
        <p className="text-sm opacity-55 font-bold text-center py-8">
          Choose plan that works best for you, feel free to contact us
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Tabs defaultValue="yearly" className="flex flex-col gap-5">
          <TabsList className="shadow-md p-2 self-center h-15 flex gap-3 bg-white">
            <TabsTrigger
              className="p-4 bg-none hover:bg-gray-100 hover:text-black"
              value="monthly"
            >
              Bill Monthly
            </TabsTrigger>
            <TabsTrigger
              className="p-4 bg-none hover:bg-gray-100 hover:text-black"
              value="yearly"
            >
              Bill Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="max-w-md self-start bg-white flex flex-col gap-5 pt-8 pb-5 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl text-black">FREE</h3>
                  <p className="text-center text-lg max-w-xs text-black">
                    Have a go and test your <br /> superpowers
                  </p>
                  <h3 className="text-6xl font-bold text-black">
                    <span className="text-sm font-normal">$</span>0
                  </h3>
                </div>
                <div className="bg-[#F9FAFB] px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 min-w-[280px] px-8">
                    <li className="flex gap-3 min-w-full">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">2 Users</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">2 Files</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Public Share & Comments
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">Chat Support</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        New income apps
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base bg-white shadow-md text-[#54BD95] hover:text-white px-10"
                  >
                    Sign up for Free
                  </Button>
                </div>
              </div>
              <div className="max-w-md bg-[#54BD95] flex flex-col gap-5 py-8 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl">PRO</h3>
                  <p className="text-center text-lg max-w-xs">
                    Experiment the power of <br /> infinite possibilities
                  </p>
                  <h3 className="text-6xl font-bold ">
                    <span className="text-sm font-normal">$</span>12
                  </h3>
                  <p className="bg-[#85DAB9] p-2 rounded-md ">Most Popular</p>
                </div>
                <div className="bg-white px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 min-w-[280px] px-8">
                    <li className="flex gap-3 min-w-full">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black ">4 Users</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">All Apps</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Unlimited editable exports
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Folders and collaboratins
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        All incoming apps
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base text-white px-10"
                  >
                    Go to Pro
                  </Button>
                </div>
              </div>
              <div className="max-w-md self-start bg-white flex flex-col gap-5 pt-8 pb-5 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl text-black">Business</h3>
                  <p className="text-center text-lg max-w-xs text-black">
                    Unveil new superpowers and <br /> join the Design League
                  </p>
                  <h3 className="text-6xl font-bold text-black">
                    <span className="text-sm font-normal">$</span>20
                  </h3>
                </div>
                <div className="bg-[#F9FAFB] px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 px-8">
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        All the features of pro plan
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Account success Manager
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Single Sign-On (SSO)
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Co-conception program
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Collaboration-Soon
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base bg-white shadow-md text-[#54BD95] px-10 hover:text-white"
                  >
                    Go to Business
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="yearly">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="max-w-md self-start bg-white flex flex-col gap-5 pt-8 pb-5 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl text-black">FREE</h3>
                  <p className="text-center text-lg max-w-xs text-black">
                    Have a go and test your <br /> superpowers
                  </p>
                  <h3 className="text-6xl font-bold text-black">
                    <span className="text-sm font-normal">$</span>0
                  </h3>
                </div>
                <div className="bg-[#F9FAFB] px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 min-w-[280px] px-8">
                    <li className="flex gap-3 min-w-full">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">2 Users</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">2 Files</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Public Share & Comments
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">Chat Support</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        New income apps
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base bg-white shadow-md text-[#54BD95] hover:text-white px-10"
                  >
                    Sign up for Free
                  </Button>
                </div>
              </div>
              <div className="max-w-md bg-[#54BD95] flex flex-col gap-5 py-8 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl">PRO</h3>
                  <p className="text-center text-lg max-w-xs">
                    Experiment the power of <br /> infinite possibilities
                  </p>
                  <h3 className="text-6xl font-bold ">
                    <span className="text-sm font-normal">$</span>8
                  </h3>
                  <p className="bg-[#85DAB9] p-2 rounded-md ">
                    Save $50 a year
                  </p>
                </div>
                <div className="bg-white px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 min-w-[280px] px-8">
                    <li className="flex gap-3 min-w-full">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black ">4 Users</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">All Apps</p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Unlimited editable exports
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Folders and collaboratins
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        All incoming apps
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base text-white px-10"
                  >
                    Go to Pro
                  </Button>
                </div>
              </div>
              <div className="max-w-md self-start bg-white flex flex-col gap-5 pt-8 pb-5 px-5 rounded-xl shadow-md">
                <div className="flex flex-col gap-3 items-center text-white">
                  <h3 className="font-bold text-3xl text-black">Business</h3>
                  <p className="text-center text-lg max-w-xs text-black">
                    Unveil new superpowers and <br /> join the Design League
                  </p>
                  <h3 className="text-6xl font-bold text-black">
                    <span className="text-sm font-normal">$</span>16
                  </h3>
                </div>
                <div className="bg-[#F9FAFB] px-5 py-10 flex flex-col gap-5 rounded-lg">
                  <ul className="flex flex-col gap-6 px-8">
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        All the features of pro plan
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Account success Manager
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Single Sign-On (SSO)
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Co-conception program
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FaCircleCheck
                        color="#54BD95"
                        className="min-w-6"
                        fontSize={20}
                      />
                      <p className="leading-5 dark:text-black">
                        Collaboration-Soon
                      </p>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full p-7 text-base bg-white shadow-md text-[#54BD95] px-10 hover:text-white"
                  >
                    Go to Business
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Plan;
