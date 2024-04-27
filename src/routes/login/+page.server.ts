/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const actions = {
    default: async ({ request, locals }) => {
        const { email, password } = await request.json();
        if(!email || email == '' || !password || password == '') return false;
        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        
        if(token){
            locals.currentUser = locals.pb.authStore.model;
            throw redirect(303, '/acesso')
        } else {
            console.log("entrei aquu login errado")
            return {
                fail: true}
        }

        // return new Response('Success...');
    }
} satisfies Actions;

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;