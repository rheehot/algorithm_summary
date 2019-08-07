# 이분 탐색(Binary Search), Lower Bound, Upper Bound

<br>

### :pencil2: 이분 탐색, 이진 탐색(Binary Search)

* 탐색 기법중 하나로 원하는 탐색 범위를 분할해서 찾는 방식이다.

* 원래 배열의 전체를 탐색하는 방식의 속도보다 훨씬 빠르다.

* 이분 탐색 하는 방법은 다음과 같다.

    1. 탐색하려는 배열을 오름차순으로 정렬해야 한다. (진짜 중요하다!)

    2. 배열의 시작(start), 끝(end)을 정해준다.

        `보통 start는 배열의 첫 번째 인덱스로 설정하고, end는 배열의 마지막 인덱스로 설정한다.`

    3. mid 라는 인덱스를 지정하여 탐색을 시작한다.

        `mid 의 값은 start + end 를 2로 나눈 값으로 한다.`

    4. 배열에서 mid 인덱스의 값과 찾고자하는 key값을 비교한다.

        `mid 인덱스의 값이 찾고자하는 key값보다 작으면, start = mid + 1로 인덱스를 지정한다.`

        `mid 인덱스의 값이 찾고자하는 key값보다 크면, end = mid - 1로 인덱스를 지정한다.`

        `mid 인덱스의 값과 찾고자하는 key값이 같다면, mid 인덱스를 반환한다.`

    5. 1 ~ 4번 과정을 반복하는데 start 인덱스가 end 인덱스보다 클때까지 수행한다. ( start <= end 일때, 탐색 작업 수행 )

* 이분 탐색 과정을 코드로 구현해보면 다음과 같다. ( 우리가 찾고자하는 값이 배열에 몇 번째에 있는지 알고싶을때 사용한다. )

```c++
#include <iostream>
#include <algorithm>
#include <vector>

int my_binary_search(vector<int>&arr, int key) {
    int start = 0, end = (int)arr.size() - 1;
    int answer = -1;
    while (start <= end) {
        int mid = (start + mid) / 2;
        if (arr[mid] < key) {
            start = mid + 1;
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else { // 찾은 경우
            answer = mid;
            break;
        }
    }
    return answer;
}

int main() {
    vector<int> arr = { 1, 6, 9, 37, 21, 7, 12 };
    sort(arr.begin(), arr.end()); // 반드시 정렬!

    cout << my_binary_search(arr, 7) << '\n';

    return 0;
}
```

<br>

### :pencil2: Lower Bound

* 이분 탐색(Binnary Search)기반의 탐색 방법이다. 

* 이분 탐색(Binnary Search)과 유사하지만 조금 다르다.

* 같은 원소가 여러개 있어도 상관 없으며, 항상 유일한 해를 구할 수 있다.

* 핵심은 **key값 이상(같거나 큰)인 값 중에서 가장 작은 값의 위치를 찾는다.** 라고 말할 수 있다.

    1. 탐색하려는 배열을 오름차순으로 정렬한다.

    2. 탐색할 시작 인덱스(start)와 끝(end)인덱스를 설정한다. 

        `start는 배열의 첫 번째 인덱스로 지정하고, end는 이분 탐색과는 조금 다르게 배열의 크기로 지정한다.`

        * end를 배열의 크기로 지정하는 이유?
            
            `배열에서 가장 큰 원소보다 더 큰 원소를 찾으려고 할 때, 마지막 인덱스(배열의 크기)를 반환하기 위해서이다.`

    3. mid 라는 인덱스를 지정하여 탐색을 시작한다.

        `mid 의 값은 start + end 를 2로 나눈 값으로 한다.`

    4. 배열에서 mid 인덱스의 값과 찾고자하는 key값을 비교한다.

        `mid 인덱스의 값이 찾고자하는 key값보다 작으면, start = mid + 1로 인덱스를 지정한다.`

        `mid 인덱스의 값이 찾고자하는 key값보다 크면(arr[mid] >= key), end = mid로 인덱스를 지정한다.`

    5. 1 ~ 4번 과정을 반복하는데 start 인덱스가 end 인덱스와 같을때까지 수행한다. ( start < end 일때, 탐색 작업 수행 )

    6. end에 있는 인덱스 값을 반환한다. 
        
        **`key값 이상(같거나 큰) 값 중에서 가장 작은 값의 위치`**

* Lower Bound를 코드로 구현하면 다음과 같다.

```c++
#include <iostream>
#include <algorithm>
#include <vector>

int my_lower_bound(vector<int>& arr, int key) {
    int start = 0, end = (int)arr.size();
    while (start < end) {
        int mid = (start + end) / 2;
        if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return end;
}

int main() {
    vector<int> arr = {10, 50, 20, 30, 20, 20, 30, 30, 10};
    sort(arr.begin(), arr.end()); // 반드시 정렬!

    cout << "my low1 index : " << my_lower_bound(arr, 30) << '\n';
    cout << "my low2 index : " << my_lower_bound(arr, 40) << '\n';
    cout << "my low3 index : " << my_lower_bound(arr, 70) << '\n';
    
    // 결과
    // my low1 index : 5
    // my low2 index : 8
    // my low3 index : 9
    return 0;
}
```