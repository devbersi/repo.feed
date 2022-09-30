import { useState, useContext, useEffect } from "react";
import { api } from "../../services/api";
import "./style.scss";
import { RepoCard } from "../../components/RepoCard";
import { Header } from "../../components/Header";
import { ListContext } from "../../Context/repoContext";

export const Home = () => {
  const { repoList, setRepoList } = useContext(ListContext);

  useEffect(() => {
    const listRepo = JSON.parse(localStorage.getItem("repos") || "[]");

    if (listRepo.length === 0) {
      api
        .get(`/repositories`)
        .then((res: any) => {
          setRepoList(res.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      setRepoList(listRepo);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <div className="content">
          <div className="listBox">
            {repoList.map((repo: any) => {
              return (
                <RepoCard
                  name={repo.name}
                  description={repo.description}
                  link={repo.html_url}
                  id={repo.id}
                  repo={repo}
                  liked={repo.curtida}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
