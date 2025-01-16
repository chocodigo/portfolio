export type JobGridType = {
  jobName: string;
  duration: string;
  date: Date;
  dataList: JobCardType[];
};

export type JobCardType = {
  title: string;
  image: string;
  notionId: string;
};
