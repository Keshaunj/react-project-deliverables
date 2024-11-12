import axios from 'axios';  

const apiUrl = 'https://api.numlookupapi.com/v1/validate/+17089730521?apikey=num_live_9oEmM1RoWaNtUeWuHePApepq7iuPMlxvLsFLtJBz'; /* <==replace your phone number desired to check data from api*/

axios.get(apiUrl)
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);  
  });
