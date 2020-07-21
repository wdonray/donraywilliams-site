import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import CenterContainer from "./CenterContainer";
import useStyles, { CustomText, NormalButton } from "../style/ContactStyle";
import * as _ from "lodash";
import { sendEmail } from "../api/sesAPI";
import { toast } from "react-toastify";

const Contact = ({ direction, config }) => {
  const classes = useStyles();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const notifyTimer = () =>
    toast.error(`Hey, relax and wait ${60 - seconds} seconds`, {
      hideProgressBar: true,
      position: "bottom-center",
      draggable: true,
      closeOnClick: true,
    });

  const notifyMissingValue = () =>
    toast.warning(`Email not set, a field is empty`, {
      hideProgressBar: true,
      position: "bottom-center",
      draggable: true,
      closeOnClick: true,
    });

  const emailSent = () =>
    toast.success(`Email sent, thanks for reaching out!`, {
      hideProgressBar: true,
      position: "bottom-center",
      draggable: true,
      closeOnClick: true,
    });

  let reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds === 30) {
          reset();
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h2"} className={classes.headerText}>
          Let's Chat
        </Typography>
        <Typography variant={"body2"} className={classes.bodyText}>
          I am always willing to hear new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I will
          always reply.
        </Typography>
        <div className={classes.form}>
          <div className={classes.topInputs}>
            <CustomText
              autoFocus={true}
              InputProps={{
                className: classes.nameText,
              }}
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <CustomText
              InputProps={{
                className: classes.emailText,
              }}
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.messageInput}>
            <CustomText
              InputProps={{
                className: classes.messageText,
              }}
              fullWidth
              size={"medium"}
              rows={12}
              multiline
              label="Message"
              variant="outlined"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <NormalButton
              onClick={(event) => {
                if (
                  _.trim(name) === "" ||
                  _.trim(name) === "" ||
                  _.trim(name) === ""
                ) {
                  notifyMissingValue();
                } else if (!isActive) {
                  sendEmail(name, email, message).then(emailSent());
                  setIsActive(true);
                } else {
                  notifyTimer();
                }
              }}
              size={"large"}
              variant="contained"
            >
              <Typography variant={"body2"} className={classes.button}>
                Email Me
              </Typography>
            </NormalButton>
          </div>
        </div>
      </div>
    </CenterContainer>
  );
};
export default Contact;
