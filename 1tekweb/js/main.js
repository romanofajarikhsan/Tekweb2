Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {
          title: "Farid Surya",
          description:
            "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
          social: {
            ig: {
              url: "https://instagram.com/fareedsurya",
              title: "fareedsurya",
            },
            fb: {
              url: "https://facebook.com/fareedsurya",
              title: "Farid Suryanto",
            },
            yt: {
              url: "https://www.youtube.com/channel/UC8GBH6hewlRM1q252mSMyXg",
              title: "Farid Surya",
            },
          },
          imageProfile:
            "image/Romano.png",
        },
      };
    },
  }).mount("#app");