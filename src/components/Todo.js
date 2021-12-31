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
  const [createresu, setCreateresu] = useState("");
  const [resu, setResu] = useState([]);
  const apiUrl = "https://bbsbackendapp.herokuapp.com/sures";
  const createresponse = (event) => {
    axios.post(apiUrl,
      {
        content: createresu
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
      const result = await axios.get(apiUrl);
        console.log(result);
        console.log(result.data);
        const foo = [{idnomber: 1, like: 0, bool: false},{idnomber:2, like: 0,bool:false}];
        //setResu(foo);
        setResu(result.data)
      }
      fetchData();
      }, []);

  const resetTextField = () => {
    setCreateresu('')
  }

  const updateLike = async (id) => {
    const newValue = resu.map(item => {
      if(item.idnomber === id){
        if(item.bool == null){
          axios.patch(apiUrl+`/${id}`,
          {
            like: 1
          }
          );
          item.like += 1;
          item.bool = 1
        }else {
          axios.patch(apiUrl+`/${id}`,
          {
            like: 2
          }
          );
          item.like -= 1;
          item.bool = null
        }
      }
      return item;
    });
    setResu(newValue);
  };

  return (
    <React.Fragment>
      <Container  maxWidth='xs'>
      <Typography style={{fontFamily: 'Monoton', textAlign:'center',fontSize: '30px'}}>
      3 Channel
      </Typography>
        <CssBaseline/>
          <form onSubmit={createresponse}>
            <Input
              type="text"
              name="content"
              value={createresu}
              placeholder="Enter text"
              onChange={event => setCreateresu(event.target.value)}
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
              <Paper key = {item.idnomber} style={{marginBottom: '9px'}}>
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
                  <HeartFill color={item.bool ? 'red' : 'gray'} size={16} onClick={() => updateLike(item.idnomber)}/>
                  {item.like}
                </Typography>
              </Paper>
            ))}
          </List>
      </Container>
    </React.Fragment>
  );
}
export default App;
