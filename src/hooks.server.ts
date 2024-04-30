// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const unprotectedRoutes = ['/', '/register', '/login', 'server-down']

function isPathAllowed(path: string){
    return unprotectedRoutes.some(allowedPath =>
        path == allowedPath || path.startsWith(allowedPath + '/'))
}



/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {


 

        if(event.locals.pb == null){
            event.locals.pb = new PocketBase('http://127.0.0.1:8090');
            console.log(event.locals.pb)
            if(event.locals.pb !== null)
                event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
            else
                throw redirect(303, '/server-down')
        }
        
    
            if(event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh()){
                if(isPathAllowed(event.url.pathname)) throw redirect(303, '/acesso')
                const response = await resolve(event);
                response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());
                return response;
            } else {
                event.locals.pb.authStore.clear();
                if(!isPathAllowed(event.url.pathname)){
                    throw redirect(303, '/')
                } else{
                    const response = await resolve(event);
                    // send back the default 'pb_auth' cookie to the client with the latest store state
                    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());
                    return response;
                }
            }
    
        


}