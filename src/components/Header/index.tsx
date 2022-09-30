import "./style.scss";

export const Header = () => {
  return (
    <div className="headerMain">
      <div className="headerTitle">
        <h2>
          <a href="/home">DEVBERSI</a>
        </h2>
      </div>
      <div className="headerList">
        <a href="/liked-repo">Liked Repo's</a>
      </div>
    </div>
  );
};
