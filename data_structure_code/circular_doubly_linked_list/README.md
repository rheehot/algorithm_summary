## 원형 이중 연결리스트 (Circular Doubly Linked List)

<br>

### :book: 원형 이중 연결리스트 구조

<img src="https://github.com/bestdevhyo1225/image_repository/blob/master/image-20190807224536510.png?raw=true" width="700" height="550">

<br>

### :book: 원형 이중 연결리스트 주요 함수

* **find(index)** : index를 통해 값을 찾는 함수

    `index가 HEAD기준으로 Prev방향으로 가까운지, Next방향으로 가까운지 판단한 후에 Value를 찾아낸다.`

* **createFirstNode(item)** : 첫 번째 Node를 만들때 호출되는 함수

    `중복되는 코드여서 분리했다.`

* **addFirst(item)** : Node를 맨 앞에 추가하는 함수

* **addLast(item)** : Node를 맨 뒤에 추가하는 함수

* **add(index, item)** : 해당 index에 item을 추가하는 함수

    `1. index가 0이면 addFirst()를 호출한다.`

    `2. index가 현재 Node의 Size보다 같거나 크면, addLast()를 호출한다.`

    `3. 그 외 나머지는 find()를 통해 추가할 위치를 찾고, 내부 알고리즘을 통해 Node를 추가한다.`

    * 위의 1, 2번의 경우를 사전에 처리한 이유는, 굳이 find()를 호출해서 탐색할 필요가 없기 때문에 이렇게 구현했다.

* **deleteFirst()** : 맨 앞에 있는 Node를 삭제하는 함수

* **deleteLast()** : 맨 뒤에 있는 Node를 삭제하는 함수

* **delete(index)** : 해당 index의 값을 삭제하는 함수

    `1. index가 Node Size보다 같거나 크면, 존재하지 않는 Node이기 때문에 에러 처리`

    `2. index가 0이거나 현재 Node의 Size가 1이면 deleteFirst()를 호출 한다.`

    `3. index가 Node의 마지막 위치라면, deleteLast()를 호출한다.`

    `4. 그 외 나머지는 find()를 통해 삭제할 위치를 찾고, 내부 알고리즘을 통해 Node를 삭제한다.`

    * 위의 1, 2, 3번의 경우를 사전에 처리한 이유는, 굳이 find()를 호출해서 탐색할 필요가 없기 때문에 이렇게 구현했다.
    
<br>

### :book: Javascirpt로 구현한 원형 이중 연결리스트 소스 코드 

* [node.js](https://github.com/bestdevhyo1225/algorithm_summary/blob/master/data_structure_code/circular_doubly_linked_list/node.js)

* [linked_list.js](https://github.com/bestdevhyo1225/algorithm_summary/blob/master/data_structure_code/circular_doubly_linked_list/linked_list.js)

* [test.js](https://github.com/bestdevhyo1225/algorithm_summary/blob/master/data_structure_code/circular_doubly_linked_list/test.js)