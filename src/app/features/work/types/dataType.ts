export type JobGridType = {
  jobName: string;
  duration: string;
  dataList: JobCardType[];
};

export type JobCardType = {
  title: string;
  image: string;
  notionId: string;
};
