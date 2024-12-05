import axios from "axios";

interface IProps {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: IProps) => {
  const requestBody = {
    name,
    email,
    message,
  };
  const response = await axios.post("/api/contact", requestBody);

  return response;
};
