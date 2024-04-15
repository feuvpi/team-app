/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const actions = {
    default: async ({ request, locals }) => {
        console.log("entrei")
        // const { email, password } = await request.json();
        const form = await request.formData();
        console.log(form)
        const email = form.get('email')?? '';
        const password = form.get('password')?? '';
        console.log('email: '+email);
        if(!email || email == '' || !password || password == '') return false;
        // const form = await request.formData();
        // const name = form.get('name')?? '';
        // const email = form.get('email')?? '';
        // const password = form.get('password')?? '';

        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        throw redirect(303, '/acesso')
        // return new Response('Success...');
    }
} satisfies Actions;

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;