"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function FormComp() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {isSubmitted && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg">
          Form submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:max-w-[600px] w-full mx-auto bg-[#FFFFFF] p-4 flex flex-col rounded-xl gap-4 shadow-2xl mt-5 mb-10"
      >
        <div className="md:flex items-center justify-between my-2">
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-semibold">
              Name
            </label>
            <input
              {...register("name", {
                required: "This is required",
                pattern: {
                  value: /^[a-z]+$/,
                  message: "Only lowercase letters are allowed",
                },
              })}
              type="text"
              placeholder="Enter your name"
              autoFocus
              className="w-full px-4 py-3 rounded-[37px] outline outline-1"
            />
            {errors.name && (
              <p className="text-red-500 text-[12px]">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              autoFocus
              className="w-full px-4 py-3 rounded-[37px] outline outline-1"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="text-lg font-semibold">
            Subject
          </label>
          <input
            {...register("subject", {
              required: "Subject is required",
            })}
            type="text"
            placeholder="Write a subject"
            autoFocus
            className="w-full px-4 py-3 rounded-[37px] outline outline-1"
          />
          {errors.subject && (
            <p className="text-red-500 text-[12px]">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-lg font-semibold">
            Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            cols="10"
            rows="4"
            placeholder="Write your message"
            autoFocus
            className="w-full rounded-lg px-3 py-2 outline outline-1"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-[12px]">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-center my-3 px-8 py-4 bg-[#AD343E] rounded-[37px] text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
