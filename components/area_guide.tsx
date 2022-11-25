export default function AreaGuide() {
  // TODO: 各リンクをホバーすると同じグループにある島のリストをサジェストされるようにしたい
  return (
    <nav id="area_guide" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">愛媛県</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">松山市</a>
        </li>
        <li className="breadcrumb-item">
          <a href="">忽那諸島</a>
        </li>
      </ol>
    </nav>
  );
}
