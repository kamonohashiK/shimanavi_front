export default function AreaGuide({ props }) {
  // TODO: 各リンクをホバーすると同じグループにある島のリストをサジェストされるようにしたい
  return (
    <nav id="area_guide" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{props.prefecture}</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">{props.city}</a>
        </li>
        <li className="breadcrumb-item">
          <a href="">{props.group}</a>
        </li>
      </ol>
    </nav>
  );
}
