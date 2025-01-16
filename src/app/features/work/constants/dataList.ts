import { JobGridType } from "../types/dataType";

export const dataList: JobGridType[] = [
  {
    jobName: "태양법률사무소 개발자",
    duration: "2018.03 - 2020.07",
    date: new Date(2018, 3),
    dataList: [
      {
        title: "법률사무소 어플리케이션",
        image: "taeyang/등기어플.png",
        notionId: "1456ab489f6e8079aa63c21bdf48fb9a",
      },
      {
        title: "아파트 하자점검 어플리케이션",
        image: "taeyang/하자점검 어플리케이션.png",
        notionId: "1456ab489f6e8050b0a0db08e80c7e15",
      },
      {
        title: "아파트 하자점검 관리 시스템",
        image: "taeyang/하자점검 관리자페이지.png",
        notionId: "1456ab489f6e805ca2cacf12455255cf",
      },
    ],
  },
  {
    jobName: "Nara Controls 프론트엔드 개발자",
    duration: "2021.08 - 2021.10",
    date: new Date(2021, 8),
    dataList: [
      {
        title: "Nara Cloud - BMS",
        image: "nara/bms.png",
        notionId: "1456ab489f6e80319646f619245344f7",
      },
      {
        title: "Nara Cloud - 입찰분석 시스템",
        image: "nara/입찰분석 시스템.png",
        notionId: "1456ab489f6e80ce8ed9f36d1164ffc3",
      },
      {
        title: "삼양감속기 - 모바일 매뉴얼 페이지",
        image: "nara/삼양감속기.png",
        notionId: "1456ab489f6e80c2892ee1adf54b9683",
      },
      {
        title: "Nara Cloud - 매뉴얼 / 교육자료 페이지",
        image: "nara/bms매뉴얼.png",
        notionId: "1456ab489f6e8087b15ff06afe4ba007",
      },
      {
        title: "MEGA-NT / 유지보수",
        image: "nara/megant.png",
        notionId: "1456ab489f6e80be93cde5b037061ac3",
      },
    ],
  },
  {
    jobName: "원더피플 웹 프론트엔드 개발자",
    duration: "2022.02 - 2023.01",
    date: new Date(2022, 2),
    dataList: [
      {
        title: "슈퍼피플, 슈퍼피플2",
        image: "wonderpeople/superpeople.png",
        notionId: "13c6ab489f6e808f8a70e80e9a48aec7",
      },
    ],
  },
  {
    jobName: "Imagoworks 프론트엔드 개발자",
    duration: "2023.05 - 2024.09",
    date: new Date(2023, 5),
    dataList: [
      {
        title: "Dentbird Desktop App for Medit Link",
        image: "imagoworks/meditlink.png",
        notionId: "1456ab489f6e805f88a9eedbebd73d02",
      },
      {
        title: "Dentbird Crown",
        image: "imagoworks/crown_.png",
        notionId: "1496ab489f6e8068b5dfe802c5d9e320",
      },
      {
        title: "Dentbird Studio",
        image: "imagoworks/studio.png",
        notionId: "1496ab489f6e80b4857ee14e6a12983d",
      },
      {
        title: "Dentbird Modeler",
        image: "imagoworks/modeler.png",
        notionId: "1496ab489f6e8041a567f558f398116e",
      },
    ],
  },
  {
    jobName: "사이드 프로젝트",
    duration: "",
    date: new Date(2000, 1),
    dataList: [
      {
        title: "커피 유형 테스트",
        image: "coffee.png",
        notionId: "e4fd00314bfb4da691e51ed30550bee1",
      },
    ],
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());
