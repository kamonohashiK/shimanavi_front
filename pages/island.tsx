import styles from "../styles/Home.module.css";

function Island() {
  return (
    <div className={styles.container}>
      <div>
        <a href="">都道府県名</a>
        <a href="">市町村名</a>
      </div>
      <div>
        <a href="">地域名</a>
      </div>
      <small>
        都道府県等をホバーすると同じ結果がサジェストされるようにしたい
      </small>
      <div>島名</div>
      <div>カバー画像</div>
      <div>
        <div>交通手段ごとの</div>
        <a href="">アクセス情報(外部リンク)</a>
      </div>
      <div>
        タブで切り替え
        <div>口コミ一覧</div>
        <div>画像一覧</div>
      </div>
    </div>
  );
}

export default Island;
