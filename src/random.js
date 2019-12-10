const randomCities = ["Tokyo", "New York", "Buenos Aires", "Hong Kong", "Anchorage", "San Francisco", "Loch Ness"]
const randomDescriptions = []

const random = {
  city: () => randomCities[Math.floor(Math.random() * randomCities.length)],
  description: () => randomDescriptions[Math.floor(Math.random() * randomCities.length)]
}

export default random
