<template>
    <div class="menu">

        <div v-for="(url, key) of this.data"
             @click="clickMenu(url)"
        >{{ key }}</div>

    </div>
</template>

<script>
    import {dataEmitter} from "../main";
    import axios from 'axios';

    export default {
        props: ['data'],
        data(){
            return{
                listItems: null,
            }
        },
        methods: {
            clickMenu(url){
                axios
                    .get(url)
                    .then(result => this.listItems = result.data.results)
                    .then(() => dataEmitter.$emit('activeMenu', this.listItems))
            },
        },
        watch: {
            listItems(){
                console.log(this.listItems)
            }
        }
    }
</script>

<style>
    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        height: 50px;
        cursor: pointer;
        border-bottom: 1px solid black;
    }
</style>