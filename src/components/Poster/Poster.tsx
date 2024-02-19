import { memo } from "react";

export type PosterProps = {
  src: string;
  alt: string;
};

function Poster({ src, alt }: PosterProps) {
  return (
    <picture>
      <img
        className="rounded-lg aspect-poster"
        src={src}
        alt={alt}
        width={200}
        loading="lazy"
      />
    </picture>
  );
}

export default memo(Poster);
