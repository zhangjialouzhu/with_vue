class timer {
    constructor() {
        let now = new Date(); //当前日期
        this.nowDayOfWeek = now.getDay(); //今天是本周的第几天
        this.nowDay = now.getDate(); //当前日
        this.nowMonth = now.getMonth(); //当前月
        this.nowYear = now.getYear(); //当前年
        this.nowYear += (this.nowYear < 2000) ? 1900 : 0;
    }

    /**
     * @ 格式化日期
     */
    formatDate(date) {
        let myYear = date.getFullYear();
        let myMonth = date.getMonth() + 1;
        let myDate = date.getDate();
        let myHour = date.getHours();
        let mymintue = date.getMinutes();
        let mySecond = date.getSeconds();
        mySecond = (mySecond<10) ? '0' + mySecond : mySecond;
        mymintue = (mymintue<10) ? '0' + mymintue : mymintue;
        myHour = (myHour<10) ? '0' + myHour : myHour;
        myMonth = (myMonth < 10)
            ? "0" + myMonth
            : myMonth;
        myDate = (myDate < 10)
            ? "0" + myDate
            : myDate;
        return myYear + '-' + myMonth + '-' + myDate + ' ' + myHour + ':' + mymintue + ':' + mySecond;
    }
    /**
     * @ 获取本月的天数
     * */
    getMonthDays(myMonth) {
        let monthStart = new Date(this.nowYear, myMonth, 1);
        let monthEnd = new Date(this.nowYear, myMonth + 1, 1);
        return (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
    }
    /**
     * @ 获取本季度的开始月份
     *
    */
    getQuarterStartMonth() {
        let getQuarterStartMonth = 0;
        if (this.nowMonth < 3) {
            getQuarterStartMonth = 0
        } else if (this.nowMonth < 6) {
            getQuarterStartMonth = 3
        } else if (this.nowMonth < 9) {
            getQuarterStartMonth = 6
        } else {
            getQuarterStartMonth = 9
        }
        return getQuarterStartMonth
    }
     /**
     * @ 获取当天开始时间和结束时间  isformat用来判断是传时间戳还是字符串
     *
    */
    getYestdayDate(isFormat){
        let TodayStartDate = new Date(this.nowYear,this.nowMonth,this.nowDay-1);
        TodayStartDate = isFormat ? this.formatDate(TodayStartDate):TodayStartDate.valueOf();
        let TodayEndDate = new Date(this.nowYear,this.nowMonth,this.nowDay);
        TodayEndDate = isFormat ? this.formatDate(TodayEndDate):TodayEndDate.valueOf();
        return [TodayStartDate,TodayEndDate];
    }
    /**
     * @ 获取当天开始时间和结束时间  isformat用来判断是传时间戳还是字符串
     *
    */
    getTodayDate(isFormat){
        let TodayStartDate = new Date(this.nowYear,this.nowMonth,this.nowDay);
        TodayStartDate = isFormat ? this.formatDate(TodayStartDate):TodayStartDate.valueOf();
        let TodayEndDate = new Date(this.nowYear,this.nowMonth,this.nowDay+1);
        TodayEndDate = isFormat ? this.formatDate(TodayEndDate):TodayEndDate.valueOf();
        return [TodayStartDate,TodayEndDate];
    }
     /**
     * @ 获取本周开始时间和结束时间  isformat用来判断是传时间戳还是字符串
     *
    */
    getNowWeekDate(isFormat){
        let weekStartDate = new Date(this.nowYear,this.nowMonth,this.nowDay-this.nowDayOfWeek);
        weekStartDate = isFormat ? this.formatDate(weekStartDate):weekStartDate.valueOf();
        let weekEndDate = new Date(this.nowYear,this.nowMonth,this.nowDay+6-this.nowDayOfWeek);
        weekEndDate = isFormat ? this.formatDate(weekEndDate):weekEndDate.valueOf();
        return [weekStartDate,weekEndDate];
    }
     /**
     * @ 获取本月开始时间和结束时间  isformat用来判断是传时间戳还是字符串
     *
    */
    getNowMonthDate(isFormat){
        let monthStartDate = new Date(this.nowYear,this.nowMonth,1);
        monthStartDate = isFormat ? this.formatDate(monthStartDate):monthStartDate.valueOf();
        let monthEndDate = new Date(this.nowYear,this.nowMonth,this.getMonthDays(this.nowMonth));
        monthEndDate = isFormat ? this.formatDate(monthEndDate):monthEndDate.valueOf();
        return [monthStartDate,monthEndDate];
    }
     /**
     * @ 获取本季度开始时间和结束时间  isformat用来判断是传时间戳还是字符串
     *
    */
    getNowQuarterDate(isFormat){
        let quarterStartDate = new Date(this.nowYear,this.getQuarterStartMonth(),1);
        quarterStartDate = isFormat ? this.formatDate(quarterStartDate):quarterStartDate.valueOf();
        let quarterEndDate = new Date(this.nowYear,this.getQuarterStartMonth()+3,1);
        quarterEndDate = isFormat ? this.formatDate(quarterEndDate):quarterEndDate.valueOf();
        return [quarterStartDate,quarterEndDate];
    }
    /**
     * @ 获取近一天的数据
     */
    getlastDayDate(isFormat){
        let endTime = new Date().valueOf(); 
        let beginTime = endTime - 24*60*60*1000;
        let begin_Time = new Date(beginTime);
        let end_Time = isFormat ? this.formatDate(new Date()):endTime;
        begin_Time = isFormat ? this.formatDate(begin_Time):beginTime;
        return [begin_Time,end_Time]
    }
     /**
     * @ 获取近一周的数据
     */
    getlastWeekDayDate(isFormat){
        let endTime = new Date().valueOf(); 
        let beginTime = endTime - 7*24*60*60*1000;
        let begin_Time = new Date(beginTime);
        let end_Time = isFormat ? this.formatDate(new Date()):endTime;
        begin_Time = isFormat ? this.formatDate(begin_Time):beginTime;
        return [begin_Time,end_Time]
    }
     /**
     * @ 获取近一月的数据
     */
    getlastMonthDayDate(isFormat){
        let LastMonthDays = this.getMonthDays(this.nowMonth-1);
        let endTime = new Date().valueOf(); 
        let beginTime = endTime - LastMonthDays*24*60*60*1000;
        let begin_Time = new Date(beginTime);
        let end_Time = isFormat ? this.formatDate(new Date()):endTime;
        begin_Time = isFormat ? this.formatDate(begin_Time):beginTime;
        return [begin_Time,end_Time]
    }
     /**
     * @ 获取近三月的数据
     */
    getlastQuarterDayDate(isFormat){
        let LastMonthDay1 = this.getMonthDays(this.nowMonth-1);
        let LastMonthDay2 = this.getMonthDays(this.nowMonth-2);
        let LastMonthDay3 = this.getMonthDays(this.nowMonth-3);
        let endTime = new Date().valueOf(); 
        let beginTime = endTime - (LastMonthDay1 + LastMonthDay2 + LastMonthDay3)*24*60*60*1000;
        let begin_Time = new Date(beginTime);
        let end_Time = isFormat ? this.formatDate(new Date()):endTime;
        begin_Time = isFormat ? this.formatDate(begin_Time):beginTime;
        return [begin_Time,end_Time]
    }

}

export {timer}