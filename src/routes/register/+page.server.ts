/* eslint-disable @typescript-eslint/no-unused-vars */

import type { PageServerLoad } from './$types';
import {fail, redirect} from '@sveltejs/kit'

import { SECRET_SIGNATURE } from '$env/static/private'
import crypto from "crypto";
import type { ClientResponseError } from 'pocketbase';

// export async function POST({ request, locals }) {
//     const { email, password } = await request.json();

//     const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);

//     return new Response('Success...');
// }

export const actions = {
    register: async ({ request, locals }) => {
        const { name, email, password, passwordConfirm } = await request.json();
        // const form = await request.formData();
        // const name = form.get('name')?? '';
        // const email = form.get('email')?? '';
        // const password = form.get('password')?? '';

        if(!name || name == '' || !email || email == '' || !password || password == '') return fail(400, { emailRequired: email === null, passwordRequired: password === null});

        // const hash = crypto.createHash('sha256');
        // hash.update(password as BinaryType);
        // hash.update(SECRET_SIGNATURE);
        
        // // -- obtain the hashed password
        // const hashedPassword = hash.digest('hex');

        const data = {
            name,
            email,
            password,
            passwordConfirm
        }

        try{
            await locals.pb.collection('users').create(data);
            await locals.pb.collection('users').authWithPassword(email, password.toString());
            await locals.pb.collection('users').requestVerification(email);
        } catch (error) {
            const errorObj = error as ClientResponseError;
            return fail(500, {fail: true, message: errorObj.data.message })
        }
        throw redirect(303, '/acesso');
    }
}

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;