<template>
    <div class="container-sm reports">
        <div class="header">
            <div class="buttons">
                <inertia-link class="btn btn-secondary" href="/">Voltar</inertia-link>
            </div>
        </div>
        <div class="row center">
            <h1>Relatórios</h1>
        </div>

        <div class="row mb-5">
            <div class="calendar">
                <date-picker mode="date" v-model="date" :model-config="modelConfig" />
            </div>
        </div>

        <div class="row">
            <div class="col-4 center">
                <div class="row">
                    <h2>Adicionados</h2>
                </div>
                <div class="row">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="product of added" :key="product.id">{{ product.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-4 center">
                <div class="row">
                    <h2>Removidos</h2>
                </div>
                <div class="row">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="product of deleted" :key="product.id">{{ product.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-4 center">
                <div class="row">
                    <h2>Baixo estoque</h2>
                </div>
                <div class="row">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="product of lowQuantity" :key="product.id">{{ product.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components: {
        DatePicker
    },

    props: {
        deleted: Array,
        added: Array,
        lowQuantity: Array
    },

    data() {
        return {
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD',
            }
        }
    },

    computed: {
        date: {
            get: function () {
                const date = location.pathname.split('/')[2]

                if (date) {
                    const year = date.split('-')[0]
                    const month = Number(date.split('-')[1] - 1)
                    const day = date.split('-')[2]

                    return new Date(year, month, day)
                }

                return new Date()
            },

            set: function (date) {
                this.$inertia.visit(`/reports/${date}`, {
                    method: 'get'
                })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .reports {
        margin: auto;
        padding: 15px;

        .header {
            position: absolute;
            width: 100%;
            padding: 15px 15px;
            // background-color: #F0F0F0;

            .buttons {
                display: flex;
                // justify-content: flex-end;

                .btn-success {
                    margin-right: 15px;
                }
            }
        }

        .center {
            display: flex;
            align-content: center;
            flex-direction: column;
            flex-wrap: wrap;
        }

        .calendar {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
