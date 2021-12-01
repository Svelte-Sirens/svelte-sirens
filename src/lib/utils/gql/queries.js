import { gql } from 'graphql-request';

export const queryEvents = gql`
	query Events {
		events(orderBy: datetime_event_ASC) {
			slug
			title
			id
			datetime_event
			speakers {
				name
				handle
				handleUrl
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
				handleUrl
				picture {
					id
					url
				}
			}
		}
	}
`;

export const queryTalks = gql`
	query Talks {
		events(orderBy: datetime_event_ASC) {
			slug
			title
			id
			datetime_event
			talkUrl
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
				}
			}
		}
	}
`;
