# TheGardenOfMorningCalm

아침고요수목원 리뉴얼 반응형 웹페이지를 제작했습니다.

https://koreaseop.github.io/TheGardenOfMorningCalm/

## 기능 구현

**메인프레임**
* 헤더, 푸터, 메뉴
```c
  - 헤더 안에 메뉴 click시 메인페이지내 해당 섹션으로 이동
  - 모바일 헤더 로고, 토글버튼으로 축소
  - 토글버튼 클릭 시 메뉴창 slide down
  - 닫기 버튼 클릭 시 메뉴창 slide up
  - 푸터 안에 select 패밀리사이트 기입
  - 패밀리사이트 링크 연결
```

**메인페이지**
  
  * 메인페이지 실행 기능
  ```c
    - swiper 기능을 활용해 메인비주얼 이미지 좌우슬라이드 효과
    - pagination bullet 수정
    - AOS 라이브러리를 활용하여 fade, zoom기능
    - 모바일 메인은 block형태로 수정 및 이미지, 폰트사이즈 축소
  ```

    
## 사용 라이브러리
|Swiper|jQurey CDN|AOS|Boothstrap icon|
|---|---|---|---|
