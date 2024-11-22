import MotionStack from "@/app/shared/components/MotionStack";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";
import { CardContent } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import { Notion } from "../../notion/Notion";
import MotionCard from "@/app/shared/components/MotionCard";

export const WorkCardPopup = () => {
  const { selectedPopupId, updateSelectedPopupId, notionId, updateNotionId } =
    useSelectedPoupIdStates();

  const resetId = () => {
    updateNotionId("");
    updateSelectedPopupId("");
  };

  return (
    <>
      {selectedPopupId && (
        <MotionStack
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
          <AnimatePresence>
            <MotionCard
              layoutId={selectedPopupId}
              sx={{
                width: "800px",
                height: "90%",
                overflowY: "auto",
                clipPath: "inset(0 round 4px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent>
                <Notion id={notionId} />
              </CardContent>
            </MotionCard>
          </AnimatePresence>
        </MotionStack>
      )}
    </>
  );
};
