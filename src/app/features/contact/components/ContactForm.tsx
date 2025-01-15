"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Alert, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSendEmail } from "../api/useSendEmail";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [openAlert, setOpenAlert] = useState({
    open: false,
    isSuccess: false,
    message: "",
  });

  const onSuccess = () => {
    setOpenAlert({
      open: true,
      isSuccess: true,
      message: "메일을 보냈습니다.",
    });
    reset();
  };

  const onError = () => {
    setOpenAlert({
      open: true,
      isSuccess: false,
      message: "메일 보내기에 실패했습니다.",
    });
  };

  const handleClose = () => {
    setOpenAlert({
      ...openAlert,
      open: false,
    });
  };

  const { mutate, isPending } = useSendEmail(onSuccess, onError);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <>
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
            label="이름"
            variant="standard"
            {...register("name")}
          />
          <TextField
            required
            label="이메일 주소"
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
            {...register("message")}
          />
          <LoadingButton
            type={"submit"}
            startIcon={<SendIcon />}
            varia-nt={"contained"}
            sx={{
              background: "#CE9EAB",
              color: "white",
            }}
            loading={isPending}
          >
            메일 보내기
          </LoadingButton>
        </MotionStack>
      </form>
      <Snackbar
        open={openAlert.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          severity={openAlert.isSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {openAlert.message}
        </Alert>
      </Snackbar>
    </>
  );
};
