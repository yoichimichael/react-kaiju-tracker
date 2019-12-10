# Kaiju Tracker

### React Edition

The UN has tasked you with building a website to better help them track Kaiju across the world! Your job is to make an app that allows anyone to look at, add, edit, or delete a Kaiju. In addition, they've given you some code for a news ticker that shows in realtime what the Kaiju are doing.

## Gettings Started

In the terminal, start the app with `npm start`. Additionally, begin the local json server with `npm run server`.

## Fetch Requests

The file `requests.js` is where all your fetch requests ought to be stored. There are two endpoints, one for `/kaijus` and one for `/sightings`. Both of these endpoints are included in the file.

In order to import your fetches, include this line with the other imports at the top of a react file: `import * as requests from './requests'`

To use any of the requests, call `requests.requestNameHere()`. This will return a promise you can then utilize. As an example:

```
requests.fetchKaijus()
.then(response => console.log(response))
```

A typical Kaiju object looks like this:

```
{
  id: 1, name: "Godzilla",
  power: "Atomic Breath",
  image: "https://images-na.ssl-images-amazon.com/images/I/71Q1ckgmeQL._SX425_.jpg"
}
```

## Kaiju Cards

Once the Kaiju have been fetched, load them into the Kaiju container element. An example card:

```
<div className='kaiju-card'>

  <h2 className='kaiju-card-name'>Kaiju name goes here</h2>
  <h3 className='kaiju-card-power'>Power: Kaiju power goes here</h3>

  <img className='kaiju-card-image' src='kaiju image goes here' alt='kaiju name goes here' />

  <button className='kaiju-card-edit-button'>Edit Kaiju</button>

  <button className='kaiju-card-delete-button'>Remove</button>

</div>
```

The edit button, once clicked, should show a form within the Kaiju card with the class of `kaiju-card-edit-form`. This form will update the Kaiju in question. When thinking about how to do this, consider these things: should the Kaiju be updated optimistically or pessimistically? Where does the Kaiju need to be updated? How can this be done without mutating state?

The delete button similarly will remove the Kaiju from the database and the html.

**BONUS: Render the create form conditionally (user must click a button to see the form).**

**Hints:**

***Which things need state in order to work? Where should those states live?***
