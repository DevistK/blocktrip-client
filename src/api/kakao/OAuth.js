const CLIENT_ID = 'b36e5627dca8ffc7c77ba4264b094c4a';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
