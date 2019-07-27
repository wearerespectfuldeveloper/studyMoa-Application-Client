export default function ({ $axios, redirect }) {
  
  // 기본 URL 설정
  $axios.defaults.baseURL = "http://13.124.229.15:8081/api/v/1.0/"

  // 모든 REST 요청의 리퀘스트 헤더에 들어갈 내용 설정
  $axios.defaults.headers.common['something'] = "something";

  // get(특정) 요청의 리퀘스트 헤더에 들어갈 내용 설정
  $axios.defaults.headers.get['getSome'] = "getSome";

  // 요청을 보내기 전에 몇 가지를 손봄
  const reqInterceptor = $axios.interceptors.request.use(config => {
    console.log('컨피그!', config);
    return config;
  });

  // 응답을 받기 전에 몇 가지를 손봄
  const resInterceptor = $axios.interceptors.response.use(res => {
    console.log('레스!', res);
    return res;
  });

  // // 등록한 인터셉터를 해제시킴
  $axios.interceptors.request.eject(reqInterceptor);
  $axios.interceptors.response.eject(resInterceptor);


  // // 만일 다른 URL 요청은 따로 다루고 싶을 때 <- 근데 이거 export는 어떻게 할지 좀더 알아봐야 겠다.
  // const instance = $axios.create({
  //   baseURL: ""
  // })
  // instance.defaults.headers.common['something'] = "something2";
  // instance.defaults.headers.get['something'] = "getsome2";


};