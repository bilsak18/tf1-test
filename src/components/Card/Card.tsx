import { memo } from "react";
import PlusButton from "../PlusButton/PlusButton";
import Poster from "../Poster/Poster";

export type CardProps = {
  imgAlt: string;
  imgUrl: string;
  onClick: () => void;
  onPlusClick: () => void;
  title: string;
};

function Card({ imgAlt, imgUrl, onClick, onPlusClick, title }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="w-card"
      aria-label={title}
      role="button"
      tabIndex={1}
    >
      <div className="relative">
        <PlusButton onClick={onPlusClick} />
        <Poster alt={imgAlt} src={imgUrl} />
      </div>
      <div className="dark:text-white text-center text-wrap text-sm mt-3 line-clamp-2">
        {title}
      </div>
    </div>
  );
}

export default memo(Card);
