<template>
    <div class="products-create">
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" placeholder="Nome" v-model="form.name">
                <div v-if="errors.name" class="validation-error">{{ errors.name }}</div>
            </div>
            <div class="form-group">
                <label for="sku">SKU</label>
                <input type="text" class="form-control" id="sku" placeholder="SKU" v-model="form.sku">
                <div v-if="errors.sku" class="validation-error">{{ errors.sku }}</div>
            </div>
            <div class="form-group">
                <label for="quantity">Quantidade</label>
                <input type="number" class="form-control" id="quantity" placeholder="Quantidade" v-model="form.quantity">
                <div v-if="errors.quantity" class="validation-error">{{ errors.quantity }}</div>
            </div>
            <div class="form-group buttons">
                <div class="back-button">
                    <inertia-link class="btn btn-secondary" href="/products">Voltar</inertia-link>
                </div>

                <div class="submit-button">
                    <button type="submit" class="btn btn-success">Salvar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        errors: Object,
    },

    data() {
        return {
            form: {
                name: '',
                sku: '',
                quantity: '',
                _token: this.$page.props.csrf_token,
            }
        }
    },

    methods: {
        submit() {
            this.$inertia.post('/products/store', this.form)
        },
    }
}
</script>

<style lang="scss" scoped>
    .products-create {
        padding: 15px;
        max-width: 500px;
        margin: auto;

        .validation-error {
            width: 100%;
            margin-top: .25rem;
            font-size: 80%;
            color: #dc3545;
        }

        .buttons {
            display: flex;
            justify-content: space-between;

            .back-button {
                margin-bottom: 15px;
            }
        }
    }
</style>
