const WEB_IP = "http://127.0.0.1:5500/Login.html";
const CALLBACK_IP = "http://127.0.0.1:5500/CallBack.html";
const CLIENT_ID = "Hw7RwBFOB7UjSufSEEjy";

var naver_id_login = new naver_id_login(CLIENT_ID, CALLBACK_IP);
var state = naver_id_login.getUniqState();
naver_id_login.setButton("white", 2, 40);
naver_id_login.setDomain(WEB_IP);
naver_id_login.setState(state);
naver_id_login.setPopup();
naver_id_login.init_naver_id_login();

window.Kakao.init("13cee8f0d511dff11f766fe1d031b0a1"); // 사용하려는 앱의 JavaScript 키 입력

function kakaoLogin() {
  window.Kakao.Auth.login({
    scope: "profile_nickname, account_email, gender",
    success: function (authObj) {
      alert("로그인 성공");
      console.log(authObj);
      // window.Kakao.API.request({
      //   url: "/v2/user/me",
      //   success: res => {
      //     const kakao_account = res.kako_account;
      //     console.log(kakao_account);
      //   },
      // });
    },
  });
}
