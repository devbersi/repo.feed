import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { RepoCard } from "../../components/RepoCard";
import { ListContext } from "../../Context/repoContext";
import "./style.scss";

export const LikedRepo = () => {
  const { repoLiked, addRepoLiked } = useContext(ListContext);
  const likedRepos = JSON.parse(localStorage.getItem("repos") || "[]");
  console.log(likedRepos);

  return (
    <>
      <Header />
      <div className="likedMain">
        <div className="listLiked">
          {likedRepos.map((repo: any) => {
            if (repo?.curtida) {
              return (
                <RepoCard
                  name={repo.name}
                  description={repo.description}
                  link={repo.link}
                  id={repo.id}
                  repo={repo}
                />
              );
            } else {
              return;
            }
          })}
        </div>
        <div className="buttonLiked">
          <button onClick={() => addRepoLiked()}>Remove All</button>
        </div>
      </div>
    </>
  );
};
