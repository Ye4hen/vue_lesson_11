<template>
    <div>
        <bus-list title="Наші автобуси" />
    </div>
</template>

<script>
import BusList from './BusList.vue'
export default {
    components: { BusList },
    name: 'BussesManager',
}
</script>

<style lang="scss" scoped>
</style>