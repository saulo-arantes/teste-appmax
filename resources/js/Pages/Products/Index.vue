<template>
    <div class="container-sm">
        <div class="header">
            <div class="buttons">
                <inertia-link class="btn btn-success" :href="createUrl">Add Produto</inertia-link>

                <inertia-link class="btn btn-primary" href="/reports">Relatórios</inertia-link>

                <inertia-link class="btn btn-secondary" href="/logout" method="post" as="button" type="button">Logout</inertia-link>
            </div>
        </div>
        <div class="products-index">
            <div class="index">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">SKU</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product of products" :key="product.sku">
                                <td>{{ product.name }}</td>
                                <td>{{ product.sku }}</td>
                                <td>
                                    <div class="quantity">
                                        {{ product.quantity }}
                                        &nbsp;
                                        <div class="low-quantity" title="Estoque abaixo do esperado" v-if="product.quantity < 100">
                                            <font-awesome-icon icon="exclamation" />
                                            <small>Estoque abaixo do esperado</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <inertia-link class="btn btn-primary" :href="`/products/${product.id}`">
                                        <font-awesome-icon icon="edit" />
                                    </inertia-link>
                                </td>
                                <td>
                                    <inertia-link class="btn btn-danger" :href="`/products/${product.id}`" method="delete" as="button" type="button">
                                        <font-awesome-icon icon="trash" />
                                    </inertia-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      products: Array,
      createUrl: String
    },

    mounted() {
        console.log(this.create_url);
    }
}
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        width: 100%;
        padding: 15px 15px;
        background-color: #F0F0F0;

        .buttons {
            display: flex;
            justify-content: flex-end;


            .btn-success {
                margin-right: 15px;
            }

            .btn-primary {
                margin-right: 15px;
            }
        }
    }

    .products-index {
        padding: 15px;

        .index {
            margin-top: 65px;

            .quantity {
                display: flex;

                .low-quantity {
                    color: #dc3545;;
                }
            }
        }
    }
</style>
