import datalist from "./userList.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            userList : datalist,
            activeUser : null
        }
    },
    methods: {
    },
    beforeMount () {
         this.activeUser = this.userList[0]
      }
}).mount('#app')

const userList = datalist
const data = new Date(userList[0].messages[0].date)
console.log(data);
console.log(data.getHours());
console.log(data.getMinutes());


