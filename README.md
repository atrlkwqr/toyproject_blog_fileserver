# toyproject_blog_fileserver

### Common Naming Conventions
1. lowerCarmelCase 사용
2. Global variables의 경우 대문자로 작성
3. 상수(constant)는 대문자로 작성

***

### Variable Names

1. 모든 이름은 문자(letter)로 시작

```
e.g. : 
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

***

### Operators Spaces

1. 연산자 주위와 쉼표 다음에 공백(spaces)


e.g. : 
```
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```

***

### Indentation

1. 코드 블록의 들여쓰기에는 항상 4칸(spaces) 사용


e.g. : 
```
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
```

* 편집기마다 탭을 다르게 해석하기 때문에 들여쓰기에 탭(tabulator)을 사용 금지

***

### Statement Rules

* 간단한 statement
1. 항상 세미콜론으로 끝맺음

e.g. : 
```
var values = ["Volvo", "Saab", "Fiat"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```

* 복잡한 statement
1. 첫 번째 줄 끝에 여는 괄호(opening bracket)를 배치
2. 여는 괄호(opening bracket) 앞에 하나의 공백 사용
3. 닫는 괄호(opening bracket)는 새 줄에 배치
4. 세미콜론으로 끝맺지 않음

e.g. :
```
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```

***

### Code Line Length

1. 한 줄에 80문자 이상 사용 금지
2. 한 줄로 구현하지 못한다면 연산자(operator) 또는 쉼표(comma) 다음 줄 바꿈
