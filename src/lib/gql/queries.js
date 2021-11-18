import { gql } from 'graphql-request';

export const queryEvents = gql`
  query Events {
    events {
      slug
      title
      id
      datetime_event
      speakers {
        name
        handle
        picture {
          id
          url
        }
      }
    }
  }
`;

export const queryEvent = gql`
  query Event($slug: String!) {
    events(where: { slug: $slug }) {
      slug
      title
      id
      datetime_event
      speakers {
        name
        handle
        picture {
          id
          url
        }
      }
    }
  }
`;
