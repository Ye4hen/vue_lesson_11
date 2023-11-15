<template>
    <div class="driver-editor__container editor">
        <div class="driver-editor__item editor-item">
            <label>
                ПІБ
                <input v-model="currentDriver.name" type="text" @keydown="isNameValid" />
            </label>
        </div>
        <div class="driver-editor__item editor-item">
            <label>
                Стаж
                <input v-model="currentDriver.exp" type="number" @input="onlyDigits($event)" />
            </label>
        </div>
        <button class="driver-editor__button add" @click="onAction">
            {{ actionButtonTitle }}
        </button>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DriversEditor',
    data() {
        return {
            currentDriver: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        ...mapGetters(['errorMessage']),
        currentDriverId() {
            return this.$route.params.driverId
        },
        actionButtonTitle() {
            return this.currentDriverId ? 'Зберегти' : 'Створити'
        },
    },
    created() {
        if (this.currentDriverId) this.currentDriver = { ...this.getDriverById(this.currentDriverId) }
    },
    methods: {
        ...mapActions('drivers', ['updateDriver', 'addDriver']),
        ...mapActions(['setErrorMessage', 'onlyDigits']),
        onAction() {
            if (this.currentDriver.name && this.currentDriver.exp) {
                this.setErrorMessage(null)
                if (!this.currentDriverId) this.addDriver(this.currentDriver)
                else this.updateDriver(this.currentDriver)

                this.$router.push({
                    name: 'drivers',
                })
            } else {
                this.setErrorMessage("Заповнення обох полів є обов'язковим")
            }
        },
        isNameValid(event) {
            const keyCode = event.keyCode || event.which

            if (keyCode >= 48 && keyCode <= 57) {
                event.preventDefault()
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