import React from "react";
import { IArticle } from "./test-interface";

const testArticle: IArticle = {
  articleId: "1234",
  description: "this is a standard description",
  title: "article title"
};

function AboutMe() {
  const initialArticle: IArticle = { ...testArticle };

  return (
    <div>
      {initialArticle.articleId}
      <br />
      {initialArticle.title}
      <br />
      {initialArticle.description}
    </div>
  );
}

export default AboutMe;
