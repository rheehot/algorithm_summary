## 선형 자료구조 (큐, 스택, 데크)

---

### 스택 (Stack)

* 자료의 입력과 출력을 한 곳으로 제한한 자료구조
* LIFO (Last In First Out) 구조
* 스택 사용 예시
  1. 함수의 콜 스택
  2. 문자열을 역순으로 출력할 때
  3. 연산자 후위 표기법

### 큐 (Queue)

* 자료의 입력과 출력을 한 쪽 끝(front, rear)으로 제한한 자료구조
* 입력은 rear 로 들어오고,  출력은 front 로 나간다.
* FIFO (First In First Out) 구조
* 큐 사용 예시
  1. 컴퓨터 버퍼에 주로 사용한다.
  2. 마구 입력 되었으나 처리하지 못할 때 사용한다. ( JavaScript 에서 비동기 함수를 처리하는 TaskQueue 를 생각하자 )

### 데크 (Deque)

* 자료의 입력과 출력을 양 쪽 끝에서 가능하게 하는 자료구조
* Scroll (스크롤) : 입력이 한 쪽 끝으로만 가능하도록 제한을 둔 Deque 이다.
* Shelf (셸프) : 출력이 한 쪽 끝으로만 가능하도록 제한을 둔 Deque 이다.