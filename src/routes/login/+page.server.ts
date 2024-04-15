/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PageServerLoad } from './$types';

export const actions = {
    register: async ({ request, locals }) => {
        const { email, password } = await request.json();
        console.log('email: '+email);
        if(!email || email == '' || !password || password == '') return false;
        // const form = await request.formData();
        // const name = form.get('name')?? '';
        // const email = form.get('email')?? '';
        // const password = form.get('password')?? '';

        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        return new Response('Success...');
    }
}

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;