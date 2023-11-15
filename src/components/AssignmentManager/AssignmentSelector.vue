<template>
    <div class="selector">
        <h2 class="title">{{ title }}</h2>
        <div class="selector__container">
            <div class="selector__item">
                <h4 class="subtitle">{{ driverTitle }}:</h4>
                <select v-model="driverSelect">
                    <option v-for="driver in getDriversList" :key="driver.id" :value="driver.name">
                        {{ driver.name }}
                    </option>
                </select>
            </div>
            <div class="selector__item">
                <h4 class="subtitle">{{ busTitle }}:</h4>
                <select v-model="busSelect">
                    <option v-for="bus in getBusesList" :key="bus.id" :value="bus.number">
                        {{ bus.number }}
                    </option>
                </select>
            </div>
            <strong v-if="errorMessage" class="error-message">{{ errorMessage }}</strong>
            <button class="button" @click="addAssignment">Add</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentSelector',

    props: {
        title: {
            type: String,
            default: 'New assignment',
        },
        driverTitle: {
            type: String,
            default: 'Driver',
        },
        busTitle: {
            type: String,
            default: 'Bus',
        },
    },

    computed: {
        ...mapGetters('buses', ['getBusesList']),
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('assignments', ['getDriverSelectVal', 'getBusSelectVal', 'errorMessage']),
        driverSelect: {
            get() {
                return this.getDriverSelectVal
            },
            set(driver) {
                this.updateDriverSelect(driver)
            },
        },
        busSelect: {
            get() {
                return this.getBusSelectVal
            },
            set(bus) {
                this.updateBusSelect(bus)
            },
        },
    },

    created() {
        this.setBussesList()
        this.setDriversList()
    },

    methods: {
        ...mapActions('buses', ['setBussesList']),
        ...mapActions('drivers', ['setDriversList']),
        ...mapActions('assignments', ['updateDriverSelect', 'updateBusSelect', 'addAssignment']),
    },
}
</script>

<style lang="scss" scoped>
</style>