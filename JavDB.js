/*************************************

项目名称：JavDB-净化/VIP解锁
下载地址：https://too.st/9zg
更新日期：2024-04-19
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
温馨提示：注册邀请码请输入〖wgdnia〗用于给内置token续VIP会员

**************************************

[rewrite_local]
^https?:\/\/api\.liquidlink\.cn\/api\/v\d\/(users|startup|ads) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js
;^https?:\/\/api\.liquidlink\.cn\/api\/v\d\/(movies|startup|logs\/movie_played) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js

[mitm]
hostname = api.liquidlink.cn

*************************************/


const chxm1024 = {};
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  const headers = $request.headers;
  //headers["authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MzE4OTE0NSwidXNlcm5hbWUiOiJjaHhtMTAyNSJ9.9biip2hb60jXeakBMbnP-5QiLyycLj9s7dpHyXNUp7E";
  chxm1024.headers = headers;
} else {
  const user = /users/;
  const ada = /startup/;
  const adb = /ads/;
  if(user.test($request.url)){
    chxm1023.data.user = Object.assign({}, chxm1023.data.user, {
      "promotion_days" : 9999,
      "promotion_code" : "bkdhng",
      "vip_expired_at" : "2099-09-09T09:09:09.000+09:00",
      "share_url" : "https://jav524.app/?source=bkdhng",
      "is_vip" : true
    });
    chxm1023.banner_type = "payment";
  }
  if(ada.test($request.url)){
    chxm1023.data.splash_ad.enabled = false;
    chxm1023.data.splash_ad.overtime = 0;
    chxm1023.data.splash_ad.ad = {};
    chxm1023.data.feedback.placeholder = "";
    chxm1023.data.settings.UPDATE_DESCRIPTION = "";
    chxm1023.data.settings.NOTICE = ""; 
  }

  if(adb.test($request.url)){
    chxm1023.data.ads = {};
    chxm1023.enabled = false;
  }
  chxm1024.body = JSON.stringify(chxm1023);
}

$done(chxm1024);