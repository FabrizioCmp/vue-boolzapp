import datalist from "./userList.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            userList : datalist,
        }
    },
    methods: {
    }
}).mount('#app')

