import Link from "next/link";

export default function IslandsPerArea() {
  return (
    <div id="islands_per_area">
      <h3 className="text-center">地域から探す</h3>

      <h4 className="text-center">北海道・東北</h4>
      <h4 className="text-center">関東</h4>
      <h4 className="text-center">北陸</h4>
      <h4 className="text-center">中部</h4>
      <h4 className="text-center">関西</h4>
      <h4 className="text-center">中国</h4>
      <h4 className="text-center">四国</h4>
      <div className="row">
        <div className="col-md-6">
          <h5 className="text-center">愛媛県</h5>
          <div className="row">
            <Link href="/island/a" className="text-center col-md-4">
              中島(松山市)
            </Link>
            <Link href="/island/b" className="text-center col-md-4">
              睦月島(松山市)
            </Link>
            <Link href="/island/c" className="text-center col-md-4">
              野忽那島(松山市)
            </Link>
            <Link href="/island/d" className="text-center col-md-4">
              大島(今治市)
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="text-center">高知県</h5>
        </div>
        <div className="col-md-6">
          <h5 className="text-center">香川県</h5>
        </div>
        <div className="col-md-6">
          <h5 className="text-center">徳島県</h5>
        </div>
      </div>

      <h4 className="text-center">九州</h4>
      <h4 className="text-center">沖縄</h4>
    </div>
  );
}
