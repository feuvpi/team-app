import HomeIcon from './icons/HomeIcon.svelte';
import TasksIcon from './icons/TasksIcon.svelte';
import CalendarIcon from './icons/CalendarIcon.svelte';
import ProjectsIcon from './icons/ProjectsIcon.svelte';
import Chalkboard from './icons/Chalkboard.svelte';
import File from './icons/File.svelte';
export const data = [
	{
		title: 'Dashboard',
		icon: HomeIcon,
		link: '/acesso'
	},
	{
		title: 'Jogadores',
		icon: ProjectsIcon,
		link: '/acesso/jogadores'
	},
	{
		title: 'Times',
		icon: TasksIcon,
		link: '/acesso/times'
	},
	{
		title: 'Calendario',
		icon: CalendarIcon,
		link: '/acesso/calendario'
	},
	{
		title: 'Contratos',
		icon: File,
		link: '/acesso/contratos'
	},
	{
		title: 'Board',
		icon: Chalkboard,
		link: '/acesso/board'
	},
	// {
	// 	title: 'Time manage',
	// 	icon: TimeManageIcon,
	// 	link: '/admin/time-manage'
	// },
	// {
	// 	title: 'Reports',
	// 	icon: ReportsIcon,
	// 	link: '/admin/reports'
	// },
	// {
	// 	title: 'Settings',
	// 	icon: SettingsIcon,
	// 	link: '/admin/settings'
	// },
	// {
	// 	title: 'Documentation',
	// 	icon: DocumentationIcon,
	// 	link: '/admin/documentation'
	// }
];
