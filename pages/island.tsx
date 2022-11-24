import AreaGuide from "../components/area_guide";
import CoverImage from "../components/cover_image";
import IslandContents from "../components/Island_contents";
import styles from "../styles/Home.module.css";

function Island() {
  return (
    <div className={styles.container}>
      <AreaGuide />
      <CoverImage />
      <IslandContents />
    </div>
  );
}

export default Island;
