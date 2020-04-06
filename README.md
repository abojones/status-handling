## Description

In addition to writing the helper function as described below, I've added a simple react interface to it, allowing the user to visually select which element will be added to the array, and see the array build in real-time. To incorporate the desired return values, I placed them in 'alert' windows that appear after the user has submitted the array and the appropriate 'processing delay' has been added. The user can also clear the array to add new elements.
 The core helper function most directly relevant to the original task is the handleSubmit method in App.js (line 50).
 Please see the original challenge description below:


You have been tasked with creating a helper function that will be used to determine the output
  of an array of data.

  Each element of the array has the following structure:

    {
      state: <String> - a state to go to
      errorCode: <String> - optional error code
    }

  The states have different functionalities:

    'processing' = delay by 2 seconds, then fetch the next state
    'error' = handle the error code provided (see below)
    'success' = return from the helper with the object: { title: 'Order complete' message: null }

  Handling error codes:

    'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
    'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
    null = return from the helper with an object: { title: 'Error page', message: null }
    undefined = return from the helper with an object: { title: 'Error page', message: null }

  Example usage:
  -------
  getProcessingPage([{ state: 'processing' }, { state: 'error' }])
  => should return after 2 seconds with the object: { title: 'Error page', message: null }

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
