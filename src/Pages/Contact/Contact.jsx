import React, { useRef, useState } from "react";
import contact from "../../assets/contact1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      phone_number: phoneNumber,
      subject: subject,
      message: message,
      email,
    };
    setLoading(true);
    const nameValue = form.current.name.value;
    const emailValue = form.current.email.value;
    const subjectValue = form.current.subject.value;
    const messageValue = form.current.message.value;
    const phoneValue = form.current.phoneNumber.value;

    if (
      [nameValue, emailValue, subjectValue, messageValue, phoneValue].some(
        (filed) => filed == ""
      )
    ) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "All Fileds Empty",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICEID}`,
        `${import.meta.env.VITE_TEMPLATEID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_USERID}`,
        }
      )
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "FAILED...",
            showConfirmButton: false,
          });
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact">
      <h5 className=" text-lg text-center font-semibold  tracking-wide text-violet-600">
        CONTACT
      </h5>
      <h1 className="lg:text-6xl md:text-6xl sm:text-4xl text-4xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 pt-3 pb-10  text-center">
        Contact With Me
      </h1>

      {/* contact cord */}
      <div className="lg:flex md:flex justify-between items-center gap-5">
        <div className=" w-full lg:h-[600px]  md:h-[630px] h-[630px] shadow-md p-5 rounded-md shadow-violet-500/50 group/pic lg:mb-0 md:mb-0  mb-5">
          <div className=" w-full h-[250px] rounded-lg overflow-hidden shadow-lg group-hover/pic:shadow-black/60 duration-300 transition-all">
            <img
              className=" w-full object-cover h-full rounded-md group-hover/pic:scale-110 transition-all duration-300"
              src={contact}
              alt=""
            />
          </div>
          <h2 className="pt-8 text-xl font-semibold tracking-tight">
            Sukar Tongchongya
          </h2>

          <h5 className="text-lg font-bold text-violet-500">React Developer</h5>
          <p className="py-3 text-lg text-gray-500">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>

          <ul>
            <li className="text-sm font-bold text-gray-700 tracking-wide">
              Phone : 01634211352
            </li>
            <li className="text-sm font-bold text-gray-700 tracking-wide">
              Email : sukartangchangya@gmail.com
            </li>
          </ul>

          {/* find with me */}
          <div className=" w-full flex flex-col justify-center items-center lg:items-start md:items-start">
            <h2 className=" text-lg font-semibold tracking-wide py-2">
              FIND WITH ME
            </h2>
            <div className=" flex items-center gap-5">
              <Link
              // to="https://www.facebook.com/profile.php?id=100011271842054"
              // target="_blank"
              >
                {" "}
                <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                  <FaFacebookF
                    size="22px"
                    className=" group-hover:scale-125 scale-100 transition-all duration-300 "
                  />
                </div>
              </Link>
              <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                <FaTwitter
                  size="22px"
                  className=" group-hover:scale-125 scale-100 transition-all duration-300 "
                />
              </div>
              <Link
              // to="https://www.linkedin.com/in/md-sazzad-hossain-b11a31254/"
              // target="_blank"
              >
                {" "}
                <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                  <FaLinkedinIn
                    size="22px"
                    className=" group-hover:scale-125 scale-100 transition-all duration-300 "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full lg:h-[600px]  md:h-[630px] h-[630px] shadow-md p-5 rounded-md shadow-violet-500/50 group/pic">
          <form ref={form} className="w-full" onSubmit={handelSubmit}>
            <div className="flex justify-between items-center gap-3">
              <div className="w-full">
                <label
                  className="text-lg font-bold py-2 inline-block text-gray-500"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <div>
                  {" "}
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    id=""
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="text-lg font-bold py-2 inline-block text-gray-500"
                  htmlFor="name"
                >
                  Phone Number
                </label>
                <div>
                  {" "}
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55"
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="pt-3">
              <label
                className="text-lg font-bold py-2 inline-block text-gray-500"
                htmlFor="name"
              >
                Email
              </label>
              <div>
                {" "}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55"
                  type="email"
                  name="email"
                  placeholder="Email"
                  id=""
                />
              </div>
            </div>
            <div className="pt-3">
              <label
                className="text-lg font-bold py-2 inline-block text-gray-500"
                htmlFor="name"
              >
                Subject
              </label>
              <div>
                {" "}
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  id=""
                />
              </div>
            </div>
            <div className="pt-3">
              <label
                className="text-lg font-bold py-2 inline-block text-gray-500"
                htmlFor="name"
              >
                Your Message
              </label>
              <div>
                {" "}
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  row="4"
                  className="w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55"
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  id=""
                />
              </div>
            </div>

            <div className="pt-8 group">
              <button
                type="submit"
                className=" w-full text-center bg-gradient-to-r from-violet-500 to-pink-500 py-3 border-none outline-none rounded-lg text-white font-semibold tracking-wide flex justify-center items-center gap-5 group-hover:shadow-md group-hover:shadow-gray-600/55 duration-300 transition-all"
              >
                {loading ? "SENDING.." : "SEND MESSAGE"}{" "}
                <span className="group-hover:pl-2 duration-300 transition-all">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* contact cord */}
    </div>
  );
};

export default Contact;
