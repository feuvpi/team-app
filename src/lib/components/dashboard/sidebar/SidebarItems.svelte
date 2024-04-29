<script>
	import { data } from './data';
	import { page } from '$app/stores';

	const style = {
		title: `font-normal mx-4 text-sm`,
		active: `bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-orange-500 from-white dark:from-black to-orange-100 text-orange-500`,
		link: `duration-200 hover:shadow-sm flex font-thin items-center justify-start my-2 py-4 w-full transition-colors text-gray-500 uppercase w-full lg:hover:text-orange-500 transform hover:scale-105 transition duration-300`
	};
</script>

<ul>
	<li>
		{#each data as item (item.title)}
			<a 
				href={item.link}
				class={`${style.link} ${item.link === $page.url.pathname && style.active}`}
			>
				<span><svelte:component this={item.icon} /></span>
				<span class={style.title}>{item.title}</span>
			</a>
		{/each}
	</li>
</ul>
