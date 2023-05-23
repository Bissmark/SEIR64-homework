
const express = require('express');
const ejs = require('ejs')
const axios = require('axios')

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

const endpoint = 'https://www.carboninterface.com/api/v1/estimates';
const apiKey = '1YtZgVx0AlwIiuk9pw9wA';

server.get('/', (req, res) => {
    res.render('search.ejs');
})

server.get("/emissions", async (req, res) => {

    const weight = req.query.weight;
    const distance = req.query.distance;
    let method = req.query.method;
    method = method.toLowerCase();

    const requestData = {
        type: 'shipping',
        weight_value: weight,
        weight_unit: 'kg',
        distance_value: distance,
        distance_unit: 'km',
        transport_method: method
    };

    const head = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }

    axios.post(endpoint, requestData, {headers: head}).then((response) => {
        const carbonEmissions = response.data.data.attributes.carbon_kg; 
        // Extract the carbon emissions from the response
        res.render('emissions.ejs', { carbonEmissions });
    });
})

server.listen(PORT, () => console.log(`Now online at http://localhost:${ PORT }`));

// app.post('/electricity-carbon-emissions', async (req, res) => {
//     try {
//       const { zipcode, electricityUsage } = req.body; // Assuming you send the zipcode and electricity usage in the request body
  
//       const response = await axios.post('https://www.carboninterface.com/api/v1/estimates', {
//         type: 'electricity',
//         electricity_unit: 'kwh',
//         electricity_value: electricityUsage,
//         country: 'us',
//         zip_code: zipcode
//       }, {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json'
//         }
//       });
  
//       const carbonEmissions = response.data.data.attributes.carbon_kg; 
//       // Extract the carbon emissions from the response
  
//       res.json({ carbonEmissions });
//     } catch (error) {
//       console.error('Error:', error.response.data);
//       res.status(500).json({ error: 'An error occurred while fetching electricity carbon emissions.' });
//     }
// });