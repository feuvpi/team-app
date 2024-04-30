/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import PocketBase from 'pocketbase';


async function isServerUp(): Promise<boolean>{
    try{
        const response = await fetch(`http://127.0.0.1:8090/api/health`);
        if(response)
            return true;
        else
            return false;
    } catch(error){
        // console.log(error)
    }
    return false;
}


export const actions = {
    login: async ({ request, locals }) => {
        console.log("entrei")
        // const { email, password } = await request.json();
        const form = await request.formData();
        const email = form.get('email') as string ?? '' as string;
        const password = form.get('password')as string ?? '' as string;
        if(!email || email == '' || !password || password == '') return false;

        if(locals.pb == null){
            try{
                locals.pb = new PocketBase('http://127.0.0.1:8090');
                locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');
            } catch (error){
                console.log(error)
            }

        }


            const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
            if(token && record) {
                console.log("entrou credenciais corretas")
                locals.currentUser = locals.pb.authStore.model;
                throw redirect(303, '/acesso'); // Successful login, redirect to '/acesso'
            } else {
                console.log("Usuário e/ou senha invalido(s)")
                return { success: false, message: 'Invalid email or password. Please try again.' };
            }


    },
} satisfies Actions;

export const load = (async () => {
    const uptime = await isServerUp();
    if(!uptime){
        console.log("server down")
        throw redirect(303, '/server-down')}
    return {};
}) satisfies PageServerLoad;