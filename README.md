

## Unit Converter  

## Screenshots
  <div style="display:flex; justify-content:space-between;">
      <img src="/src/images/PM%20Screen1.png" style="width:50%;" alt= Screenshot1>
      <img src="/src/images/PM%20Screen2.png" style="width:49%" alt= Screenshot2>
  </div>

## Installation
Unit Converter is deployed through Vercel at: https://unit-converter-smoky.vercel.app/

To run Unit Converter locally:
1. Open up Unit Converter with your editor of choice and run an `npm install`
2. Run `npm run dev` in your terminal

## Features

- Create and check volume and temperature unit conversion questions by entering in beginnng values, starting units, ending units, and student answers
- Add and remove question rows
- Button click to verify student answers in all question rows simultaneously

## Tech Stack
**Typescript**

**Next.js** 

## Next Steps
- Create more tests, particularly integration and end to end tests
- Discuss with the client the possibility of changing the unit conversion calculation from the current in app hard coded solution to an API
    - Benefits would primarily be flexibility if questions changed
    - Drawbacks would be the volatility of using an outside API, and potentially a slow down in performance
- Create a database and a login so that users can modify and save individual worksheets
- Alter the remove row function so that it removes individual targeted rows instead of only the bottom row
- Add a feature to duplicate rows 


## Author
Sam Johnson 
- [@sjohnamson](https://www.github.com/sjohnamson)
