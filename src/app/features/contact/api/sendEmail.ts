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
  const response = await axios.post(
    "https://portfolio-qsfskuoi1-haerim-chois-projects.vercel.app/api/contact",
    requestBody
  );

  return response;
};
