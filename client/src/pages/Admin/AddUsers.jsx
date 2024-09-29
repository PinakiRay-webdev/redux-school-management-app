import React from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
// import { createUsers } from "../../Redux/slice/userSlice";
const AddUsers = ({ isFormOpen, setIsFormOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const closeForm = () => {
    setIsFormOpen("scale-0")
  };


  const onSubmit = async (data) => {

      const url = 'http://localhost:3000/users';
    try {
        const response = await fetch(url , {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                FirstName : data.userFirstName,
                LastName : data.userLastName,
                Email : data.userEmail,
                Role  : data.userRole,
                Password : data.userPassword
            })
        })

        const userData = response.json();
        // dispatch(createUsers(userData))

    } catch (error) {
        console.log({error : error.message});
        
    }

    console.log(data);
    reset();
  };

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#cae9ff] h-fit z-10 w-[30vw] rounded-xl transition-all duration-100 px-3 py-2 ${isFormOpen} `}
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
            <label className="text-sm font-semibold text-zinc-600">
              First Name:
            </label>
            <br />
            <input
              type="text"
              placeholder=""
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
              {...register("userFirstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.userFirstName && (
              <p className="text-xs text-red-600">
                {errors.userFirstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-semibold text-zinc-600">
              Last Name:
            </label>
            <br />
            <input
              type="text"
              placeholder=""
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
              {...register("userLastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.userLastName && (
              <p className="text-xs text-red-600">
                {errors.userLastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email ID */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            Email ID:
          </label>
          <br />
          <input
            type="email"
            placeholder=""
            className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            {...register("userEmail", {
              required: {
                value: true,
                message: "This field is required",
              },
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

        {/* User Role */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            User Role:
          </label>
          <br />
          <input
            type="text"
            placeholder=""
            className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            {...register("userRole", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.userRole && (
            <p className="text-xs text-red-600">{errors.userRole.message}</p>
          )}
        </div>

        {/* User Password */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            User Password:
          </label>
          <br />
          <input
            type="password"
            placeholder=""
            className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            {...register("userPassword", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.userPassword && (
            <p className="text-xs text-red-600">
              {errors.userPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="py-2 w-full bg-black text-white rounded-lg mt-4"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
