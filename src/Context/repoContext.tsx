import React, { createContext, useState } from "react";

interface ListContextData {
  repoList: any;
  setRepoList: any;
  repoLiked: any;
  setRepoLiked: any;
  addRepoLiked: any;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export const ListProvider = ({ children }: any) => {
  const [repoList, setRepoList] = useState<any[]>([]);
  const [repoLiked, setRepoLiked] = useState<any[]>([]);

  const addRepoLiked = (id: any) => {
    const selectedRepo = repoList.map((repo: string | any) => {
      if (repo.id === id) {
        if (!repo.curtida || repo.curtida === false) {
          return {
            ...repo,
            curtida: true,
          };
        } else if (repo.curtida && repo.curtida === true) {
          return {
            ...repo,
            curtida: false,
          };
        }
      } else return { ...repo };
    });
    setRepoList(selectedRepo);
    localStorage.setItem("repos", JSON.stringify(selectedRepo));
  };
  return (
    <ListContext.Provider
      value={{ repoList, setRepoList, repoLiked, setRepoLiked, addRepoLiked }}
    >
      {children}
    </ListContext.Provider>
  );
};
