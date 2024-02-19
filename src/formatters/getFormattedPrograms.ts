import { Program } from "Src/components/Carousel/types";
import { ProgramDocument } from "Src/services/programs";

export function getFormattedPrograms(
  data: ProgramDocument | undefined
): Program[] {
  if (!data) {
    return [];
  }

  return data.program.map(({ id, name, thumnail: { alt, url } }) => ({
    id,
    title: name,
    imgAlt: alt,
    imgUrl: url,
  }));
}
