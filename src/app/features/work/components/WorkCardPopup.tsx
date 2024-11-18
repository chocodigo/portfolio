import MotionButton from "@/app/shared/components/MotionButton";
import MotionStack from "@/app/shared/components/MotionStack";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";
import { Card, CardContent, CardHeader } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Notion } from "../../notion/Notion";

export const WorkCardPopup = () => {
  const { selectedPopupId, updateSelectedPopupId, notionId, updateNotionId } =
    useSelectedPoupIdStates();

  const resetId = () => {
    updateNotionId(null);
    updateSelectedPopupId(null);
  };

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
          onClick={resetId}
        >
          <Card sx={{ width: "800px", overflowY: "auto" }}>
            <CardHeader
              action={
                <MotionButton>
                  <CloseIcon onClick={resetId} />
                </MotionButton>
              }
              title={selectedPopupId}
            />
            <CardContent>
              <Notion id={notionId} />
            </CardContent>
          </Card>
        </MotionStack>
      )}
    </AnimatePresence>
  );
};
