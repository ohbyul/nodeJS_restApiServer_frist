const schedule = require('node-schedule');

//let scheduleObj = [];    //여러개일시    
let scheduleObj = null;  //현재 1게

const set = (s) => {
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    const job = schedule.scheduleJob(rule, function () {
        console.log('Schediler has executed!');
    });

    //scheduleObj.push(job);   // 여러개 일시
    scheduleObj = job;
};

const cancel = () => {
    if (scheduleObj != null) {
        scheduleObj.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
};

const scheduleData = {
    dayOfWeek: [1, 2],  //일요일이 0 
    hour: 15,
    minute: 25
};

setScheduler(scheduleData);

//https://www.npmjs.com/package/node-schedule
//npm i node-schedule
//https://github.com/node-schedule/node-schedule
// 깃 페이지 에서 실무에서 자주 쓰는 코드 복사 

//2개의 funion ->  ㄴset / cancel
//cancel -> 기존에 있던 스케줄잡을 없애주는 역할
//set - > 신규로 추가해 주는 역할 