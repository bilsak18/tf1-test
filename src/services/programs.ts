import { gql } from "@apollo/client";

export type ProgramDocument = {
  program: {
    id: number;
    name: string;
    thumnail: {
      alt: string;
      url: string;
    };
  }[];
};

export const fetchPrograms = gql`
  query GetPrograms($offset: Int, $limit: Int) {
    program(offset: $offset, limit: $limit) {
      id
      name
      thumnail {
        alt
        url
      }
    }
  }
`;
