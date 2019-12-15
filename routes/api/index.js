const express = require('express');
const preScript =  require('../../handlers/prereq');
const axios = require('axios');
const request = require('request');
const { exec } = require('child_process');
const router = express.Router();

router.post('/boleto', async (req,res) => {
    try {
        req.body.externalIdentifier = preScript.sequencial;
        const data = await request.get('https://varcom-mp-api-01.matera.com/v1/payments'
        ,req.body, { headers: { "Api-Access-Key": "813F6952-D615-4E5C-9547-C31ABED75895", "Transaction-Hash": '69d4bf0efbca3340a34e9f693404e14aec782e5f5b0dfd7e74fc1961c1878fe3'}});
        console.log(data);
    } catch (error) {
        res.send(error);
    }
});

router.post('/proposta', async (req, res) => {
    exec('curl -X POST "https://gateway.gr1d.io/production/mongeralaegon/v1/proposta/YZ?empresa=99999999999999" -H "accept: application/json" -H "X-Api-Key: 3cd346aa-a061-4242-b249-08985f4ce862" -H "Content-Type: application/json" -d "{ \"PROPOSTA\": { \"NUMERO\": \"string\", \"DT_PROTOCOLO\": \"string\", \"DT_ASSINATURA\": \"string\", \"DT_INDEXACAO\": \"string\", \"INSTITUIDOR\": { \"NUMERO\": \"string\", \"NOME\": \"string\" }, \"DADOS_PROPONENTE\": { \"MATRICULA\": \"string\", \"NOME\": \"string\", \"DT_NASCIMENTO\": \"string\", \"IDADE\": \"string\", \"SEXO\": \"string\", \"ESTADO_CIVIL\": \"string\", \"CPF\": \"string\", \"TITULAR_CPF\": \"string\", \"EMAIL\": \"string\", \"RESIDE_BRASIL\": \"string\", \"RENDA_MENSAL\": \"string\", \"NUM_FILHOS\": \"string\", \"PPE\": \"string\", \"DOCUMENTOS\": { \"DOCUMENTO\": { \"NATUREZA_DOC\": \"string\", \"DOCUMENTO\": \"string\", \"ORGAO_EXPEDIDOR\": \"string\", \"DATA_EXPEDICAO\": \"string\" } }, \"ENDERECOS\": { \"TP_CORRESPONDENCIA\": \"string\", \"ENDERECO\": [ { \"TIPO\": \"string\", \"LOGRADOURO\": \"string\", \"NUMERO\": \"string\", \"COMPLEMENTO\": \"string\", \"BAIRRO\": \"string\", \"CIDADE\": \"string\", \"ESTADO\": \"string\", \"CEP\": \"string\" } ] }, \"TELEFONES\": { \"TELEFONE\": [ { \"TIPO\": \"string\", \"DDI\": \"string\", \"DDD\": \"string\", \"NUMERO\": \"string\" } ] }, \"PROFISSAO\": { \"CODIGO\": \"string\", \"DESCRICAO\": \"string\", \"CATEGORIA\": \"string\", \"EMPRESA\": { \"NOME\": \"string\" } } }, \"PLANOS\": { \"VL_TOTAL\": \"string\", \"PLANO\": [ { \"CODIGO\": \"string\", \"NOME\": \"string\", \"VL_AP_INICIAL\": \"string\", \"VL_PORTAB\": \"string\", \"TP_TRIBUTACAO\": \"string\", \"DT_CONCESSAO\": \"string\", \"PRAZO_CERTO\": \"string\", \"PRAZO_DECRESCIMO\": \"string\", \"COBERTURAS\": { \"COBERTURA\": { \"CODIGO\": \"string\", \"VL_CONTRIB\": \"string\", \"VL_COBERTURA\": \"string\" } } } ] }, \"BENEFICIARIOS\": { \"BENEFICIARIO\": [ { \"NOME\": \"string\", \"NASCIMENTO\": \"string\", \"PARENTESCO\": \"string\", \"PARTICIPACAO\": \"string\", \"CD_PLANO\": \"string\" } ] }, \"DECLARACOES\": { \"DPS\": { \"TIPO_DPS\": \"string\", \"PESO\": \"string\", \"ALTURA\": \"string\", \"PERGUNTAS\": { \"PERGUNTA\": [ { \"NUMERO\": \"string\", \"QUESTAO\": \"string\", \"RESPOSTA\": \"string\", \"OBS_RESPOSTA\": \"string\" } ] } } }, \"DADOS_COBRANCA\": { \"PERIODICIDADE\": \"string\", \"TIPO_COBRANCA\": \"string\", \"DIA_VENCIMENTO\": \"string\", \"COMP_DEBITO\": \"string\", \"NUM_CONVENIO\": \"string\" }, \"USO_MONGERAL\": { \"CONV_ADESAO\": \"string\", \"ACAO_MARKETING\": \"string\", \"ALTERNATIVA\": \"string\", \"SUCURSAL\": \"string\", \"DIR_REGIONAL\": \"string\", \"GER_SUCURSAL\": \"string\", \"GER_COMERCIAL\": \"string\", \"AGENTE\": \"string\", \"CORRETOR1\": \"string\", \"CORRETOR2\": \"string\", \"AGENTE_FIDELIZACAO\": \"string\", \"MODELO_PROPOSTA\": \"string\", \"MODELO_PROPOSTA_GED\": \"string\", \"TIPO_COMISSAO\": \"string\" } }}"', (error, stdout) => {
        if(error) {
            return res.send("Error");
         }
         return res.send(stdout);
    });
});

router.post('/simulacao', async (req, res) => {
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