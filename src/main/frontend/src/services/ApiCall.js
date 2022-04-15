import { 
  getOrigin,
  redirectToErrorPage
 } from '../common/Common-functions'

export async function sendGetRequest(urlEnding = '') {

    console.log("GET %s", urlEnding)
    const response = await fetch(`${getOrigin()}/${urlEnding}`)
      .then(response => {
        if(!response.ok){
          checkError(response)
          return;
        }
        else{
          const jsonReponse = response.json()    
          jsonReponse.then(text => console.log('GET %s => %s', urlEnding, JSON.stringify(text)))
          return jsonReponse;
        }
      }); 

    return response
}

export async function sendPostRequest(urlEnding = '', data = {}) {

    console.log("POST %s + %s", urlEnding, JSON.stringify(data))
    const response = await fetch(`${getOrigin()}/${urlEnding}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        body: JSON.stringify(data) 
      })
      .then(response => {
        if(!response.ok){
          checkError(response)
          return;
        }
        else{
          const jsonReponse = response.json()    
          jsonReponse.then(text => console.log('POST %s => %s', urlEnding, JSON.stringify(text)))
          return jsonReponse;
        }
      }); 

    return response
}

function checkError(response){
  if(response.status === 500) {
    redirectToErrorPage()
    //showAlert('Ups, niespodziewany błąd. Prosimy spróbować ponownie.')
  }
  else if(response.status === 404 || response.status === 422) response.text().then(text => showAlert(text))
}

function showAlert(message = ''){
  alert(message);
}

