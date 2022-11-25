import datalist from "./userList.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            userList: datalist,
            activeUser: null,
            msgInput: ""
        }
    },
    methods: {

        //crea due nuovi messaggi (invio e risposta) e li aggiunge ai messaggi
        //dell'utente attivo (di cui stiamo vedendo la chat)
        //e poi svuota l'input
        sendMessage() {
            const newMessage = {
                date: '',
                message: this.msgInput,
                status: 'sent'
            }
            const newAnswer = {
                date: '',
                message: 'ok',
                status: 'received'
            }
            const user = this.activeUser
            
            this.activeUser.messages.push(newMessage);
            //risponde dopo 1s
            setTimeout(function(){
                user.messages.push(newAnswer)
            }, 1000)

            this.msgInput = ""
        },
        
    },
    beforeMount() {
        this.activeUser = this.userList[0]
    }
}).mount('#app')




