import { create } from "zustand";

type State = {
  selectedPopupId: string | null;
};

type Action = {
  updateSelectedPopupId: (selectedPopupId: State["selectedPopupId"]) => void;
};

export const usePopupIdStore = create<State & Action>((set) => ({
  selectedPopupId: null,
  updateSelectedPopupId: (selectedPopupId) => set(() => ({ selectedPopupId })),
}));
