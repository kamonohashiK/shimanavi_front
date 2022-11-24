export default function CoverImage() {
  //背景にいい感じの画像を使いたい
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">島の名前</h1>
        <p className="col-md-8 fs-4">なんか文章？</p>
        <button className="btn btn-primary btn-lg" type="button">
          アクセス情報(外部リンク)
        </button>
      </div>
    </div>
  );
}
