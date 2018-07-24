/**
 * 小程序配置文件
 */


var host = 'https://www.zdnuist.xyz:8443';

var config = {

 service: {
   host,
   //获取广告接口
   advert: `${host}/advert/all`,

   
 }
};

module.exports = config;