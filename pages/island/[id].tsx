import AreaGuide from "../../components/area_guide";
import CoverImage from "../../components/cover_image";
import IslandContents from "../../components/Island_contents";

function Island() {
  const area_guide_info = {
    prefecture: "愛媛県",
    city: "松山市",
    group: "忽那諸島",
  };

  const island_info = {
    name: "中島",
    kana: "なかじま",
    access_info: "http://www.nakajimakisen.co.jp/index.shtml",
  };

  const posts = [
    { title: "タイトル", content: "ユーザーが書いた文章" },
    { title: "タイトル", content: "ユーザーが書いた文章" },
    { title: "タイトル", content: "ユーザーが書いた文章" },
  ];

  const images = [
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
    { src: "https://via.placeholder.com/300.png/09f/fff" },
  ];

  return (
    <div>
      <AreaGuide props={area_guide_info} />
      <CoverImage props={island_info} />
      <IslandContents posts={posts} images={images} />
    </div>
  );
}

export default Island;
