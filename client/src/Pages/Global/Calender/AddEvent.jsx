import React from "react";

const AddEvent = () => {
  return (
    <div
      className={`absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[40vw] h-fit py-3 bg-blue-200 z-40`}
    >
        <h1 className="mx-5 font-semibold text-xl pb-3" >Add Event</h1>
      <form className="mx-5">
        <input
          className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
          type="text"
          placeholder="Title"
        />
        <br />
        <input
          className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
          type="text"
          placeholder="Sub-Title"
        />
        <br />
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <input
              className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
              type="date"
              placeholder="Start date"
            />
          </div>

          <div className="w-full">
            <input
              className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
              type="date"
            />
          </div>

        </div >
          <div className="flex  gap-3 mt-8" >
            <button className="bg-black text-white w-full py-4 rounded-lg" >Add</button>
            <p className="bg-red-600 text-white w-full py-4 rounded-lg text-center cursor-pointer" >Cancel</p>
          </div>
      </form>
    </div>
  );
};

export default AddEvent;
