const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'

// Function to parse incoming data
const parseData = response => response.json()

// Error handler message
const catchError = error => console.log(`%c${error}`, 'color: red;')

// Fetches for kaijus, will return a promise
// GET /kaijus
export const getKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)
// GET /kaijus/:id
export const getKaiju = id => fetch(kaijusURL + id)
.then(parseData)
.catch(catchError)
// DELETE /kaijus/:id
export const deleteKaiju = id => fetch(kaijusURL + id, { method: 'DELETE' })
.then(parseData)
.catch(catchError)
// POST /kaijus
export const createKaiju = body => fetch(kaijusURL, { method: 'POST', headers, body: JSON.stringify(body)})
.then(parseData)
.catch(catchError)
// PATCH /kaijus/:id
export const editKaiju = body => fetch(kaijusURL + body.id, {method: 'PATCH', headers, body: JSON.stringify(body)})
.then(parseData)
.catch(catchError)

// Fetches for kaiju sightings, will return a promise
// GET /sightings
export const getSightings = () => fetch(sightingsURL)
  .then(parseData)
  .catch(catchError)
// GET /sightings/:id
export const getSighting = id => fetch(sightingsURL + id)
  .then(parseData)
  .catch(catchError)
