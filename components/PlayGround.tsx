import React from "react";

const PlayGround = () => {
  return (
    // <div className="grid sm:grid-cols-2 gap-4 m-4 grid-cols-2">
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-900"></div>
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-800"></div>
    // </div>
    // <div className="grid gap-4 m-4 sm:grid-cols-4">
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-900"></div>
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-800"></div>
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-700"></div>
    //   <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-600"></div>
    // </div>

    <div className="grid gap-4 m-4 grid-cols-1 sm:grid-cols-2">
      <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-900 sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg shadow-sm bg-zinc-800 sm:col-span-10"></div>
    </div>
  );
};

export default PlayGround;
