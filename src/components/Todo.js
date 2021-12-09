import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  CssBaseline,
  List,
  Input,
  } from '@material-ui/core';
  import Paper from '@mui/material/Paper';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import BookmarksIcon from '@mui/icons-material/Bookmarks';
  import Typography from "@mui/material/Typography";

export default function MainContainer ()  {
  const [createissue, setCreateissue] = useState("");
  const [issues, setIssues] = useState([]);

  const createIssue = (event) => {
    console.log("イベント発火")
    axios.post('https://thawing-wildwood-48291.herokuapp.com/sured',
      {
        content: createissue
      }
    ).then(response => {
      console.log("registration response", response.data)
      setIssues([...issues, {
        id: response.data.id,
        content: response.data.content
      }])
      resetTextField()
    })
    event.preventDefault()
  }

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get('https://thawing-wildwood-48291.herokuapp.com/sured',)
        console.log(result)
        console.log(result.data)
        setIssues(result.data);
      }
      fetchData();
      }, []);

  const resetTextField = () => {
    setCreateissue('')
  }

  return (
    <body>
    <React.Fragment>
      <Container  maxWidth='xs'>
      <h1>
      3 Chanell
      </h1>
        <CssBaseline/>
          <form onSubmit={createIssue}>
            <Input
              type="text"
              name="content"
              value={createissue}
              placeholder="Enter text"
              onChange={event => setCreateissue(event.target.value)}
            />
            <Button
              type="submit"
              variant='contained'
              color='text'
            >
                投稿
            </Button>
          </form>
          <List
            style={{marginTop: '48px'}}
          component='ul'
          >
            {issues.map(item => (
                <Paper >
                <Typography color="text.secondary">
                  {item.id}
                  {item.name}
                  {item.created_at}
                  </Typography>
                  <Typography component="div">
                  {item.content}
                  </Typography>
                  <div>
                  <FavoriteIcon/>
                  <BookmarksIcon/>
                  </div>
                </Paper>
            ))}
          </List>
      </Container>
    </React.Fragment>
    </body>
  );
}
