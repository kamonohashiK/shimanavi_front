export default function SearchForm() {
  return (
    <div id="search_form">
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="都道府県名・地域名・島名で検索"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}
