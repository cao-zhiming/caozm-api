/**
  * 获取距离指定时间还有多少天
  * @param {String | Number | Date} dateTime 日期时间
  * @example
  * ```javascript
  *     getDistanceSpecifiedTime('2019/02/02 02:02:00');
  *     getDistanceSpecifiedTime(1549036800000);
  *     getDistanceSpecifiedTime(new Date("2019/2/2 00:00:00"));
  * ```
  */
function getDistanceSpecifiedTime(dateTime) {
    // 指定日期和时间
    var EndTime = new Date(dateTime);
    // 当前系统时间
    var NowTime = new Date();
    var t = NowTime.getTime() - EndTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
    var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
}
