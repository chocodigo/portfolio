export const sectionName = {
  ABOUT: "about",
  SKILL: "skill",
  EXPERIENCE: "experience",
  WORK: "work",
  CONTACT: "contact",
} as const;

export type SectionRefs = (typeof sectionName)[keyof typeof sectionName];
