/* eslint-disable @typescript-eslint/no-unused-vars */

import type { PageServerLoad } from './$types';
import {redirect} from '@sveltejs/kit'

import { SECRET_SIGNATURE } from '$env/static/private'
import crypto from "crypto";

export const actions = {
    register: async ({ request, locals }) => {
        const form = await request.formData();
        const name = form.get('name')?? '';
        const email = form.get('email')?? '';
        const password = form.get('password')?? '';

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