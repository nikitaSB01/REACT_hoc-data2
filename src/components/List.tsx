import React from "react";
import Article from "./Article";
import Video from "./Video";

interface ListProps {
  list: { type: string; title?: string; url?: string; views: number }[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      {list.map((item, index) => {
        if (item.type === "video") {
          return <Video key={index} url={item.url!} views={item.views} />;
        } else if (item.type === "article") {
          return <Article key={index} title={item.title!} views={item.views} />;
        }
        return null;
      })}
    </>
  );
};

export default List;
