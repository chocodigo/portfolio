import { create } from "zustand";

type State = {
  isSticky: boolean;
};

type Action = {
  updateIsSticky: (isSticky: State["isSticky"]) => void;
};

export const useIsStickyStore = create<State & Action>((set) => ({
  isSticky: false,
  updateIsSticky: (isSticky) => set(() => ({ isSticky })),
}));
