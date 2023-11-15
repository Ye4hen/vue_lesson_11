<template>
    <div class="filter__container">
        <h2 class="filter__title">{{ title }}</h2>
        <div class="filter__items">
            <div class="filter__item editor-item">
                <label class="subtitle">
                    ПІБ
                    <input v-model="filterObj.name" type="text" />
                </label>
            </div>
            <div class="filter__item editor-item">
                <h4 class="subtitle">Стаж</h4>
                <label>
                    Від
                    <input v-model="filterObj.expFrom" type="number" />
                </label>
                <label>
                    До
                    <input v-model.lazy="filterObj.expTo" type="number" />
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'DriversFilter',

    data() {
        return {
            filterObj: {
                name: null,
                expFrom: null,
                expTo: null,
            },
        }
    },

    props: {
        title: {
            type: String,
            default: 'Filters',
        },
    },

    watch: {
        filterObj: {
            handler(newVal) {
                this.updateFilter(newVal)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions('drivers', ['updateFilter']),
    },
}
</script>

<style lang="scss" scoped>
</style>