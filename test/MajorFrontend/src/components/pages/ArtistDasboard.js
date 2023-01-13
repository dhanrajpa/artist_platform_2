
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-grid-dropdown/dist/style.css'
import { useHistory } from "react-router-dom";

//import { useState } from "react";
import axios from "axios"


const theme = createTheme();
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ArtistDashboard() {
    const history = useHistory();
   // const count=0;
  const [value, setValue] = React.useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const [checkEventName, setName] = useState('');
  const [checkFees, setFees] = useState('');
  const [checkcount, setCount] = useState('');
  const handleEventNameChange = (e) => {
    setName(e.target.value);
}

const handleFeeChange = (e) => {
  setFees(e.target.value);
}
const handleCountChange = (e) => {
    setCount(e.target.value);
  }

  const handleLogout=(event)=>{
    axios.post("http://localhost:8080/api/artist/logoutArtist",
    {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        console.log(response.data);
        history.push("/signinArtist")
        alert("login First To Insert Your Data")

    }).catch((err) => console.log(err + "Incorrect Data"));
  }

const handleSubmit = (event) => {
  event.preventDefault();
  let data = {
    eventName: checkEventName,
    fees: checkFees,
    reg_count:checkcount
 
  }
  console.log(data)
  axios.post("http://localhost:8080/api/events/arrangeEvent", data,
      {
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then((response) => {
          console.log(response.data);
          if(response.data=="login first")
          {
            alert("login first")
          }
          else{
          alert("Event Registered Successfully")
          }

          

      }).catch((err) => console.log(err + "Incorrect Data"));

};















  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Image Upload" {...a11yProps(0)} />
        <Tab label="Video Upload" {...a11yProps(1)} />
        <Tab label=" Organise Event" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>

      {selectedImage && (
      <div>
      <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
      <br />
      <button onClick={()=>setSelectedImage(null)}>Remove</button><br/>
      <button type="submit">Upload</button>

      </div>  
    )}
    <br />
    <br /> 
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }}
    />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Video Upload  
      </TabPanel>
  <TabPanel value={value} index={2}>
      <div id='div_reg'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md" >
                    <CssBaseline />
                    <Box id="card"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    > 
                        <Typography component="h1" variant="h5">
                           Event Register
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item  xs={12}>
                                    <TextField
                                      onChange={handleEventNameChange}
                                        autoComplete="given-name"
                                        name=" EventName"
                                        required
                                        fullWidth
                                        id="EventName"
                                        label="Event Name"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item  xs={12}>
                                    <TextField
                                      onChange={handleFeeChange}
                                        autoComplete="given-name"
                                        name="EventFees"
                                        required
                                        fullWidth
                                        id="EventFees"
                                        label="Event Fees"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleCountChange}
                                        autoComplete="given-name"
                                        name="Registractioncount"
                                        required
                                        fullWidth
                                        id="Registractioncount"
                                        label="Registraction count"
                                        autoFocus
                                    />
                                </Grid>     
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button> 
                            <Button variant="contained"  onClick={handleLogout}>
                                Logout
                            </Button>         
                        </Box>
                    </Box>
                </Container>          
            </ThemeProvider>
        </div>
      </TabPanel>
    </Box>
   
  );
}
