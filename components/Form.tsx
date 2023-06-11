import React, { useState, ChangeEvent, useRef } from "react";
import jsonbinService from "../jsonbinService";
import { useForm } from "react-hook-form";
import Image from "next/image";

type Inputs = {
  email: string;
};

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
    },
  });

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      const placeholderValue = inputRef.current.getAttribute("placeholder");
      navigator.clipboard.writeText(placeholderValue || "").then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      });
    }
  };

  const onSubmit = async (data: Inputs) => {
    try {
      await jsonbinService.saveEmail(data.email);
      setSuccessMessage("Email saved successfully");
      console.log("Email saved successfully");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  return (
    <div className="bg-[#F8F4F9] h-[700px] p-[64px] flex flex-col justify-center items-center border border-[#1F343E] rounded-xl">
      <div className="h-[100%] flex flex-col justify-between ">
        <header>
          <h1 className="text-4xl tracking-wider font-bold font-caveat text-left text-[#1F343E] leading-[62px]">
            REFER FRIENDS AND GET REWARDS
          </h1>
          <p className="font-noto font-normal text-[#1F343E] p-0 text-left mt-[28px]">
            Refer your friends to us and earn hotel booking vouchers. I give you
            1 coin for each friend that installs our extension. Minimum cash-out
            at 20 coins.
          </p>
          <form
            className="flex flex-col items-center mt-[40px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errors.email && (
              <div className="w-full mb-4">
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              </div>
            )}
            {successMessage ? (
              <div className="w-full mb-4 flex items-center gap-3">
                <Image
                  src="../assets/success.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                <span className="font-bold text-[#1F343E] text-sm">
                  {successMessage}
                </span>
              </div>
            ) : (
              <></>
            )}
            {successMessage ? (
              <>
                <div className="flex border border-[#1F343E] rounded-lg  w-full">
                  <input
                    id="email"
                    ref={inputRef}
                    className={`flex-grow justify-center border-r-0 rounded-none text-black rounded-l-md px-4 pt-4 pb-4`}
                    placeholder="https://ratepunk.com/referral"
                    disabled
                    value={""}
                  />
                  <button
                    className="flex-grow bg-[#4EB3E3] border-black hover:bg-blue-600 text-white rounded-r-md px-4 border-r-black border-l py-2 focus:outline-none"
                    onClick={handleCopyClick}
                  >
                    {copySuccess ? "Copied!" : "Copy"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex items-center w-[100%]">
                  <Image
                    src="../assets/email.svg"
                    alt="Mail Icon"
                    className="absolute left-3 top-5 h-5 w-5 text-gray-400"
                    width={5}
                    height={5}
                  />
                  <input
                    {...register("email", {
                      required: "This is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address.",
                      },
                    })}
                    id="email"
                    className={`border ${
                      errors.email ? "border-red-500" : "border-[#1F343E]"
                    } text-black rounded-md px-10 w-[100%] py-2 mb-4 outline-none pl-10  pt-4 pb-4`}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#4EB3E3] hover:bg-blue-600 w-[100%] border border-[#1F343E] text-white rounded-md px-4 py-2 pt-4 pb-4 focus:outline-none"
                >
                  Submit
                </button>
              </>
            )}
          </form>
        </header>
        <div>
          <div className="text-[#6D7A80]">
            <p>Limits on max rewards apply.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
