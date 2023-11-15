<template>
    <div class="driver-container">
        <drivers-list title="Наші водії" />
        <drivers-filter title="Фільтри" />
    </div>
</template>

<script>
import DriversFilter from './DriversFilter.vue'
import DriversList from './DriversList.vue'
export default {
    name: 'DriversManager',
    components: { DriversList, DriversFilter },
}
</script>

<style lang="scss" scoped>
</style>