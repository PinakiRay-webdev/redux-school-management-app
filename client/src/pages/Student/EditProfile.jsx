import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { updateUser } from "../../Redux/slice/userSlice";

const EditProfile = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["User Info", "Details", "Address"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);

  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("studentCredentials"));

  const currentUser = useSelector((state) =>
    state.user.students.find((e) => e.Email === student.student_mail)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(
      "FirstName",
      currentUser?.FirstName === "" ? null : currentUser?.FirstName
    );
    setValue(
      "LastName",
      currentUser?.LastName === "" ? null : currentUser?.LastName
    );
    setValue("Phone", currentUser?.Phone === "" ? null : currentUser?.Phone);
    setValue("Email", currentUser?.Email === "" ? null : currentUser?.Email);
    setValue("Gender", currentUser?.Gender === "" ? null : currentUser?.Gender);
    setValue("DOB", currentUser?.DOB === "" ? null : currentUser?.DOB);
    setValue("State", currentUser?.State === "" ? null : currentUser?.State);
    setValue("City", currentUser?.City === "" ? null : currentUser?.City);
    setValue(
      "Landmark",
      currentUser?.DOB === "" ? null : currentUser?.Landmark
    );
  }, [currentUser]);

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const onSubmit = (data) => {
    const newData = {
      id: currentUser?.id,
      Phone: data.Phone,
      Gender: data.Gender,
      DOB: data.DOB,
      State: data.State,
      City: data.City,
      Landmark: data.Landmark,
    };

    if (activeStep === steps.length - 1) {
      toast.promise(
        delay,
        {
          pending: "Applying changes",
          success: "Changes made successfully",
          error: "Unable to apply changes",
        },
        { theme: "dark" }
      );

      setTimeout(() => {
        navigate('/studentDashboard/profile')
      }, 2000);

    } else {
      handleNext();
    }

    dispatch(updateUser(newData));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            {/* First and last name  */}
            <div className="flex gap-3">
              {/* first name  */}
              <div className="w-full">
                <Controller
                  name="FirstName"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="First Name"
                      className={`border ${
                        errors.FirstName ? "border-red-500" : "border-gray-300"
                      } p-2 w-full`}
                    />
                  )}
                />
                {errors.FirstName && (
                  <p className="text-red-500">{errors.FirstName.message}</p>
                )}
              </div>

              {/* last name  */}
              <div className="w-full">
                <Controller
                  name="LastName"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Last name"
                      className={`border ${
                        errors.LastName ? "border-red-500" : "border-gray-300"
                      } p-2 w-full`}
                    />
                  )}
                />
                {errors.LastName && (
                  <p className="text-red-500">{errors.LastName.message}</p>
                )}
              </div>
            </div>

            <Controller
              name="Phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Phone Number"
                  className={`border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}

            <Controller
              name="Email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Email"
                  className={`border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Controller
              name="Gender"
              control={control}
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              )}
            />
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}

            <Controller
              name="DOB"
              control={control}
              rules={{ required: "Birthday is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className={`border ${
                    errors.DOB ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.DOB && <p className="text-red-500">{errors.DOB.message}</p>}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Controller
              name="State"
              control={control}
              type="text"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your State"
                  className={`border ${
                    errors.State ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.State && (
              <p className="text-red-500">{errors.State.message}</p>
            )}

            <Controller
              name="City"
              control={control}
              type="text"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your City/Town"
                  className={`border ${
                    errors.City ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.City && (
              <p className="text-red-500">{errors.City.message}</p>
            )}

            <Controller
              name="Landmark"
              control={control}
              type="text"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="House / Flat No. / Landmark"
                  className={`border ${
                    errors.Landmark ? "border-red-500" : "border-gray-300"
                  } p-2 w-full`}
                />
              )}
            />
            {errors.Landmark && (
              <p className="text-red-500">{errors.Landmark.message}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`max-w-screen-lg mx-auto h-fit overflow-y-hidden ${
        sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"
      } transition-all duration-150 ease-in-out`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        {/* Stepper Section */}
        <div className="w-1/2">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-4">
          {renderStepContent(activeStep)}
          <div className="mt-4 flex space-x-2">
            {activeStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
