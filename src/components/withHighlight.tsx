import New from "./New";
import Popular from "./Popular";
import Video from "./Video";
import Article from "./Article";

// HOC для оборачивания компонентов в Popular или New
export function withHighlight(
  item: { type: string; title?: string; url?: string; views: number },
  key: number
) {
  let Component = null;

  if (item.type === "video") {
    Component = <Video key={key} url={item.url!} views={item.views} />;
  } else if (item.type === "article") {
    Component = <Article key={key} title={item.title!} views={item.views} />;
  }

  if (item.views > 1000) {
    return <Popular key={key}>{Component}</Popular>;
  } else if (item.views < 100) {
    return <New key={key}>{Component}</New>;
  }

  return Component;
}
