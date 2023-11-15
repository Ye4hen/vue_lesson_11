<template>
    <div>
        <assignment-selector title="Нове призначення" driverTitle="Шофер" busTitle="Автобус" />
        <assignments-list title="Призначення" />
    </div>
</template>

<script>
import AssignmentSelector from '../AssignmentManager/AssignmentSelector.vue'
import AssignmentsList from './AssignmentsList.vue'
export default {
    name: 'AssignmentManager',
    components: { AssignmentSelector, AssignmentsList },
}
</script>

<style lang="scss" scoped>
</style>