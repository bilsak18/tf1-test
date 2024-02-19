import LeftArrowIcon from "Src/svg/leftArrow.svg";
import { memo } from "react";

export type PreviousButtonProps = {
  absolutePosition: string;
  onClick: () => void;
};
function PreviousButton({ absolutePosition, onClick }: PreviousButtonProps) {
  return (
    <button
      title="Précédent"
      className={`bg-[#313132] size-12 flex place-items-center justify-center ${absolutePosition}`}
      onClick={onClick}
    >
      <div className="hover:scale-105">
        <LeftArrowIcon />
      </div>
    </button>
  );
}

export default memo(PreviousButton);
