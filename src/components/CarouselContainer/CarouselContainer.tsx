import { useQuery } from "@apollo/client";
import { getFormattedPrograms } from "Src/formatters/getFormattedPrograms";
import { ProgramDocument, fetchPrograms } from "Src/services/programs";
import { useCallback, useMemo } from "react";
import Carousel from "../Carousel/Carousel";

function CarouselContainer() {
  const { fetchMore, data, updateQuery } = useQuery<ProgramDocument>(
    fetchPrograms,
    {
      variables: {
        offset: 0,
        limit: 12,
      },
    }
  );

  const programs = useMemo(() => getFormattedPrograms(data), [data]);

  const fetchNextPage = useCallback(async () => {
    const response = await fetchMore({
      variables: {
        offset: programs.length,
      },
    });

    updateQuery((previous) => {
      return { program: [...previous.program, ...response.data.program] };
    });
  }, [programs]);

  if (!data) {
    return;
  }

  return <Carousel fetchNextPage={fetchNextPage} programs={programs} />;
}

export default CarouselContainer;
