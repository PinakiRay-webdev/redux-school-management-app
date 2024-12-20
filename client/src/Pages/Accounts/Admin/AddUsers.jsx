import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { createMentor, createUser } from "../../../Redux/slice/userSlice"; // Adjust the path

const AddUsers = ({ isFormOpen, setIsFormOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      userRole: "",
    },
  });

  const dispatch = useDispatch();

  const selectedRole = watch("userRole");

  const closeForm = () => {
    setIsFormOpen("scale-0");
  };

  const onSubmit = async (data) => {
    const newUser = {
      FirstName: data.userFirstName,
      LastName: data.userLastName,
      Email: data.userEmail,
      Role: data.userRole,
      Password: data.userPassword,
      Class : data.studentClass,
      Marks : {physics : "" , maths : "" , chemistry : "" , biology : "" , IT : ""},
    };

    const newMentor = {
      FirstName: data.userFirstName,
      LastName: data.userLastName,
      Email: data.userEmail,
      Role: data.userRole,
      Password: data.userPassword,
      Department : data.mentorSubject
    }

    // Dispatch the createUser action to add the user to JSON server via Redux
    selectedRole === 'student' ? dispatch(createUser(newUser)) : dispatch(createMentor(newMentor))
    reset();
    closeForm();
  };

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#cae9ff] h-fit z-10 w-[30vw] rounded-xl transition-all duration-100 px-3 py-2 ${isFormOpen}`}
    >
      <header className="flex justify-end">
        <p
          onClick={closeForm}
          className="text-red-600 text-3xl text-right cursor-pointer"
        >
          <IoIosCloseCircle />
        </p>
      </header>

      <form className="py-3 relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 pb-3">
          {/* First Name */}
          <div>
            <label className="text-sm font-semibold text-zinc-600">
              First Name:
            </label>
            <br />
            <input
              type="text"
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

        {/* Email */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            Email ID:
          </label>
          <br />
          <input
            type="email"
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

        {/* Role */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            User Role:
          </label>
          <br />
          <select
            {...register("userRole", {
              required: {
                value: true,
                message: "This feild is required",
              },
            })}
            className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
          >
            <option value="mentor">mentor</option>
            <option value="student">student</option>
          </select>
          {errors.userRole && (
            <p className="text-xs text-red-600">{errors.userRole.message}</p>
          )}
        </div>

        {/* subject assign section for mentor  */}
        {selectedRole === "mentor" && (
          <>
            <label className="text-sm font-semibold text-zinc-600">
              Assign the subject
            </label>
            <br />
            <input
              type="text"
              {...register("mentorSubject", {
                required: {
                  value: true,
                  message: "This feild is required",
                },
              })}
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            />
          </>
        )}
        {errors.mentorSubject && (
          <p className="text-xs text-red-600">{errors.mentorSubject.message}</p>
        )}

        {/* class assign section for student  */}
        {selectedRole === "student" && (
          <>
            <label className="text-sm font-semibold text-zinc-600">
              class of student
            </label>
            <br />
            <input
              type="number"
              {...register("studentClass", {
                required: {
                  value: true,
                  message: "This feild is required",
                },
              })}
              className="w-full rounded-lg py-2 px-3 outline-none ring-1 ring-blue-300"
            />
          </>
        )}
        {errors.studentClass && (
          <p className="text-xs text-red-600">{errors.studentClass.message}</p>
        )}

        {/* Password */}
        <div className="pb-3">
          <label className="text-sm font-semibold text-zinc-600">
            Password:
          </label>
          <br />
          <input
            type="password"
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

        <div className="w-[100%] bottom-0">
          <button
            type="submit"
            className="py-2 w-full bg-black text-white rounded-lg mt-4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
