// Function to parse incoming data
const parseData = response => response.json()

// Error handler message
const catchError = error => console.log(`%c${error} ... is your server running?`, 'color: red;')

// Fetches for kaijus and a specific kaiju, will return a promise
export const kaijus = () => fetch(`http://localhost:4000/kaijus`).then(parseData).catch(catchError)
export const kaiju = id => fetch(`http://localhost:4000/kaijus/${id}`).then(parseData).catch(catchError)

// Fetches for kaiju sightings and specific sightings, will return a promise
export const sightings = () => fetch(`http://localhost:4000/sightings`).then(parseData).catch(catchError)
export const sightings = () => fetch(`http://localhost:4000/sightings/${id}`).then(parseData).catch(catchError)
