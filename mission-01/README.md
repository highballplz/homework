## HTML (body)
<img src="images/html mark-up structure.png"/>

<br/><br/>

## CSS

### 박스 배치 방식
`1. flex`

ul.product-list
```css
.product-list{
  list-style-type: none;

  width: 600px;

  display:flex;
  flex-flow: row wrap;
}
```

div.button.buy
```css
.buy{
  width:112px;
  height:42px;
  
  background: var(--blue-600, #0074E9);

  padding: 12px 18px 13px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

`2. abosolute : position`

div.logo<br/>
div.description<br/>
div.product-image<br/>
div.button.view-more<br/>

<br/>

### hover 기능 구현
개요
<img src="images/Hover_How it works.png">

div.button.view-more
```css
.view-more{
  width:112px;
  height:42px;

  position: absolute;
  bottom: 20px;
  left: 20px;

  overflow: hidden;
}
```

img.b1
```css
.b1{
  display: block;
}
```
```css
.row a:hover .b1, .column a:hover .b1{
  position: absolute;
  left:-42px;
}
```
<br/><br/>

## Reference
[Youtube "코남 - 마우스를 올리면 텍스트나 아이콘이 위아래서 스르륵 나타나는 효과"](https://www.youtube.com/watch?v=nJtBd_LtcUI)