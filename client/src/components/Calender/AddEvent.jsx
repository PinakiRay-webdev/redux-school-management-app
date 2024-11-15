import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../Redux/slice/EventSlice";


const AddEvent = ({ eventForm, setEventForm }) => {
  const closeForm = () => {
    setEventForm("scale-0");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    
    const newEvent = {
      title : data.title,
      start : data.startDate,
      end : data.endDate,
      subtitle : data.subtitle
    }

    dispatch(createEvent(newEvent))

    reset();
    closeForm();

  }

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[40vw] h-fit py-3 bg-blue-200 z-40 ${eventForm} transition-all duration-150 ease-in-out`}
    >
      <h1 className="mx-5 font-semibold text-xl pb-3">Add Event</h1>
      <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
          type="text"
          placeholder="Title"
          {...register("title" , {
            required:{
              value : true,
              message : 'Title is required'
            }
          })}
        />
        {errors.title && <p className="text-sm text-red-500" >{errors.title.message}</p>}
        <br />
        <input
          className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
          type="text"
          placeholder="Sub-Title"
          {...register("subtitle")}
        />
        <br />
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <input
              className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
              type="datetime-local"
              {...register("startDate" , {
                required:{
                  value : "true",
                  message : "Start date is must required"
                }
              })}
            />
            {errors.startDate && <p className="text-sm text-red-500" >{errors.startDate.message}</p>}
          </div>

          <div className="w-full">
            <input
              className="w-full py-4 rounded-md outline-none ring-1 ring-zinc-500 px-3 text-sm my-2"
              type="datetime-local"
              {...register("endDate" , {
                required:{
                  value : true,
                  message : "Mention session time and date of ending"
                }
              })}
            />
            {errors.endDate && <p className="text-sm text-red-500">{errors.endDate.message}</p>}
          </div>
        </div>
        <div className="flex  gap-3 mt-8">
          <button className="bg-black text-white w-full py-4 rounded-lg">
            Add
          </button>
          <p
            onClick={closeForm}
            className="bg-red-600 text-white w-full py-4 rounded-lg text-center cursor-pointer"
          >
            Cancel
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
