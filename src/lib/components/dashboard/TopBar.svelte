<script>
	import Button from '../ui/button/button.svelte';
	import Logout from './sidebar/icons/Logout.svelte';
	import Profile from './sidebar/icons/Profile.svelte';
	// import { createEventDispatcher } from "svelte";
	import { toggleSidebar } from './store';
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();

	function handleLogoutClick() {
        // @ts-ignore
		console.log("entrei")
		// event.logout = true;
        dispatcher("logout", true);
    };
</script>

<header class="bg-white dark:bg-neutral-800 dark:border-2 dark:border-orange-500 h-16 items-center relative shadow w-full z-10 md:h-20 lg:rounded-2xl lg:mx-2">
	<div class="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
		<div class="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
			<div class="flex h-full left-0 relative w-3/4">
				<div class="group flex items-center h-full relative w-12">
					<button
						type="button"
						aria-expanded="false"
						aria-label="Toggle sidenav"
						class="text-4xl text-gray-500 focus:outline-none"
						on:click={toggleSidebar}
					>
						&#8801;
					</button>
				</div>
				<div class="flex group h-full items-center relative w-36 lg:w-64">
					<div
						class="absolute block cursor-pointer flex h-10 items-center justify-center p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden"
					>
						<svg
							fill="none"
							class="h-5 relative w-5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<svg
						class="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						/>
					</svg>
					<input
						type="text"
						class="bg-gray-100 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
						placeholder="Procurar"
					/>
					<div
						class="absolute border border-gray-300 h-auto hidden mr-2 px-2 py-1 right-0 rounded-2xl text-gray-400 text-xs md:block"
					>
						+
					</div>
				</div>
			</div>

			<div class="gap-4 flex items-center justify-end ml-5 p-1 relative w-1/4 sm:mr-0 sm:right-auto">


					<Button on:click={handleLogoutClick} class="block relative rounded-md hover:shadow-md bg-orange-300 hover:bg-orange-400" >
						<Logout/>
					</Button>


				<!-- <a href="/acesso/perfil">
					<d class="block relative rounded-md hover:shadow-md" >
						<Profile/>
					</d>
				</a>


					<span class="block relative rounded-md hover:shadow-md">
	<Logout/>
					</span> -->

			</div>
		</div>
	</div>
</header>
