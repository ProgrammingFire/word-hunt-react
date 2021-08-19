import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

function App() {
  const [meanings, setMeanings] = useState<AxiosResponse | any | Object>([]);
  const [word, setWord] = useState<String | null>("");

  const fetchData: Function = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const inputEl = useRef<HTMLInputElement | Object | any>({});

  console.log(inputEl.current.value);

  return (
    <div className="App">
      <h3>Your Word: </h3>
      <input type="text" ref={inputEl} />
      {meanings.map((meaning: any | string) => (
        <>
          <h3>{meaning.word}</h3>
          {meaning.meanings.map((wordMeanings: any | Object) => (
            <ul style={{ listStyle: "none" }}>
              <h4>{wordMeanings.partOfSpeech}</h4>
              {wordMeanings.definitions.map((wordDef: any | []) => (
                <>
                  <li>{wordDef.definition}</li>
                </>
              ))}
            </ul>
          ))}
        </>
      ))}
    </div>
  );
}

export default App;
