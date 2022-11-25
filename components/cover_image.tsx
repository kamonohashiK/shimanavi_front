export default function CoverImage({ props }) {
  //TODO: 背景にいい感じの画像を使いたい
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.name}</h1>
        <p className="col-md-8 fs-6">{props.kana}</p>
        <a
          href={props.access_info}
          target="_blank"
          className="btn btn-primary"
          type="button"
          rel="noreferrer"
        >
          アクセス情報
        </a>
      </div>
    </div>
  );
}
