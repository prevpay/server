const express = require('express');
const preScript =  require('../../handlers/prereq');
const axios = require('axios');
const router = express.Router();

router.post('/boleto', async (req,res) => {
    try {
        req.body.externalIdentifier = preScript.sequencial;
        const data = await axios.get('https://varcom-mp-api-01.matera.com/v1/payments'
        ,req.body, { "Api-Access-Key": "813F6952-D615-4E5C-9547-C31ABED75895", "Transaction-Hash": '69d4bf0efbca3340a34e9f693404e14aec782e5f5b0dfd7e74fc1961c1878fe3' });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.get('/proposta-seguro', async (req, res) => {
    try {
        const data = await axios.get("https://gateway.gr1d.io/production/mongeralaegon/v1​/modeloproposta",{ headers: { 'X-Api-Key': '3cd346aa-a061-4242-b249-08985f4ce862' }, data: { 'cnpj': '11321351000110', 'completo': 'true', 'canalVenda':'4' } });
        console.log(data);
    } catch (error) {
        console.error("Error")
        console.error(error);
    } finally {
        res.send(200)
    }
})



module.exports = router;