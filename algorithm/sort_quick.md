## 퀵 정렬 (Quick Sort)

---

### 퀵 정렬 알고리즘 개념 요약



### 퀵 정렬 알고리즘 과정



### 소스 코드
```c++
// quick sort
void swap(vector<int>& arr, int start, int end) {
    int temp    = arr[start];
    arr[start]  = arr[end];
    arr[end]    = temp;
}

int partition(vector<int>& arr, int start, int end) {
    int pivot = arr[(start + end) / 2];
    while (start <= end) {
        while (pivot > arr[start]) start++;
        while (pivot < arr[end]) end--;
        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    return start;
}

void quickSort(vector<int>& arr, int start, int end) {
    int part = partition(arr, start, end);
    if (start < part-1) quickSort(arr, start, part-1); 
    if (part < end)     quickSort(arr, part, end);
} 
```


### 퀵 정렬 알고리즘 시간 복잡도