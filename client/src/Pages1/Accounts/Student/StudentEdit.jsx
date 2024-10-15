import React, { useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/slice/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudentEdit = ({ isEditable, setIsEditable, currentStudent }) => {


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const closeBtn = () => {
    setIsEditable("top-[-100%]");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStudent) {
      setValue("firstName", `${currentStudent?.FirstName}`);
      setValue("lastName", `${currentStudent?.LastName}`);
      setValue("email", `${currentStudent?.Email}`);
      setValue("gender" , `${currentStudent?.Gender}`);
      if (currentStudent.Phone || currentStudent.DOB) {
        setValue("phone", currentStudent?.Phone);
        setValue("dob" , currentStudent?.DOB);
      }
      if (currentStudent.Gender !== ""){
        setValue("gender", currentStudent?.Gender);
      }
    }
  }, [dispatch, currentStudent, setValue]);

  const delay = () => {
    return new Promise((resoleve) => {
        setTimeout(() => {
            resoleve();
        }, 2500);
    })
  }

  const onSubmit = async (data) => {

    toast.promise(delay , {
        pending : "Making changes...",
        success : "Changes applied successfully!",
        error : "Unable fetch try again later"
    } , {
        theme : "dark"
    })

    const editInfo = {
      id: currentStudent?.id,
      FirstName: data.firstName,
      Phone: data.phone,
      DOB : data.dob,
      Gender : data.gender,
    };

    dispatch(updateUser(editInfo));
    reset();
    closeBtn();
  };

  return (
    <div
      className={`absolute w-[30vw] h-screen right-0 bg-slate-200 px-3 py-4 transition-all duration-300 ease-in-out ${isEditable}`}
    >
      <div className="flex justify-end">
        <p onClick={closeBtn} className="text-red-600 text-3xl cursor-pointer">
          <IoIosCloseCircle />
        </p>
      </div>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        {/* first and last name */}
        <div className="flex gap-3">
          <div>
            <label className="font-bold">First Name : </label>
            <br />
            <input
              {...register("firstName")}
              type="text"
              className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3 mb-4"
            />{" "}
          </div>

          <div>
            <label className="font-bold">Last Name : </label>
            <br />
            <input
              {...register("lastName")}
              type="text"
              className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3 mb-4"
            />{" "}
          </div>
        </div>

        <div>
          <label className="font-bold">Email ID : </label>
          <br />
          <input
            {...register("email")}
            type="email"
            className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3 mb-4"
          />{" "}
        </div>

        {/* phone number  */}
        <div>
          <label className="font-bold">Phone Number : </label>
          <input
            {...register("phone")}
            type="number"
            className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3"
          />
        </div>

        {/* date of birth */}
        <div className="mt-3" >
        <label className="font-bold">Date of Birth : </label>
          <input
            {...register("dob")}
            type="date"
            className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3"
          />
        </div>

        <div className="mt-3" >
        <label className="font-bold">Gender : </label>
            <select {...register("gender")} className="w-full py-3 px-4 ring-1 ring-zinc-400 rounded-lg mt-3">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>


        <button className="bg-black py-3 text-white bottom-5 absolute left-0 w-full">
          Make changes
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default StudentEdit;
