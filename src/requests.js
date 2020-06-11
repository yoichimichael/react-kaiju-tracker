// headers --> use these at your own discretion
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches

export const postKaiju = (kaiju) => ( 
  fetch(kaijusURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(kaiju)
  })
    .then(parseData)
    .catch(catchError)
)

export const editKaiju = (kaijuId, kaiju) => ( 
  fetch(`${kaijusURL}/${kaijuId}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(kaiju)
  })
    .then(parseData)
    .catch(catchError)
)

export const deleteKaiju = (kaijuId) => (
  fetch(`${kaijusURL}/${kaijuId}`, {
    method: "DELETE",
    headers: headers,
  })
)

//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches

export const postSighting = (sighting) => ( 
  fetch(sightingsURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(sighting)
  })
    .then(parseData)
    .catch(catchError)
)