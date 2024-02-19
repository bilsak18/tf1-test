import PlusIcon from "Src/svg/plus.svg";
import { memo } from "react";

export type PlusButtonProps = {
  onClick: () => void;
};

function PlusButton({ onClick }: PlusButtonProps) {
  return (
    <button
      title="Ajouter"
      className="bg-black/[0.7] rounded-lg size-8 flex place-items-center justify-center absolute bottom-1.5 right-1.5"
      onClick={onClick}
    >
      <div className="hover:scale-125">
        <PlusIcon />
      </div>
    </button>
  );
}

export default memo(PlusButton);
