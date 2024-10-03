import React, { useEffect } from "react";
import { getMentors, updateUser } from "../../Redux/slice/userSlice";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { getUsers } from "../../Redux/slice/userSlice";

const EditUsers = ({ isEditActivate, setIsEditActivate, userID }) => {
  const closeForm = () => {
    setIsEditActivate("scale-0");
  };

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const userData = useSelector((state) => state.user.students.find((e) => e.id === userID));
  const mentorData = useSelector((state) => state.user.mentors.find((e) => e.id === userID));
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      setValue("userFirstName", userData.FirstName);
      setValue("userLastName", userData.LastName);
      setValue("userEmail", userData.Email);
    } else if (mentorData) {
      setValue("userFirstName", mentorData.FirstName);
      setValue("userLastName", mentorData.LastName);
      setValue("userEmail", mentorData.Email);
    }
  }, [userData, mentorData, setValue]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);

  const onSubmit = (data) => {
    const updatedUser = {
      id: userID,
      FirstName: data.userFirstName,  // Only update the first name
      LastName: data.userLastName,    // Only update the last name
      Email: data.userEmail,          // Only update the email
    };
  
    dispatch(updateUser(updatedUser)); // Dispatch the updateUser action with the partial data
    closeForm(); // Close the form after submission
  };

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#cae9ff] h-fit z-10 w-[30vw] rounded-xl transition-all duration-100 px-3 py-2 ${isEditActivate} `}
    >
      <header className="flex justify-end">
        <p
          onClick={closeForm}
          className="text-red-600 text-3xl text-right cursor-pointer"
        >
          <IoIosCloseCircle />
        </p>
      </header>

      <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 pb-3">
          {/* First Name */}
          <div>
            <label className="text-sm font-semibold text-zinc-600">First Name:</label>
            <br />
            <input
              type="text"
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
              {...register("userFirstName", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors.userFirstName && (
              <p className="text-xs text-red-600">{errors.userFirstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-semibold text-zinc-600">Last Name:</label>
            <br />
            <input
              type="text"
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
              {...register("userLastName", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {errors.userLastName && (
              <p className="text-xs text-red-600">{errors.userLastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">Email ID:</label>
          <br />
          <input
            type="email"
            className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            {...register("userEmail", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.userEmail && (
            <p className="text-xs text-red-600">{errors.userEmail.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="py-2 w-full bg-black text-white rounded-lg mt-4"
        >
          Apply changes
        </button>
      </form>
    </div>
  );
};

export default EditUsers;
