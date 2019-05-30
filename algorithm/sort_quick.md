## 퀵 정렬 (Quick Sort)

---

### 퀵 정렬 알고리즘 개념 요약



### 퀵 정렬 알고리즘 과정



### 소스 코드
```c++
// quick sort
#include <vector>
using namespace std;

void swap(vector<int>& arr, int s, int e) {
    int temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
}

int partition(vector<int>& arr, int s, int e) {
    int pivot = arr[(s + e) / 2];
    while (s <= e) {
        while (pivot > arr[s]) s++;
        while (pivot < arr[e]) e--;
        if (s <= e) {
            swap(arr, s, e);
            s++;
            e--;
        }
    }
    return s;
}

void quickSort(vector<int>& arr, int s, int e) {
    int p = partition(arr, s, e);
    if (s < p-1) quickSort(arr, s, p-1);
    if (p < e) quickSort(arr, p, e);
}
```


### 퀵 정렬 알고리즘 시간 복잡도
