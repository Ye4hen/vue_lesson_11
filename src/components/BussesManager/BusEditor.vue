<template>
    <div class="bus-editor__container editor">
        <div class="bus-editor__item editor-item">
            <label>
                Номер
                <input v-model="currentBus.number" type="text" />
            </label>
        </div>
        <div class="bus-editor__item editor-item">
            <label>
                Кількість місць
                <input v-model="currentBus.placesAmount" type="number" @input="onlyDigits($event)" />
            </label>
        </div>
        <button class="bus-editor__button add" @click="onAction">
            {{ actionButtonTitle }}
        </button>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusEditor',

    data() {
        return {
            currentBus: {},
        }
    },

    computed: {
        ...mapGetters('buses', ['getBusById']),
        ...mapGetters(['errorMessage']),
        currentBusId() {
            return this.$route.params.busId
        },
        actionButtonTitle() {
            return this.currentBusId ? 'Зберегти' : 'Створити'
        },
    },

    created() {
        if (this.currentBusId) this.currentBus = { ...this.getBusById(this.currentBusId) }
    },

    methods: {
        ...mapActions('buses', ['addBus', 'updateBus']),
        ...mapActions(['setErrorMessage']),
        onAction() {
            if (this.currentBus.placesAmount && this.currentBus.number) {
                this.setErrorMessage(null)
                if (!this.currentBusId) this.addBus(this.currentBus)
                else this.updateBus(this.currentBus)

                this.$router.push({
                    name: 'busses',
                })
            } else {
                this.setErrorMessage("Заповнення обох полів є обов'язковим")
            }
        },
        onlyDigits(event) {
            const enteredValue = event.target.value

            const onlyDigits = enteredValue.replace(/\D/g, '')
            if (enteredValue !== onlyDigits) {
                event.target.value = onlyDigits
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>