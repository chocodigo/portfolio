import MotionStack from "@/app/shared/components/MotionStack";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ContactForm = () => {
  return (
    <MotionStack
      sx={{
        gap: "10px",
        ".Mui-focused": {
          color: "#CE9EAB",
          "&::after": {
            borderBottom: "2px solid #CE9EAB",
          },
        },
      }}
    >
      <TextField required label="Your Name" variant="standard" />
      <TextField required label="Your Email Address" variant="standard" />
      <TextField
        id="standard-multiline-static"
        multiline
        variant="filled"
        rows={7}
      />
      <Button
        startIcon={<SendIcon />}
        variant={"contained"}
        sx={{
          background: "#CE9EAB",
        }}
      >
        Send Message
      </Button>
    </MotionStack>
  );
};
