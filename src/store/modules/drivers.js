import { isCorrespondToFilter } from './helpers'
import { driversData } from "@/data/projectData";

export default {
	namespaced: true,
	state: {
		driversList: [],
		filterObj: {},
		errorMessage: null,
	},
	getters: {
		getDriversList: (state) => state.driversList,
		getDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
		errorMessage: ({ errorMessage }) => errorMessage,
		getFilteredDriversList: (state) => {
			const filteredDriversList = state.driversList.filter((driver) => isCorrespondToFilter(driver, state.filterObj))

			if (!filteredDriversList.length) {
				state.errorMessage = "🤔Водії відсутні"
			}
			else state.errorMessage = null

			return filteredDriversList
		},
	},
	mutations: {
		setDriversList(state, list) {
			state.driversList = list
		},
		removeDriver(state, driverIndex) {
			// state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
			state.driversList.splice(driverIndex, 1)
		},
		addDriver(state, driver) {
			state.driversList.push(driver)
		},
		updateDriver(state, driverObj) {
			const driverIndex = state.driversList.findIndex((driver) => driver.id === driverObj.id)
			state.driversList[driverIndex] = driverObj
		},
		setFilter(state, filterDataObj) {
			state.filterObj = filterDataObj
		}
	},
	actions: {
		setDriversList({ commit }) {
			commit("setDriversList", driversData)
		},
		removeDriver({ commit }, driverId) {
			commit("removeDriver", driverId)
		},
		addDriver({ commit }, driver) {
			commit("addDriver", {
				id: new Date().getTime(),
				...driver,
			})
		},
		updateDriver({ commit }, driverObj) {
			commit("updateDriver", driverObj)
		},
		updateFilter({ commit }, filterDataObj) {
			commit("setFilter", filterDataObj)
		}
	},
	modules: {},
}
