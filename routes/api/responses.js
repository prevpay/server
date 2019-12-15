const addAcountResponse = {
        "data": {
            "accountHolderId": "72A062F2-ACB7-D054-B504-437AFDD3A91C",
            "account": {
                "accountId": "CD328F3D-6FF7-9269-549A-5DD6D10D7956",
                "mobilePhone": {
                    "phoneNumber": "11990111403",
                    "country": "BRA"
                }
            },
            "accountStatus": "CREATING"
        }
};

const transferResponse = {
    "data": {
        "transactionId": "E9F59D9B-5381-774E-09C1-7939013AC25B",
        "externalIdentifier": "11990111404",
        "financialStatement": {
            "status": "APPROVED"
        }
    }
}

const boletoResponse = {
    "data": {
        "transactionId": "7B0FB577-42A5-2B1D-7B41-E1E88D4B2478",
        "externalIdentifier": "11990111401",
        "senderAccountId": "6C267E55-5FB5-582F-4195-B71E18CB6846",
        "boletoUrl": "https://varcom-mp-01-boletos.s3.us-west-2.amazonaws.com/boleto-1C95CB8E-D5A6-023E-781E-1BFD06E7CFDD.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU0iKTUqgkahHm7shn%2BdCPv0toI7yAtS4iYTVB3xpmmAiEA9mbaetO39CsmHk65joBcYkVyLw8g32qHngCfElv%2FNNQq0gIIUhAAGgw1MzYzMTEwNDQyMTciDJC71QwgnEwp5jeIcCqvAoeLV49w9xBMIX8AW1BAvKGpKFolGKXxjUd0oSm15yyOBKt7BoI7dVozPh8d2CmwqIBgaRQrnJ%2Fw2eQ67GqFvd8pjSQ%2BmnSyHCCE2ZNEmQp1jYoHCOn%2Fji7wZ8aaiDjS7Jm7QldLczsQtPZl0Yc%2BpgEm8L85TgQ%2Be%2BT%2B%2F11%2F9erLepmFRCCELPnjW0w0oG%2BwsPgV2MnRhr3pgwagLNK2595iESce2xpWqyNxakjRGK2z9vxHvNlmQ4oc174ygk%2FxiIYuAry00ci3tqJnw95YuzSUWso4Pjpq%2BWa8JJjM%2FFzq3Fihps0HlEfZKEclEy6f3PRtsquQ5F8zhbaWbf%2FFmT0%2BiEGigVEhKjtQ%2BA%2BG%2FwExnVe8JZ%2BXppKiBEjeGa%2FjG6Ayz8KMjz17h34ukT2SWTCOiNbvBTrNAvgzjb9N9v7e9dbxOn9bklfn28UTXMf3E%2BCTtjJ1nRENpZrKILXlh4qjRDRrJvuAriM7TA5%2FsyqDebZHtML%2BO4M%2Fbrd93WoV7xOxOrKRczs8gqg6A5aowi6YdK1TtiicwXJv6uRtRDXrGWXC9LEmH%2FY01QGkYrLt6gcZwK01Cg6cyFko6wN%2BNU885Wm6lJNO%2BmXW%2F1anKkvt7it5MZLDiomvmyag0gyOljAYlULQ61sxYiDgEShRZboWqQgD57FWUNBfqLRm5s5CE%2BTsq4qXe53QE2vsp9iFPZAxurre1sfzgUYofi3xC2RkJFHh07O8Yc6jJ2v21nYGJkzi%2FI514jVwS1jbXNt7E3Kp1t%2FtwjLPFrLrKlistO5go2jkXirHho6bTwUCAqp5Q8vzoMzKz3Wo%2FxTOhtzSQlf50B5sKMzwY3IQf5cUjCUCynyd1A%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191215T014912Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=ASIAXZXVBDB44A4STEVD%2F20191215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=6a597e5a113cbfaa3f10852d14b6f65cb58ba378b11019b23f68feea5bad26a6",
        "typeableLine": "34190100080004977000100000010009581030000007435",
        "financialStatement": {
            "status": "CREATED"
        },
        "dueDate": "2019-12-14",
        "transactionDate": "2019-12-14T22:49:12.713-03:00",
        "transactionType": "Boleto",
        "totalAmount": 74.35,
        "paidAmount": 74.35
    }
}

module.exports = {addAcountResponse, transferResponse, boletoResponse}