import React, { useState, useEffect } from 'react';
import { getCookie, deleteCookie, setCookie } from "./utilities/Cookies";
import Shuffle from "./utilities/Shuffle";
import './App.css';
import words from "./words.json";
import { defaultCellSize, wordsTrackingCookieName } from "./utilities/Constants";
import BingoCard from "./components/BingoCard";
import BingoCardGenerator from './components/BingoCardGenerator';


function resetBingoWordsCookie(newSize = 0) {
  deleteCookie(wordsTrackingCookieName);

  if(newSize != 0) {
    var newBingoSheet = createNewBingoSheet(newSize);

    setCookie(wordsTrackingCookieName, JSON.stringify(newBingoSheet));
  }

  //Do more than this - generate the thing, save it, and then reload maybe. Or better yet, create a function to cause a re-render
  window.location.reload();
}

function createNewBingoSheet(size) {
  let randomizedWords = Shuffle(words.words);

  var totalToTake = size * size;
  let wordsThing = randomizedWords.slice(0, totalToTake);

  return wordsThing.map((x) => {
      return { text: x, completed: false };
  });
}

function App() {
  
  let wordsMap;
  //if document cookie
  let cookieValue = getCookie(wordsTrackingCookieName);
  if(cookieValue != "") {
      wordsMap = JSON.parse(decodeURIComponent(cookieValue));
  }
  else {
      //This should probably get moved up - it doesn't make sense to have it here
      wordsMap = createNewBingoSheet(defaultCellSize);
  }

  return (
    <div className="App">

      <BingoCardGenerator generateNewCardFunction={resetBingoWordsCookie} />

      <br/>

      <div>
        <BingoCard cardState={wordsMap} cellSize={Math.sqrt(wordsMap.length)}/>
      </div>
    </div>
  );
}

export default App;