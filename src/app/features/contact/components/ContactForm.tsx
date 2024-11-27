import MotionStack from "@/app/shared/components/MotionStack";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  contents: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MotionStack
        sx={{
          gap: "10px",
          ".Mui-focused": {
            "&.MuiFormLabel-root": {
              color: "#CE9EAB",
            },
            "&::after": {
              borderBottom: "2px solid #CE9EAB",
            },
          },
        }}
      >
        <TextField
          required
          label="Your Name"
          variant="standard"
          {...register("name")}
        />
        <TextField
          required
          label="Your Email Address"
          variant="standard"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message || ""}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <TextField
          id="standard-multiline-static"
          multiline
          variant="filled"
          rows={7}
          {...register("contents")}
        />
        <Button
          type={"submit"}
          startIcon={<SendIcon />}
          variant={"contained"}
          sx={{
            background: "#CE9EAB",
          }}
        >
          Send Message
        </Button>
      </MotionStack>
    </form>
  );
};
