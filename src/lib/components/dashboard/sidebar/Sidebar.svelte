<script lang="ts">
	import { sidebarOpen } from '../store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';
	import { Button } from '$lib/components/ui/form';
	import Gear from './icons/Gear.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0',
			end: 'right-0'
		},
		container: `pb-32 lg:pb-6`,
		close: `hidden lg:block lg:w-64 lg:z-auto`,
		open: `w-8/12 absolute z-40 sm:w-5/12 lg:hidden`,
		default: `bg-white h-screen overflow-y-auto top-0 lg:relative shadow-xl`
	};

	export let mobileOrientation = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar `}
>
<div class={`${style.container} h-auto flex flex-col flex-grow border-indigo-600 container px-2 w-full`}>
    <SidebarHeader />
    <SidebarItems />


  </div>

  
<div class="border-orange-600 text-center text-xs text-gray-400 absolute bottom-10 left-0 right-0">
	<a href="/acesso/perfil">	<Button class="bg-white border-2 border-orange-400 shadow-md mb-4 text-black hover:bg-slate-100"><Gear/></Button></a>

	<p class="italic font-xs">Versão 0.10.0</p>
  </div> 


</aside>



<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
