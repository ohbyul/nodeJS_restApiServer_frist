const nodemailer = require("nodemailer");
const email =  {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c881dfd1cea29",
      pass: "0013494ffbee37"
    }
};


const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'quf8093@gmail.com',
    to : 'quf8093@gmail.com',
    subject :'테스트 메일입니다. node js공부중 ',
    text :'node js email test입니다.'
}

send(email_data);

/*
출처 : 유투브 개발자의품격
링크 : https://www.youtube.com/watch?v=toLDNN4FQv
mailtrap.io 
nodemailer 사용 
 */