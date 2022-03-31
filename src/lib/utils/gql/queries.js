import { gql } from 'graphql-request';

export const queryEvent = gql`
	query Event($slug: String!) {
		events(where: { slug: $slug }) {
			slug
			title
			id
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
				}
			}
		}
	}
`;

export const querySpeakers = gql`
	query Speakers {
		speakers(orderBy: tentativeDate_ASC) {
			name
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;

export const querySpeaker = gql`
	query Speaker($slug: String!) {
		speakers(where: { slug: $slug }) {
			name
			slug
			biography
			picture {
				id
				url
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
			coverImage {
				id
				url
			}
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

export const queryTalk = gql`
	query Talk($slug: String!) {
		events(where: { slug: $slug }) {
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

export const queryStreams = gql`
	query Stream($todaysDate: DateTime!) {
    streams(orderBy: datetime_stream_ASC, where: {datetime_stream_lt: $todaysDate}) {
			slug
			title
			id
			datetime_stream
    	streamUrl
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
      guests {
        name
        handle
        handleUrl
        picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
      }
		}
	}
`;

// query events before todaysDate

export const queryLatest = gql`
	query Latest($todaysDate: DateTime!) {
		events(orderBy: datetime_event_DESC, where: { datetime_event_lt: $todaysDate }) {
			slug
			title
			id
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
		streams(orderBy: datetime_stream_DESC, where: { datetime_stream_lt: $todaysDate }) {
			slug
			title
			datetime_stream
			streamUrl
			description
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
			guests {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
	}
`;

export const queryUpcoming = gql`
	query Upcoming($todaysDate: Datetime!) {
		speakers(orderBy: datetime_event_ASC, where: { datetime_event_lt: $todaysDate }) {
			name
			handle
			handleUrl
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;

export const queryUpcomingSlug = gql`
	query Event($slug: String!) {
		events(orderBy: datetime_event_ASC, where: { slug: $slug }) {
			slug
			title
			id
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
	}
	query Stream($slug: String!) {
		streams(orderBy: datetime_stream_ASC, where: { slug: $slug }) {
			slug
			title
			id
			datetime_stream
			streamUrl
			guests {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
	}
`;

export const queryUpcomingEvents = gql`
	query Upcoming($tentativeDate: Date, $todaysDate: DateTime!) {
		events(orderBy: datetime_event_ASC, where: { datetime_event_gt: $todaysDate }) {
			slug
			title
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}

		speakers(orderBy: tentativeDate_ASC, where: { tentativeDate_gt: $tentativeDate }) {
			name
			handle
			handleUrl
			tentativeDate
			picture {
				id
				url
				small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
			}
		}
		streams(orderBy: datetime_stream_ASC, where: { datetime_stream_gt: $todaysDate }) {
			slug
			title
			datetime_stream
			streamUrl
			description
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
			guests {
				name
				handle
				handleUrl
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
	}
`;
