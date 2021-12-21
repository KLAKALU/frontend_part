import React, { useState, useEffect } from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import axios from 'axios';
import {
  Button,
  Container,
  CssBaseline,
  List,
  Input,
  } from '@material-ui/core';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography'

function App ()  {
  const [createissue, setCreateissue] = useState("");
  const [resu, setResu] = useState([]);
  const apiUrl = "http://localhost:3000/sures";
  const createIssue = (event) => {
    axios.post(apiUrl,
      {
        content: createissue
      }
      ).then(response => {
      console.log("registration response", response.data)
      setResu([...resu, {
        idnomber: response.data.idnomber,
        content: response.data.content,
        time: response.data.time,
        like: response.data.like
      }])
      resetTextField()
    })
    event.preventDefault()
  }

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get(apiUrl)
        console.log(result)
        console.log(result.data)
        const foo = [{idnomber: 1, like: null},{idnomber:2, like: null}]
        setResu(foo);
      }
      fetchData();
      }, []);

  const resetTextField = () => {
    setCreateissue('')
  }

  const updateLike = async (id) => {
    let newValue = resu
    console.log(newValue[id-1]);
    if (newValue[id-1].bool == null) {
      axios.patch(apiUrl+`/${id}`,
      {
        like: 1
      }
      );
      newValue[id-1].like += 1;
      console.log("like count " + newValue[id-1].like)
      newValue[id-1].bool = 1;
      console.log("setbool 1")
      console.log(newValue[id-1].bool)
      setResu(newValue);
    } else {
      axios.patch(apiUrl+`/${id}`,
      {
        like: 2
      }
      );
      newValue[id-1].like -= 1;
      newValue[id-1].bool = null;
      console.log("setbool null")
      console.log(newValue[id-1].bool)
      setResu(newValue);
    }
  }

  return (
    <body>
    <React.Fragment>
      <Container  maxWidth='xs'>
      <Typography style={{fontFamily: 'Monoton', textAlign:'center',fontSize: '30px'}}>
      3 Channel
      </Typography>
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
          component='ul'
          >
            {resu.map(item => (
              <Paper style={{marginBottom: '9px'}}>
              <div style={{display:"flex"}}>
                <Typography style={{fontSize: '17px', paddingRight: '9px', paddingLeft: '5px'}}>
                  {item.idnomber}
                  </Typography>
                  <Typography color="text.secondary" style={{fontSize: '14px'}}>
                  {item.time}
                </Typography>
              </div>
                <Typography component="div">
                  {item.content}
                  {console.log("bool="+item.bool)}
                  <HeartFill color={item.bool ? 'red' : 'gray'} size={16} onClick={() => updateLike(item.idnomber)}/>
                  {item.like}
                </Typography>
              </Paper>
            ))}
          </List>
      </Container>
    </React.Fragment>
    </body>
  );
}
export default App;
