let apiUrl = "https://myapi.ruang-ekspresi.id/index.php/";

Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        articles: []
      };
    },
    methods:{    
       getHeaderData()
    {
      axios
        .get(
           "https://raw.githubusercontent.com/romanofajarikhsan/Tekweb2/blob/main/content/header.js"
         )
         .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.header = res.data;
         })
            .catch((error) => {
            console.log(error);
         });
        }
   },
        getArticles()
        {
            axios
            .get(
              "https://raw.githubusercontent.com/romanofajarikhsan/Tekweb2/blob/main/content/articles.js"
            )
            .then((res) => {              
              this.articles = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    },
    beforeMount() {
        this.getHeaderData()
    }
  }).mount("#app");
