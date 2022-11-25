export default function IslandContents() {
  //TODO: タブで切り替えできるようにしたい
  return (
    <div id="comment_area">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">タイトル</h5>
          <p className="card-text">ユーザーの投稿した文章</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">タイトル</h5>
          <p className="card-text">ユーザーの投稿した文章</p>
        </div>
      </div>
      <div id="image_area" className="row">
        <div className="image col-md-4">
          <img
            src="https://via.placeholder.com/300.png/09f/fff"
            className="img-thumbnail"
            alt="ユーザー投稿画像"
          ></img>
        </div>
        <div className="image col-md-4">
          <img
            src="https://via.placeholder.com/300.png/09f/fff"
            className="img-thumbnail"
            alt="ユーザー投稿画像"
          ></img>
        </div>
        <div className="image col-md-4">
          <img
            src="https://via.placeholder.com/300.png/09f/fff"
            className="img-thumbnail"
            alt="ユーザー投稿画像"
          ></img>
        </div>
      </div>
    </div>
  );
}
