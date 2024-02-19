import { memo, useMemo, useState } from "react";
import Card from "../Card/Card";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import { Row } from "../Row/Row";
import { Program } from "./types";

export type CarouselProps = {
  itemsPerPage?: number;
  fetchNextPage: () => void;
  programs: Program[];
};

function Carousel({
  programs,
  itemsPerPage = 6,
  fetchNextPage,
}: CarouselProps) {
  const [page, setPage] = useState<number>(0);
  const programToRender = useMemo(
    () =>
      programs
        .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
        .map(({ id, imgAlt, imgUrl, title }) => (
          <li key={id}>
            <Card
              imgAlt={imgAlt}
              imgUrl={imgUrl}
              title={title}
              onClick={() => {}}
              onPlusClick={() => {}}
            />
          </li>
        )),
    [programs, page]
  );

  const isPreviousButtonDisplayed = page > 0;
  const isNextButtonDisplayed =
    page < Math.ceil(programs.length / itemsPerPage - 1);

  const onPreviousClick = () => {
    setPage(page - 1);
  };

  const onNextClick = () => {
    fetchNextPage();
    setPage(page + 1);
  };

  return (
    <div className="relative px-6">
      {isPreviousButtonDisplayed && (
        <PreviousButton
          absolutePosition="absolute z-10 left-0 bottom-1/2"
          onClick={onPreviousClick}
        />
      )}
      <Row>{programToRender}</Row>
      {isNextButtonDisplayed && (
        <NextButton
          absolutePosition="absolute z-10 right-0 bottom-1/2"
          onClick={onNextClick}
        />
      )}
    </div>
  );
}

export default memo(Carousel);
