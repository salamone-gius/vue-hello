// 1. Stampare a schermo un messaggio all’interno di un h1, utilizzando i data:

// - dopo aver importato Vue incollando lo script nell'head HTML, lo ISTANZIO creandolo ('new Vue') e salvandolo nella const 'app';
const app = new Vue (
    // - dichiaro dentro quale container utilizzarlo (la CHIAVE 'el' sta per ELEMENT, il VALORE sarà l'id del container dove deve agire);
    {
        el: "#container",
        // - nella sezione 'data' inserisco le variabili come OGGETTI utili per l'esecuzione del codice;
        data: {
            // - la stringa VALORE della CHIAVE 'message' sarà il contenuto dell'elemento HTML a cui abbiamo dato l'attributo 'v-model'(solo ai tag di tipo input);
            message: "Hello Vue!",
        }
    }
);


// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.