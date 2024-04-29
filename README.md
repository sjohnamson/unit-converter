
## Unit Converter  
Unit Converter is an app to enter and correct unit conversion questions from an assigned worksheet

## Installation
Unit Converter is deployed through Vercel at: https://unit-converter-smoky.vercel.app/

To run Unit Converter locally:
1. Open up Unit Converter with your editor of choice and run an `npm install`
2. Run `npm run dev` in your terminal
3. Open http://localhost:3000/ in your browser

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
- Create a database 
    - Create a login page so users specific data
    - Allow users to save created worksheets so that they can return to them later
- Create a field to enter in and save a student's worksheet results so they could be compiled and compared
- Alter the remove row function so that it removes individual targeted rows instead of only the bottom row
- Add a feature to duplicate rows 
- If staying with hard coded conversion computations move them to the database and add a page for users to add additional units


## Author
Sam Johnson 
- [@sjohnamson](https://www.github.com/sjohnamson)
