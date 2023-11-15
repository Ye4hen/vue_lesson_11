import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DriversView from '../views/DriversView.vue'
import BussesView from '../views/BussesView.vue'
import BusEditor from '../components/BussesManager/BusEditor.vue'
import DriversEditor from '../components/DriversManager/DriversEditor.vue'
import AssignmentView from '../views/AssignmentView'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/drivers',
		name: 'drivers',
		component: DriversView,
	},
	{
		path: '/busses',
		name: 'busses',
		component: BussesView,
	},
	{
		path: '/bus/:busId?',
		name: 'bus',
		component: BusEditor,
	},
	{
		path: '/driver/:driverId?',
		name: 'driver',
		component: DriversEditor,
	},
	{
		path: '/assignment',
		name: 'assignment',
		component: AssignmentView,
	},
]

const router = createRouter({
	history: createWebHistory(),
	mode: 'history',
	routes,
})

export default router
