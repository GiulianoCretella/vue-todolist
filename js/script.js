// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
const comanda = new Vue({
    el:'#comanda',
    data:{
        comandaTav:[
            {
                done:false,
                cocktail: 'Margarita',
                bicchiere:"fa-solid fa-martini-glass"
            },
            {
                done:false,
                cocktail: 'Negroni',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'Daiquiri',
                bicchiere:"fa-solid fa-martini-glass"
            },
            {
                done:false,
                cocktail: 'Americano',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'MiTo',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'Sazerac',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'Old-Fashioned',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'Zombie',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
            {
                done:false,
                cocktail: 'Brandy Crusta',
                bicchiere:"fa-solid fa-wine-glass-empty"
            },
            {
                done:false,
                cocktail: 'Dry Martini',
                bicchiere:"fa-solid fa-martini-glass"
            },
            {
                done:false,
                cocktail: 'Analcolico',
                bicchiere:"fa-solid fa-whiskey-glass"
            },
        ],
        nuovoCocktail:'',
    },
    methods:{
        remove(i){
            this.comandaTav.splice(i,1)
        },
        aggiungi(){
            const cocktailN = {
                done:false,
                cocktail:this.nuovoCocktail,
                bicchiere:'fa-solid fa-whiskey-glass',
            }
            this.comandaTav.push(cocktailN);
            this.nuovoCocktail='';
        }
    }
})


// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
