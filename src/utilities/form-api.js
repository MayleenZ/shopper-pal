const BASE_URL = '/api/lists';
//send request 


//* Send Form Data (templateName, listArray )to Backend 
export function sendForm(userListData){
    return sendRequest(`${BASE_URL}/create`, 'POST', userListData)
}

export function getLists(){
  return sendRequest(`${BASE_URL}/saved`, 'GET')
}

export function deleteList(id){
  return sendRequest(`${BASE_URL}/saved/${id}`, "DELETE")
}

export function editList(id, editedData){
  return sendRequest(`${BASE_URL}/edit/${id}`, "PUT", editedData)
}

export function getListById(id){
  return sendRequest(`${BASE_URL}/${id}`)
}






/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };

      options.body = JSON.stringify(payload);
    }
  
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action

    if (!res.ok)     throw new Error('Bad Request');
    const json = await res.json();
    return json;
  }