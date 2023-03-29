import React, { useState } from "react";

const CallPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className=" hero min-h-screen ">
      <div className="artboard w-1/2 shadow-2xl rounded-lg">
        <div>
          <video className=" h-full w-full p-3" src="" controls></video>
        </div>
        <div className="grid justify-items-center items-center grid-cols-4 gap-5 bg-slate-400 rounded-3xl mx-3 py-1">
          <div>one</div>
          <div className="col-start-2 col-span-2 w-full flex flex-row items-center justify-center gap-3">
            <p className=" text-xs">05:01</p>
            <input
              className="w-full"
              type="range"
              min="0"
              max="100"
              value="40"
              id=""
            />
            <p className=" text-xs">15:01</p>
          </div>

          <div className=" bg-slate-100 rounded-3xl justify-self-end">
            <div className="grid grid-cols-2 ">
              <button
                onClick={() => setToggle(false)}
                className={
                  !toggle
                    ? "text-md px-2 text-slate-100  bg-blue-700 rounded-3xl"
                    : " text-md px-2 text-slate-10 rounded-3xl"
                }>
                Transcript
              </button>
              <button
                onClick={() => setToggle(true)}
                className={
                  toggle &&
                  `text-md px-2 text-slate-100  bg-blue-700 rounded-3xl`
                }>
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
