<template>
    <div class="driver">
        <h2 class="driver__title title">{{ title }}</h2>
        <div class="driver__container">
            <h4 class="subtitle">ПІБ - Стаж</h4>
            <ul class="driver__list list">
                <li v-for="(driver, index) in getFilteredDriversList" :key="driver.id" class="driver__item item">
                    <div class="driver__info info">{{ driver.name }} - {{ driver.exp }}</div>
                    <div class="driver__action action">
                        <button class="driver__button button" @click="onEdit(driver.id)">
                            <img src="@/assets/edit.png" alt="edit" />
                        </button>
                        <button class="driver__button button" @click="removeDriver(index)">
                            <img src="@/assets/trash.png" alt="trash" />
                        </button>
                    </div>
                </li>
                <li v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </li>
            </ul>
        </div>
        <router-link :to="{ name: 'driver' }" class="driver__add add"> Додати водія </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriversView',

    props: {
        title: {
            type: String,
            default: 'Our drivers',
        },
    },

    computed: {
        ...mapGetters('drivers', ['getDriversList', 'getFilteredDriversList', 'errorMessage']),
    },

    created() {
        this.setDriversList()
    },

    methods: {
        ...mapActions('drivers', ['removeDriver', 'setDriversList']),
        onEdit(id) {
            this.$router.push({
                name: 'driver',
                params: {
                    driverId: id,
                },
            })
        },
    },
}
</script>