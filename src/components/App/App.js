import React from 'react';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';

//function to convert the object to a string and display it as an alert.
/*
The function showAdditional converts the object to an array of pairs where 
the first item is the key and the second is the value. It then maps over the data converting 
the key-pair to a string. Then it joins them with a line break—\n—before passing the complete 
string to the alert function.

Since JavaScript can accept functions as arguments, React can also accept functions as props. 
You can therefore pass showAdditional to AnimalCard as a prop called showAdditional.
*/
function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard 
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  )
}

export default App;