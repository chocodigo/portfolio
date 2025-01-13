import axios from "axios";

interface ISendEmailProps {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: ISendEmailProps) => {
  const requestBody = {
    name,
    email,
    message,
  };
  const response = await axios.post("/api/contact", requestBody);

  return response;
};
