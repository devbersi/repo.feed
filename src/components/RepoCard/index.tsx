import { useContext, useState } from "react";
import "./style.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ListContext } from "../../Context/repoContext";

interface IRepoCard {
  name: string;
  description: string;
  link: string;
  id: any;
  repo: any;
  liked?: any;
}

export const RepoCard = ({
  id,
  name,
  description,
  link,
  repo,
  liked,
}: IRepoCard) => {
  const { repoLiked, setRepoLiked, repoList, addRepoLiked } =
    useContext(ListContext);

  const toggleLike = () => {
    addRepoLiked(id);
  };

  const page = window.location.pathname;

  return (
    <div className="cardMain">
      <div className="infoContainer">
        <div className="title">
          <a href={link}>{name}</a>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="buttonContainer">
        {page === "/home" ? (
          <button className="buttonLike" onClick={() => toggleLike()}>
            {liked ? (
              <AiFillHeart className="iconHeartFill" />
            ) : (
              <AiOutlineHeart className="iconHeart" />
            )}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
