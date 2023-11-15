import { assignmentsData } from "@/data/projectData";

export default {
	namespaced: true,
	state: {
		assignmentsList: [],
		driverSelectVal: null,
		busSelectVal: null,
		errorMessage: null,
	},
	getters: {
		getAssignmentsList: (state) => state.assignmentsList,
		getDriverSelectVal: ({ driverSelectVal }) => driverSelectVal,
		getBusSelectVal: ({ busSelectVal }) => busSelectVal,
		errorMessage: ({ errorMessage }) => errorMessage,
	},
	mutations: {
		setAssignmentsList(state, list) {
			state.assignmentsList = list
		},
		setDriverSelect(state, driver) {
			state.driverSelectVal = driver
		},
		setBusSelect(state, bus) {
			state.busSelectVal = bus
		},
		addAssignment(state, item) {
			state.assignmentsList.push(item)
		},
		removeAssignment(state, itemId) {
			state.assignmentsList = state.assignmentsList.filter((item) => item.id !== itemId)
		},
	},
	actions: {
		setAssignmentsList({ commit }) {
			commit("setAssignmentsList", assignmentsData)
		},
		updateDriverSelect({ commit }, driver) {
			commit("setDriverSelect", driver)
		},
		updateBusSelect({ commit }, bus) {
			commit("setBusSelect", bus)
		},
		addAssignment({ commit, state }) {
			const newAssignment = {
				id: new Date().getTime(),
				driverName: state.driverSelectVal,
				busNumber: state.busSelectVal,
			};
			if (!newAssignment.driverName || !newAssignment.busNumber) {
				state.errorMessage = "Виберіть шофера та автобус";
			} else {
				state.busSelectVal = null;
				state.driverSelectVal = null;
				state.errorMessage = null;
				commit("addAssignment", newAssignment);
			}
		},
		removeAssignment({ commit }, itemId) {
			commit("removeAssignment", itemId)
		}
	},
	modules: {},
}
