<template>
    <ul>
        <li v-for="item in listItems">{{ item.name }}</li>
    </ul>
</template>

<script>
    import {dataEmitter} from "../main";

    export default{
        data(){
            return{
                listItems: '',
            }
        },
        mounted(){
            dataEmitter.$on('activeMenu', (listItems) => this.listItems = listItems);
        },
        watch:{
            listItems(){
                console.log(this.listItems)
            }

        }
    }
</script>
