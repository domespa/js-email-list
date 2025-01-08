// FUNZIONE PER GENERARE 10 EMAILS RANDOM
function createEmail() {
    const emailList = [];
  //  console.log(emailList) //

    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            emailList.push(res.data.response);         
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
}};




