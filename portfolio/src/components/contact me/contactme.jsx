import React, { useState } from "react";
import styles from "./contact_me.module.css";
import contact from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { enqueueSnackbar } from "notistack";
export const Contactme = () => {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [message, set_message] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_tlliu88",
          "template_8l2j1le",
          form.current,
          "RRBQeBZIo7kApgDb9"
        )
        .then(
          (result) => {
            set_name("");
            set_email("");
            set_message("");
            enqueueSnackbar("Message sent successfully !!", {
              variant: "success",
            });
          },
          (error) => {
            enqueueSnackbar("Message Failure ! ,We are working on it :) ", {
              variant: "error",
            });
            console.log(error.text);
          }
        );
    }
    // else {
    // //   enqueueSnackbar("Message can not be sent", { variant: "error" });
    // //   console.log("message cant be sent");
    // // }
  };
  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name.length === 0) {
      enqueueSnackbar("Please enter Name", {
        variant: "warning",
      });
      return false;
    }

    if (email.length === 0) {
      enqueueSnackbar("Please enter Email", {
        variant: "warning",
      });
      return false;
    }

    if (!emailRegex.test(email)) {
      enqueueSnackbar("Please enter a valid Email address", {
        variant: "warning",
      });
      return false;
    }

    if (message.length === 0) {
      enqueueSnackbar("Please enter a message", {
        variant: "warning",
      });
      return false;
    }
    if (message.length < 10) {
      enqueueSnackbar(
        "Please enter a message with a minimum length of 10 characters",
        {
          variant: "warning",
        }
      );
      return false;
    }
    return true;
  };

  const Namehandlechange = (name) => {
    set_name(name);
  };
  const Emailhandlechange = (email) => {
    set_email(email);
  };
  const Messagehandlechange = (message) => {
    set_message(message);
  };

  return (
    <div className={styles.wrapper} id="contactme">
      <h4 style={{ textAlign: "center", color: "#706ee5", fontWeight: "bold" }}>
        Contact me
      </h4>
      <div className={styles.inner_wrapper}>
        <form className={styles.form_cls} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              Namehandlechange(e.target.value);
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              Emailhandlechange(e.target.value);
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              Messagehandlechange(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>

        <div className={styles.img_div}>
          <img height={"100%"} width={"100%"} src={contact} alt="contact" />
        </div>
      </div>
    </div>
  );
};
