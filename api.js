const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');


const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
});

//npm i uuid-apikey
//https://www.npmjs.com/package/uuid-apikey
//console.log(uuidAPIKey.create());
//한번찍어서 나온 키 값 아래에 저장 ->  DB연동후 DB에 저장해도됨 

const key = {
    apiKey: 'TWTPXBS-1B34VVP-JXKWWAZ-VCKMMA8',
    uuid: 'd7356eaf-0ac6-4dee-9767-ce2bdb274a29'
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let { apikey, type } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not vaild.');
    } else {
        if (type == 'seoul') {
            let data = [
                { product: "홍길동", amount: "seoul" },
                { product: "김철수", amount: "seoul" }
            ];
            res.send(data);
        } else if (type == 'jeju') {
            let data = [
                { product: "오별", amount: "jeju" },
                { product: "유수종", amount: "jeju" }
            ];
            res.send(data);
        } else {
            res.send('Type is not correct.');
        }
    }
});

//Postman -> 개발한 api 를 테스트할 수 있는 API 개발 생산성을 높여주는 플랫폼 입니다.

app.get('/api/sales/:apikey/:year', async (req, res) => {
    let { apikey, year } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not vaild.');
    } else {
        if (year == '2020') {
            let data = [
                { product: "반도체", amount: 55555 },
                { product: "냉장고", amount: 55555 }
            ];
            res.send(data);
        } else if (year == '2021') {
            let data = [
                { product: "반도체", amount: 44444 },
                { product: "냉장고", amount: 44444 }
            ];
            res.send(data);
        } else {
            res.send('Type is not correct.');
        }
    }
});
