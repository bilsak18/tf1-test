import RightArrowIcon from "Src/svg/rightArrow.svg";
import { memo } from "react";

export type NextButtonProps = {
  absolutePosition: string;
  onClick: () => void;
};

function NextButton({ absolutePosition, onClick }: NextButtonProps) {
  return (
    <button
      title="Suivant"
      className={`bg-[#313132] size-12 flex place-items-center justify-center ${absolutePosition}`}
      onClick={onClick}
    >
      <div className="hover:scale-105">
        <RightArrowIcon />
      </div>
    </button>
  );
}

export default memo(NextButton);
