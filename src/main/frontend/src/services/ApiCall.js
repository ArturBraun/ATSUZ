
export async function sendGetRequest(urlEnding = '') {

    const response = await fetch(urlEnding)
    const jsonReponse = await response.json()
    console.log('GET %s => %s', urlEnding, JSON.stringify(jsonReponse))

    return jsonReponse;
}

export async function sendPostRequest(urlEnding = '', data = {}) {

    console.log("POST %s + %s", urlEnding, JSON.stringify(data))
    const response = await fetch(urlEnding, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        body: JSON.stringify(data) 
      });
    const jsonReponse = await response.json()

    console.log('POST %s => %s', urlEnding, JSON.stringify(jsonReponse))

    return jsonReponse;
}

