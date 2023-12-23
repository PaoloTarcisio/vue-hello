const { createApp } = Vue
          
createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount('#app')

createApp({
    data() {
        return {
            link: 'https://images.unsplash.com/photo-1550475966-70af27831597?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mieClassi: 'classe-immagine'
        }
    }
}).mount('#immagine')