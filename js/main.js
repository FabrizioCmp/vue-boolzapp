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
                status: 'sent',
                displayMenu: false,
            }
            const newAnswer = {
                date: luxon.DateTime.now().toFormat('HH:mm'),
                message: 'ok',
                status: 'received',
                displayMenu: false,
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

        //ritorna la lista di utenti filtrata dall'input di recerca
        getUsersList(){
            if(this.inputSearch === ""){
                return this.userList
            }
            else{
                const newUserList = this.userList.filter(user => user.name.toLowerCase().includes(this.inputSearch.toLowerCase()))
                return newUserList
            }
        },

        //elimina messaggio dall'array messages
        deleteMsg(i){
            this.activeUser.messages.splice(i , 1)       
        },

        // Apre e chiude il menu a tendina tramite la variabile displayMenu
        showMenu(i){
            if(!this.activeUser.messages[i].displayMenu){
            this.activeUser.messages[i].displayMenu = true
            }
            else{
                this.activeUser.messages[i].displayMenu = false
            }
        }
        
    },
    beforeMount() {
        this.activeUser = this.userList[0]
    },
   
   
}).mount('#app')




