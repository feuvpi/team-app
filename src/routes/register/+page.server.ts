/* eslint-disable @typescript-eslint/no-unused-vars */

import type { PageServerLoad } from './$types';
import {redirect} from '@sveltejs/kit'

import { SECRET_SIGNATURE } from '$env/static/private'
import crypto from "crypto";

// export async function POST({ request, locals }) {
//     const { email, password } = await request.json();

//     const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);

//     return new Response('Success...');
// }

export const actions = {
    register: async ({ request, locals }) => {
        const { name, email, password } = await request.json();
        // const form = await request.formData();
        // const name = form.get('name')?? '';
        // const email = form.get('email')?? '';
        // const password = form.get('password')?? '';

        if(!name || name == '' || !email || email == '' || !password || password == '') return false;

        const hash = crypto.createHash('sha256');
        hash.update(password as BinaryType);
        hash.update(SECRET_SIGNATURE);
        
        // -- obtain the hashed password
        const hashedPassword = hash.digest('hex');

        const data = {
            name,
            email,
            hashedPassword
        }
        const result = await localStorage.pb.collection('users').create(data)
        // hash.update

    }
}

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;