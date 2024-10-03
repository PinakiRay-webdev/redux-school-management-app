import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
const AssignMarks = ({ isMarksActivate, setIsMarksActivate, userID }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues:{
        "grade" : ""
    }
  });


  const selectedUser = useSelector((state) =>
    state.user.users.find((e) => e.id === userID)
  );


  const onSubmit = (data) => {
    Object.assign(selectedUser , {'marks' : data.marks , 'grade' : data.grade})
    console.log(selectedUser);
    
  };

  const closeForm = () => {
    setIsMarksActivate("scale-0");
  };



  if(selectedUser)
  {
      setValue("name" , `${selectedUser.FirstName} ${selectedUser.LastName}`)
  }

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-200 px-4 py-2 w-[20vw] ${isMarksActivate} transition-all duration-150`}
    >
      <header className="flex justify-end">
        <p onClick={closeForm} className="text-xl text-red-500">
          <IoIosCloseCircle />
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label>Name of the student</label>
        <br />
        <input
        {...register("name")}
          className="w-full py-2 px-3 ring-1 ring-red-500 rounded-lg my-2"
          type="text"
        />
        <br />
        <label>Assign Marks</label>
        <br />
        <input
            {...register("marks" , {
                required:{
                    value : true,
                    message : "This field is required"
                }
            })}
          type="number"
          className="w-full py-2 px-3 ring-1 ring-red-500 rounded-lg my-2"
        />
        <br />
        {errors.marks && <p className="text-xs text-red-500" >{errors.marks.message}</p>}
        <label>Assign Grade</label>
        <br />
        <select {...register("grade" , {
            required:{
                value : true,
                message : "This feild is required"
            }
        } )} className="w-full py-2 px-3">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        {errors.grade && <p className="text-xs text-red-500" >{errors.grade.message}</p>}

        <button className="w-full py-2 mt-5 bg-black text-white">
          Make changes
        </button>
      </form>
    </div>
  );
};

export default AssignMarks;
