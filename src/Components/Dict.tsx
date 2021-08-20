import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { languages } from "../Data/languages";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Dict: React.FC = () => {
  const classes = useStyles();

  const [meanings, setMeanings] = useState<AxiosResponse | any | Object>([]);
  const [word, setWord] = useState<String | null>("");
  const [lang, setLang] = useState<String | null>("en");

  const fetchData: Function = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );
      // if (data.status === 404) {
      // setMeanings(null);
      // } else {
      setMeanings(data.data);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [word, lang]);

  return (
    <div className={classes.root}>
      <Typography variant="h2" style={{ margin: 12 }}>
        Word Hunt
      </Typography>
      <TextField
        onChange={(e) => setWord(e.target.value)}
        id="word"
        placeholder="Type The Word"
        variant="outlined"
      />
      <TextField
        id="lang"
        select
        label="Language"
        variant="outlined"
        onChange={(e) => setLang(e.target.value)}
      >
        {languages.map((language, index) => (
          <MenuItem key={index} value={language.value}>
            {language.label}
          </MenuItem>
        ))}
      </TextField>
      {meanings !== null &&
        meanings.map((meaning: any | string) => (
          <>
            <Typography variant="h3" style={{ margin: 16 }}>
              {meaning.word}
            </Typography>
            {meaning.meanings.map((wordMeanings: any | Object, index: any) => (
              <List style={{ textAlign: "center" }} key={index}>
                <Typography variant="h4">
                  {wordMeanings.partOfSpeech}
                </Typography>
                {wordMeanings.definitions.map(
                  (wordDef: any | [], index: any) => (
                    <>
                      <ListItem style={{ textAlign: "center" }} key={index}>
                        <ListItemText>{wordDef.definition}</ListItemText>
                      </ListItem>
                      <Divider />
                    </>
                  )
                )}
              </List>
            ))}
          </>
        ))}
    </div>
  );
};
