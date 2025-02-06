import { useState } from "react";
import "./App.css";
/* import List from "./components/List";
 */ import { withHighlight } from "./components/withHighlight";

export default function App() {
  const [list /* setList */] = useState([
    {
      type: "video",
      url: "https://www.youtube.com/embed/rN6nlNC9WQA",
      views: 50,
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dVkK36KOcqs",
      views: 12,
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      views: 175,
    },
    { type: "article", title: "Секретные данные были раскрыты!", views: 1532 },
    {
      type: "video",
      url: "https://www.youtube.com/embed/TKmGU77INaM",
      views: 4253,
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      views: 12,
    },
  ]);

  // Создаём новый массив, где элементы оборачиваются через HOC
  const highlightedList = list.map((item, index) => withHighlight(item, index));

  return <>{highlightedList}</>;
}
