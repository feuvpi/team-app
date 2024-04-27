import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals }) => {
        console.log("entrei no logout")
        locals.pb.authStore.clear();
        locals.currentUser = null; 
        throw redirect(303, '/');
    }
}