import datalist from "./userList.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            userList: datalist,
            activeUser: null,
            msgInput: "",
            inputSearch: "",
        }
    },
    methods: {

        //crea due nuovi messaggi (invio e risposta) e li aggiunge ai messaggi
        //dell'utente attivo (di cui stiamo vedendo la chat)
        //e poi svuota l'input
        sendMessage() {
            const newMessage = {
                date: luxon.DateTime.now().toFormat('HH:mm'),
                message: this.msgInput,
                status: 'sent'
            }
            const newAnswer = {
                date: luxon.DateTime.now().toFormat('HH:mm'),
                message: 'ok',
                status: 'received'
            }
            const user = this.activeUser
            
            this.activeUser.messages.push(newMessage);
            //risponde dopo 1s
            setTimeout(function(){
                user.messages.push(newAnswer)
            }, 1000)

            console.log(newMessage.date)

            this.msgInput = ""
        },
        getUsersList(){
            if(this.inputSearch === ""){
                return this.userList
            }
            else{
                const newUserList = this.userList.filter(user => user.name.toLowerCase().includes(this.inputSearch.toLowerCase()))
                return newUserList
            }
        }
        
    },
    beforeMount() {
        this.activeUser = this.userList[0]
    },
   
}).mount('#app')




