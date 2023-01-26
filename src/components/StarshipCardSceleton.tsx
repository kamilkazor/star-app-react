import React from "react";

function StarshipCardSceleton() {
  return (
    <li
      data-testid="card-sceleton"
      className="card card-shape h-full flex flex-col"
    >
      <div className="animate-pulse">
        <div>
          <div className="py-[4px]">
            <h2 className="h-[24px] w-[50%] bg-blue-200/40"></h2>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[80%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[60%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[90%] bg-blue-300/20"></p>
          </div>
        </div>
        <div className="mt-5">
          <div className="py-[4px]">
            <h3 className="h-[16px] w-[20%] bg-blue-200/40"></h3>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[30%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[60%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[30%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[40%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[60%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[40%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[50%] bg-blue-300/20"></p>
          </div>
          <div className="py-[4px]">
            <p className="h-[16px] w-[30%] bg-blue-300/20"></p>
          </div>
        </div>
        <div className="py-[4px] mt-5">
          <p className="h-[16px] w-[60%] bg-blue-300/40"></p>
        </div>
      </div>
    </li>
  );
}

export default StarshipCardSceleton;
