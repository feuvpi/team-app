// /* eslint-disable @typescript-eslint/no-unused-vars */

// import PocketBase from 'pocketbase'
// import { serializeNonPOJOs } from '$lib/utils'
// // import { currentUser, pb } from '$lib/pocketbase'



// export const handle = async ({ event, resolve }) => {
//     event.locals.pb = new PocketBase('http://localhost:8090');
//     event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

//     if(event.locals.pb.authStore.isValid){
//         event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
//     } else {
//         event.locals
//     }

//     const response = await resolve(event);
    
//     response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))
// }

// // pb.authStore.onChange(() => {
// //     currentUser.set(pb.authStore.model)
// // })


// // import PocketBase from 'pocketbase';
// // import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private'

// import {}
// // export const handle = async ({ event, resolve }) => {
// //    // const adminPb = new PocketBase("http://127.0.0.1:8090");
// //     const userPb = new PocketBase("http://127.0.0.1:8090")

// //     await adminPb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

// //     event.locals.adminPb = adminPb;
// //     event.locals.userPb = userPb;
    
// //     const response = await resolve(event)
// //     return response;

// // }