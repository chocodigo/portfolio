import { useIsStickyStore } from "./states";

export const useSelectedPoupIdStates = () => {
  const isSticky = useIsStickyStore((state) => state.isSticky);
  const updateIsSticky = useIsStickyStore((state) => state.updateIsSticky);

  return {
    isSticky,
    updateIsSticky,
  };
};
