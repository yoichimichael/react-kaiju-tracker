# Kaiju Tracker

### React Edition

The UN has tasked you with building a website to better help them track Kaiju across the world! Your job is to make an app that allows anyone to look at, add, edit, or delete a Kaiju. In addition, they've given you some code for a news ticker that shows in realtime what the Kaiju are doing.

## Gettings Started

In the terminal, start the app with `npm start`. Additionally, in a separate terminal you'll need to begin the local json server with `npm run server`.

`npm run server` *is a custom script. If you have questions about what it's doing or you want to build your own, you can check it out in* `package.json`.

## Fetch Requests

It's suggested you store all your fetch requests in `requests.js`. The first request has already been built out for you. You don't have to build out all your requests using the variables provided or even using the file provided, however this is one way you can keep your code `DRY`.

In order to import your fetches, include this line with the other imports at the top of a react file: `import * as requests from './requests'`

To use any of the requests, call `requests.requestNameHere()`. This will return a promise you can then utilize and chain `.then` methods off of. As an example:

```
requests.fetchKaijus()
.then(response => console.log(response))
```

A typical Kaiju object returned looks like this:

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

## Adding Kaiju

A form has already been provided for adding new Kaiju. Make sure that this is a `controlled form`. When thinking about how to do this, consider these things: should the Kaiju be added optimistically or pessimistically? Where does the Kaiju need to be updated? How can this be done without mutating state?

**BONUS: Render the create form conditionally (user must click a button to see the form).**

## Editing and Deleting Kaiju

The edit button in the , once clicked, should show a form within the Kaiju card with the class of `kaiju-card-edit-form`. This should be rendered conditionally. When thinking about conditional rendering, can you leverage state in some way to decide whether it should be shown?

Similar to adding a Kaiju, both the front and back end should reflect the edited Kaiju once that Kaiju has been submitted. The same goes for the delete button.

**Hints:**

***Which things need state in order to work?***

***More than one component can have state! Use this to your advantage!***
