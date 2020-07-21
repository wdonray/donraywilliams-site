import axios from "axios";
import config from "../data/config";

export const endPoints = {
  sendEmail:
    "https://ix4azjb3h3.execute-api.us-east-1.amazonaws.com/prod/sendEmail",
};

export const sendEmail = async (name, email, message) => {
  try {
    await axios.post(endPoints.sendEmail, {
      name,
      email,
      message,
      sourceEmail: config.email,
    });
  } catch (err) {
    return err;
  }
};
