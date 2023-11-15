<template>
    <div class="assignments">
        <h2 class="title">{{ title }}</h2>
        <div class="assignments__container">
            <h4 class="subtitle">Шофер - Номер автобуса</h4>
            <ul class="assignments__list">
                <li v-for="assignment in getAssignmentsList" :key="assignment.id" class="assignments__item">
                    <h4>{{ assignment.driverName }}</h4>
                    -
                    <h4>{{ assignment.busNumber }}</h4>
                    <button class="button" @click="removeAssignment(assignment.id)">
                        <img src="@/assets/trash.png" alt="trash" />
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentsList',

    props: {
        title: {
            type: String,
            default: 'Assignments',
        },
    },

    computed: {
        ...mapGetters('assignments', ['getAssignmentsList']),
    },

    created() {
        this.setAssignmentsList()
    },

    methods: {
        ...mapActions('assignments', ['setAssignmentsList', 'removeAssignment']),
    },
}
</script>

<style lang="scss" scoped>
</style>