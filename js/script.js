const data = {
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
      },
      {
        name: 'Fabio',
        avatar: '_2',
      },
      {
        name: 'Samuele',
        avatar: '_3',
      },
      {
        name: 'Luisa',
        avatar: '_4',
      },
    ]
  };
  console.log(data.contacts[1].name)


  const app = Vue.createApp({
    data(){
        return{
            user: {
                name: 'Nome Utente',
                avatar: '_io'
              },
              contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                },
              ]
        }
    }
});

app.mount('#root');