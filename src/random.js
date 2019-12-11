// Just a list of random cities, add your hometown to this list if you're interested :)
const randomCities = ["Tokyo", "New York", "Buenos Aires", "Hong Kong", "Anchorage", "San Francisco", "Loch Ness", "Metropolis"]

// Random descriptions of monster behavior
const randomDescriptions = ["Run for your lives!", "President declares national emergency!", "Giant robots dispatched to punch it back into the sea!", "We're doomed! Doomed I say!", "Saves orphaned kittens and gives them homes!", "Massive devastation!", "Cats and dogs living together! Mass hysteria!", "Swarmed by paparazzi!", "Is a friend of the children!", "Commences battle with Ultraman!", "Power Rangers en route, please clear the area!", "Sunbathers irked by massive shadow!", "Sends local economy into tailspin!", "Creates estimated 11,000 new jobs in (re)construction!", "Sneeze vaporizes nearby historic park!"]

// To use this, just call random.city() or random.description()
const random = {
  city: () => randomCities[Math.floor(Math.random() * randomCities.length)],
  description: () => randomDescriptions[Math.floor(Math.random() * randomCities.length)]
}

export default random
