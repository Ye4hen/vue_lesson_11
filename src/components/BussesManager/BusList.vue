<template>
    <div class="bus">
        <h2 class="bus__title title">{{ title }}</h2>
        <div class="bus__container">
            <h4 class="subtitle">Номер - Кількість місць</h4>
            <ul class="bus__list list">
                <li v-for="(bus, index) in getBusesList" :key="bus.id" class="bus__item item">
                    <div class="bus__info info">{{ bus.number }} - {{ bus.placesAmount }}</div>
                    <div class="bus__action action">
                        <button class="bus__button button" @click="onEdit(bus.id)">
                            <img src="@/assets/edit.png" alt="edit" />
                        </button>
                        <button class="bus__button button" @click="removeBus(index)">
                            <img src="@/assets/trash.png" alt="trash" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <router-link :to="{ name: 'bus' }" class="bus__add add"> Створити автобус </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BussesView',

    props: {
        title: {
            type: String,
            default: 'Our busses',
        },
    },

    computed: {
        ...mapGetters('buses', ['getBusesList']),
    },

    created() {
        this.setBussesList()
    },

    methods: {
        ...mapActions('buses', ['removeBus', 'setBussesList']),
        onEdit(id) {
            this.$router.push({
                name: 'bus',
                params: {
                    busId: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
