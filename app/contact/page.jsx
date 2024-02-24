"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
   const notify = () => {
      toast.success("Email sent successfully !", {});     
   };

   const errorNotify = () => {
      toast.error("Error Notification, Fill the form properly !", {
         position: "top-left",
      });
   };
   const [formData, setFormData] = useState({
      email: "",
      subject: "",
      from: "",
      message: "",
   });
   const [error, setError] = useState("");

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }));
   };

   const seviceID = "service_cfwxxlx";
   const templateID = "template_la6qqtg";
   const publicKey = "lJdvjfsdy_LkNyhyo";
   const templateParams = {
      from_name: formData.from,
      message: formData.message,
      email: formData.email,
      subject: formData.subject,
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         !formData.from ||
         !formData.message ||
         !formData.email ||
         !formData.subject
      ) {
      }

      emailjs
         .send(seviceID, templateID, templateParams, publicKey)
         .then((response) => {
            notify();
            setFormData({
               email: "",
               subject: "",
               from: "",
               message: "",
            });
         })
         .catch((error) => {
            console.log(error, "email not sent");
            errorNotify();
            setFormData({
               email: "",
               subject: "",
               from: "",
               message: "",
            });
         });
   };

   return (
      <main className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 mt-24">
         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <form onSubmit={handleSubmit}>
               <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                     Email:
                  </label>
                  <input
                     required
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-300 sm:text-sm sm:leading-6"
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                     Subject:
                  </label>
                  <input
                     required
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-300 sm:text-sm sm:leading-6"
                     type="text"
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                     From:
                  </label>
                  <input
                     required
                     className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-300 sm:text-sm sm:leading-6"
                     type="text"
                     name="from"
                     value={formData.from}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                     Message:
                  </label>
                  <textarea
                     required
                     className="block w-full h-19 p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-300 sm:text-sm sm:leading-6"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                  />
               </div>
               {error && (
                  <p className="text-black italic text-xs font-light">
                     {error}
                  </p>
               )}
               <button
                  type="submit"
                  disabled={
                     !formData.email || !formData.subject || !formData.from
                  }
                  className=" mt-4 flex w-full justify-center rounded-md bg-[#898989] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent hover:border hover:border-[#898989] focus-visible:outline focus-visible:outline-2 hover:text-black focus-visible:outline-offset-2 focus-visible:outline-grey-600"
               >
                  Send
               </button>
            </form>
         </div>
         <ToastContainer />
      </main>
   );
};
export default Contact;
