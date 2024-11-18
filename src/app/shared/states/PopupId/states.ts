import { create } from "zustand";

type State = {
  selectedPopupId: string | null;
  notionId: string | null;
};

type Action = {
  updateSelectedPopupId: (selectedPopupId: State["selectedPopupId"]) => void;
  updateNotionId: (notionId: State["notionId"]) => void;
};

export const usePopupIdStore = create<State & Action>((set) => ({
  selectedPopupId: null,
  updateSelectedPopupId: (selectedPopupId) => set(() => ({ selectedPopupId })),

  notionId: null,
  updateNotionId: (notionId) => set(() => ({ notionId })),
}));
