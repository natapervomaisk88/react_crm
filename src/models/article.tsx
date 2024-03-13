export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  isShow: boolean;
};

export const list_of_articles: Array<Article> = [
  {
    id: 1,
    title: "JS",
    description: "This is JS",
    isShow: true,
    image: "js.png",
  },
  {
    id: 2,
    title: "Angular",
    description: "This is Angular",
    image: "ng.png",
    isShow: true,
  },
  {
    id: 3,
    title: "React",
    description: "This is React",
    image: "react.png",
    isShow: true,
  },
  {
    id: 4,
    title: "Vue",
    description: "This is Vue",
    image: "vue.png",
    isShow: true,
  },
];
