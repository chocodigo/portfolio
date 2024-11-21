import { create } from "zustand";

type State = {
  selectedPopupId: string;
  notionId: string;
};

type Action = {
  updateSelectedPopupId: (selectedPopupId: State["selectedPopupId"]) => void;
  updateNotionId: (notionId: State["notionId"]) => void;
};

export const usePopupIdStore = create<State & Action>((set) => ({
  selectedPopupId: "",
  updateSelectedPopupId: (selectedPopupId) => set(() => ({ selectedPopupId })),

  notionId: "",
  updateNotionId: (notionId) => set(() => ({ notionId })),
}));
