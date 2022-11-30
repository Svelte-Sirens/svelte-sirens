import { WEBHOOK_URL } from '$env/static/private';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types'

export const prerender = false;

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();

        const discord = data.get('discord');
        const email = data.get('email');
        const name = data.get('name');
        const idea = data.get('idea');

        if (typeof email != 'string' || email.trim().length == 0) {
            return invalid(400, {
                success: false,
                error: 'Email is invalid',
                email, discord, name, idea
            })
        }

        const embed = {
            color: 623740,
            title: 'New Speaker Submission',
            fields: [
                { name: 'Email', value: email },
                { name: 'Name', value: name },
                { name: 'Talk Idea', value: idea },
                { name: 'Discord', value: discord || 'Not Submitted' },
            ],
        };

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: '@everyone',
                embeds: [embed]
            }),
        });

        return {
            success: true,
            email,
            discord,
            name,
            idea
        }
    }
}