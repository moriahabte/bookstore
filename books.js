const app = new Vue({
    el: '#app',
    data: {
        books: [],
        search: ''
        
    },
    created() {
        fetch("https://api.myjson.com/bins/1h3vb3")
            .then(response => response.json())
            .then(json => {
                this.books = json.books
                console.log("success!!!!", json);
                data = json;
                books = data.books;
                console.log(books);
                app.searchbar();

            })
    },
//    computed: {
//        filterBooks: function () {
//
//            return this.books.filter((book) => {
//
//                return book.titulo.match(this.search) || book.descripcion.match(this.search)
//            });
//        }
//
//    },
    methods: {
        searchbar: function () {
            var searchBar = document.getElementById("searchbar");
            var books = this.books;
            searchBar.addEventListener("keyup", function (e) {
                var term = e.target.value.toLowerCase();
                books.forEach(function (book){
                    var bookInHTML = document.querySelector("[data-title='" + book.titulo + "']");
                    console.log(bookInHTML);
                    if (book.titulo.toLowerCase().indexOf(term) != -1) {
                        bookInHTML.style.display = "block"

                    } else {
                        bookInHTML.style.display = "none";
                    }
                })
            })
        }
    }

})
