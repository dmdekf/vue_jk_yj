# jk_yj_movie

### deploy-netlify

[jk_yj_movie](https://distracted-perlman-f82b06.netlify.app/)

## 프로젝트 구성

1. Movie: 정해진 json파일을 받아와 영화 리스트를 화면에 나타낸다.

- 선택된 영화의 경우 모달을 통해 상세정보를 보여준다.

2. Video : Youtuve api를 통해 영화 예고편 정보를 화면에 나타낸다.

- 선택된 비디오의 경우 동영상을 보여준다.

### 목표

- Vue CLI 개발 환경에 대한 이해 컴포넌트 기반 구조에 대한 이해
- axios를 통한 비동기적 데이터 처리에 대한 이해 Vue Router에
- 대한 이해 props와 emit에 대한 이해

## :one: 초기세팅

- 프로젝트 생성

```shell
$ vue create jk_yj_movie
```

- 라우터 추가

```shell
$ vue add router
```

- 필요 라이브러리 설치

```shell
$ npm i axios
```

- bootstrap4 CDN

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
    <!-- Bootstrap4 CDN -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->

    <!-- Bootstrap4 CDN -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

- 어려웠던 점

1. modal 사용 시 id와 target값을 바인딩을 통해서 정해준다.
2. id값은 숫자만 이용할 수 없다.
3. videoitem과 videoitemdetail간의 관계에서 선택된 video를 데이터 값을 갱신하지 않고 보내줄 수 있는 방법이 무엇인지 알 수 없었음. => 동일한 자식 으로 동일선상에서 진행.
4. 비디오의 경우 검색창에서 enter의 동작과 click의 동작 둘로 반응할 수 있는데 click의 경우 값의 전달을 어떻게 할 것인가...

5. deploy시 모바일 에서 화면 구성도 생각해보기
