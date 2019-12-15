const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
const axios = require('axios');
const materaResponses = require('./responses');

router.get('/create-account', async (req,res) => {
    try {
        const data = await axios.get('https://varcom-mp-api-01.matera.com/v1/payments');
    } catch (error) {
        res.json(materaResponses.addAcountResponse.data);
    }
});

router.get('/create-payment', async (req,res) => {
    try {
        const data = await axios.get('https://varcom-mp-api-01.matera.com/v1/payments');
    } catch (error) {
        res.json(materaResponses.boletoResponse.data);
    }
});

router.get('/transferp2p', async (req,res) => {
    try {
        const data = await axios.get('https://varcom-mp-api-01.matera.com/v1/payments');
    } catch (error) {
        res.json(materaResponses.transferResponse.data);
    }
});

router.get('/proposta', async (req, res) => {
    exec('curl -X POST "https://gateway.gr1d.io/production/mongeralaegon/v1/proposta/YZ?empresa=99999999999999" -H "accept: application/json" -H "X-Api-Key: 3cd346aa-a061-4242-b249-08985f4ce862" -H "Content-Type: application/json" -d "{ \"PROPOSTA\": { \"NUMERO\": \"string\", \"DT_PROTOCOLO\": \"string\", \"DT_ASSINATURA\": \"string\", \"DT_INDEXACAO\": \"string\", \"INSTITUIDOR\": { \"NUMERO\": \"string\", \"NOME\": \"string\" }, \"DADOS_PROPONENTE\": { \"MATRICULA\": \"string\", \"NOME\": \"string\", \"DT_NASCIMENTO\": \"string\", \"IDADE\": \"string\", \"SEXO\": \"string\", \"ESTADO_CIVIL\": \"string\", \"CPF\": \"string\", \"TITULAR_CPF\": \"string\", \"EMAIL\": \"string\", \"RESIDE_BRASIL\": \"string\", \"RENDA_MENSAL\": \"string\", \"NUM_FILHOS\": \"string\", \"PPE\": \"string\", \"DOCUMENTOS\": { \"DOCUMENTO\": { \"NATUREZA_DOC\": \"string\", \"DOCUMENTO\": \"string\", \"ORGAO_EXPEDIDOR\": \"string\", \"DATA_EXPEDICAO\": \"string\" } }, \"ENDERECOS\": { \"TP_CORRESPONDENCIA\": \"string\", \"ENDERECO\": [ { \"TIPO\": \"string\", \"LOGRADOURO\": \"string\", \"NUMERO\": \"string\", \"COMPLEMENTO\": \"string\", \"BAIRRO\": \"string\", \"CIDADE\": \"string\", \"ESTADO\": \"string\", \"CEP\": \"string\" } ] }, \"TELEFONES\": { \"TELEFONE\": [ { \"TIPO\": \"string\", \"DDI\": \"string\", \"DDD\": \"string\", \"NUMERO\": \"string\" } ] }, \"PROFISSAO\": { \"CODIGO\": \"string\", \"DESCRICAO\": \"string\", \"CATEGORIA\": \"string\", \"EMPRESA\": { \"NOME\": \"string\" } } }, \"PLANOS\": { \"VL_TOTAL\": \"string\", \"PLANO\": [ { \"CODIGO\": \"string\", \"NOME\": \"string\", \"VL_AP_INICIAL\": \"string\", \"VL_PORTAB\": \"string\", \"TP_TRIBUTACAO\": \"string\", \"DT_CONCESSAO\": \"string\", \"PRAZO_CERTO\": \"string\", \"PRAZO_DECRESCIMO\": \"string\", \"COBERTURAS\": { \"COBERTURA\": { \"CODIGO\": \"string\", \"VL_CONTRIB\": \"string\", \"VL_COBERTURA\": \"string\" } } } ] }, \"BENEFICIARIOS\": { \"BENEFICIARIO\": [ { \"NOME\": \"string\", \"NASCIMENTO\": \"string\", \"PARENTESCO\": \"string\", \"PARTICIPACAO\": \"string\", \"CD_PLANO\": \"string\" } ] }, \"DECLARACOES\": { \"DPS\": { \"TIPO_DPS\": \"string\", \"PESO\": \"string\", \"ALTURA\": \"string\", \"PERGUNTAS\": { \"PERGUNTA\": [ { \"NUMERO\": \"string\", \"QUESTAO\": \"string\", \"RESPOSTA\": \"string\", \"OBS_RESPOSTA\": \"string\" } ] } } }, \"DADOS_COBRANCA\": { \"PERIODICIDADE\": \"string\", \"TIPO_COBRANCA\": \"string\", \"DIA_VENCIMENTO\": \"string\", \"COMP_DEBITO\": \"string\", \"NUM_CONVENIO\": \"string\" }, \"USO_MONGERAL\": { \"CONV_ADESAO\": \"string\", \"ACAO_MARKETING\": \"string\", \"ALTERNATIVA\": \"string\", \"SUCURSAL\": \"string\", \"DIR_REGIONAL\": \"string\", \"GER_SUCURSAL\": \"string\", \"GER_COMERCIAL\": \"string\", \"AGENTE\": \"string\", \"CORRETOR1\": \"string\", \"CORRETOR2\": \"string\", \"AGENTE_FIDELIZACAO\": \"string\", \"MODELO_PROPOSTA\": \"string\", \"MODELO_PROPOSTA_GED\": \"string\", \"TIPO_COMISSAO\": \"string\" } }}"', (error, stdout) => {
        if(error) {
            return res.send("Error");
         }
         return res.send(stdout);
    });
});

router.get('/simulacao', async (req, res) => {
    exec('curl -X POST "https://gateway.gr1d.io/production/mongeralaegon/v1/simulacao?cnpj=99999999999999&codigoModeloProposta=YZ" -H "accept: application/json" -H "X-Api-Key: 3cd346aa-a061-4242-b249-08985f4ce862" -H "Content-Type: application/json" -d "{ \"simulacoes\": [ { \"proponente\": { \"tipoRelacaoSeguradoId\": 0, \"nome\": \"string\", \"cpf\": \"string\", \"dataNascimento\": \"string\", \"profissaoCbo\": \"string\", \"renda\": 0, \"sexoId\": 0, \"uf\": \"string\", \"declaracaoIRId\": 0 }, \"periodicidadeCobrancaId\": 0, \"prazoCerto\": 0 } ]}"', (error, stdout) => {
        if(error) {
            return res.send("Error");
         }
         return res.send(stdout);
    });
});

router.get('/proposta-seguro', async (req, res) => {
    exec('curl -X GET "https://gateway.gr1d.io/production/mongeralaegon/v1/modeloproposta?cnpj=11321351000110&completo=true&canalVenda=4" -H "accept: application/json" -H "X-Api-Key: 3cd346aa-a061-4242-b249-08985f4ce862"', (error, stdout, stderr) => {
        if(error) {
           return res.send("Error");
        }
        return res.send(stdout);
    });
})



module.exports = router;