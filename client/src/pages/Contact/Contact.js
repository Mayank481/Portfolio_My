import React, { useState } from "react";
import { API_CONTACT } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { contact_us_IMG } from "../../assets/links/links";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const valueChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "msg") {
      setMsg(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.warn("Please fill all fields", {
          theme: "colored",
        });
      }
      const res = await axios.post(API_CONTACT, { name, email, msg });
      if (res.data.success) {
        toast.success(res.data.message, { theme: "colored" });
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message, { theme: "colored" });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={contact_us_IMG} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with:
                      <a href="https://www.linkedin.com/in/samartha-agrawal-807b06165/">
                        <FaLinkedin
                          color="blue"
                          size={30}
                          className="ms-2 FaLinkedin"
                        />
                      </a>
                      <a href="https://github.com/samarthaagrawal29">
                        <FaGithub
                          color="black"
                          size={30}
                          className="ms-2 icon"
                        />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center"> OR </small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Write your FullName"
                      className="mb-3"
                      value={name}
                      onChange={valueChange}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Write your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={valueChange}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your Message"
                      className="mb-3"
                      value={msg}
                      onChange={valueChange}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button mt-3" onClick={handleSubmit}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
