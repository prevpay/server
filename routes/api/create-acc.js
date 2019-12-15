const create_acc = `curl -X GET \
'https://varcom-mp-api-01.matera.com/v1/accounts/6DC31F87-2511-0B5E-BAB5-EF692F1F7DE9/statement?start=2019-07-01&ending=2019-12-31' \
-H 'transaction-hash: 0df4c7e7999c74f9017dfb5f17b40808c12a3f20e2590fd8c8bfa2411edd1304'`;

module.exports = create_acc;