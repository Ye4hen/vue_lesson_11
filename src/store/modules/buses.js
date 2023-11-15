import { bussesData } from "@/data/projectData";

export default {
	namespaced: true,
	state: {
		busesList: [],
	},
	getters: {
		getBusesList: (state) => state.busesList,
		getBusById: (state) => (busId) => state.busesList.find((bus) => bus.id == busId),
	},
	mutations: {
		setBussesList(state, list) {
			state.busesList = list
		},
		removeBus(state, busIndex) {
			// state.busesList = state.busesList.filter((bus) => bus.id !== busId)
			// Якщо я створюю масив у цьому файлі, то закоментований спосіб видалення працює добре, але, коли я імпортую список з іншого файлу, наприклад "data/projectsData.js", то, коли я видаляю елемент і після цього корегую інший і нажимаю "зберегти", то я получаю список з видаленим елементом і без внесених корекцій до іншого елементу.
			state.busesList.splice(busIndex, 1)
		},
		addBus(state, bus) {
			state.busesList.push(bus)
		},
		updateBus(state, busObj) {
			const busIndex = state.busesList.findIndex((bus) => bus.id === busObj.id)
			state.busesList[busIndex] = busObj
		}
	},
	actions: {
		setBussesList({ commit }) {
			commit("setBussesList", bussesData)
		},
		removeBus({ commit }, busId) {
			commit("removeBus", busId)
		},
		addBus({ commit }, bus) {
			commit("addBus", {
				id: new Date().getTime(),
				...bus,
			})
		},
		updateBus({ commit }, busObj) {
			commit("updateBus", busObj)
		}
	},
	modules: {},
}
