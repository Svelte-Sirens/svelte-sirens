import { events } from '@api/events.js';

export const get = async () => {
	try {
		return {
			status: 200,
			body: { events }
		};
	} catch (error) {
		return {
			status: 500,
			body: [
				{
					error: error.message
				}
			]
		};
	}
};
