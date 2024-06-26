import type { PageServerLoad, Actions } from './$types';

// const api_url = import.meta.env.VITE_API_BASE_URL

// export const load = (async ({ cookies }) => {
//     // const token = cookies.get('token')
//     let clientes;
//     if(token) {
//         // clientes = await getCooperativas(token);
//         console.log("entrei aqui")
//         // const clientes2 = await getListaDeClientes(token)
//         // console.log(clientes2)
//     }
//     if(!clientes)
//         return {};

//     return {clientes: clientes}
// }) satisfies PageServerLoad;

// export const actions = {
// 	default: async ({ request, cookies }) => {
//         const token = cookies.get('token')
//         if(!token) return;
// 		const data = await request.formData();
//         const nomeFantasia = data.get('nomeFantasia');
//         const razaoSocial = data.get('razaoSocial');
//         const cnpj = data.get('cnpj');

//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const res = await fetch(`${api_url}/Cooperativa`,             {
//             method: "POST",
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json', // assuming JSON content type
//             },
//             body: JSON.stringify({ nomeFantasia: nomeFantasia, razaoSocial: razaoSocial, cnpj: cnpj?.toString().replace(/[^\d]/g, ''), }),
//             credentials: 'include',
//         })
// 	},
// } satisfies Actions;


// const getCooperativas = async (token: string) => {
//     const response = await fetch(`${api_url}/Cooperativa`, {
//         method: 'GET', // or any other method
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json', // assuming JSON content type
//         },
//         credentials: 'include', // Include cookies in the request if needed
//     });

//     // console.log(await response.text())
//     const responseData = await response.json()

//     return responseData;
// };

// const getListaDeClientes = async (token: string) => {
//     const response = await fetch(`${api_url}/ListaDeClientes`, {
//         method: 'GET', // or any other method
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json', // assuming JSON content type
//         },
//         credentials: 'include', // Include cookies in the request if needed
//     });

//     // console.log(await response.text())
//     const responseData = await response.json()

//     return responseData;
// };
