// FUNZIONE PER GENERARE 10 EMAILS RANDOM
const emailList = [];
function createEmail() {
    emailList.length = 0;

    for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            emailList.push(res.data.response);
            if (emailList.length === 10) {
                updatedEmails();
                console.log(emailList);
            }
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
}};



// FUNZIONE PER INVIARE LE EMAIL ALL'HTML
function updatedEmails() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`email${i + 1}`).innerHTML = emailList[i];
    }
};