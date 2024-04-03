import HomeIcon from './icons/HomeIcon.svelte';
import TasksIcon from './icons/TasksIcon.svelte';
import CalendarIcon from './icons/CalendarIcon.svelte';
import ProjectsIcon from './icons/ProjectsIcon.svelte';

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
