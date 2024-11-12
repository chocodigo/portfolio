import MotionButton from "@/app/shared/components/MotionButton";
import MotionStack from "@/app/shared/components/MotionStack";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";
import { Card, CardHeader } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

export const WorkCardPopup = () => {
  const { selectedPopupId, updateSelectedPopupId } = useSelectedPoupIdStates();
  return (
    <AnimatePresence>
      {selectedPopupId && (
        <MotionStack
          layoutId={selectedPopupId}
          sx={{
            position: "fixed",
            zIndex: 200,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card>
            <CardHeader
              action={
                <MotionButton>
                  <CloseIcon onClick={() => updateSelectedPopupId(null)} />
                </MotionButton>
              }
              title={selectedPopupId}
            />
          </Card>
        </MotionStack>
      )}
    </AnimatePresence>
  );
};
