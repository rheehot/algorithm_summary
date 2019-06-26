const LinkedList = require('./linked_list');
const linkedList = new LinkedList();

describe('LinkedList Test', () => {
    test('add First Test', () => {
        linkedList.addFirst(1);
        expect(linkedList.getItem(0)).toEqual(1);
        linkedList.addFirst(2);
        expect(linkedList.getItem(0)).toEqual(2);
    });

    test('add Last Test', () => {
        linkedList.addLast(3);
        expect(linkedList.getItem(linkedList.size()-1)).toEqual(3);
    });

    test('add First Test', () => {
        linkedList.addFirst(4);
        expect(linkedList.getItem(0)).toEqual(4);
    });

    test('add Last Test', () => {
        linkedList.addLast(5);
        expect(linkedList.getItem(linkedList.size()-1)).toEqual(5);
        linkedList.addLast(6);
        expect(linkedList.getItem(linkedList.size()-1)).toEqual(6);
    });

    test('add(index, item) Test', () => {
        linkedList.add(2, 7);
        expect(linkedList.getItem(2)).toEqual(7);
        linkedList.add(5, 8);
        expect(linkedList.getItem(5)).toEqual(8);
        linkedList.add(0, 10);
        expect(linkedList.getItem(0)).toEqual(10);
        linkedList.add(0, 15);
        expect(linkedList.getItem(0)).toEqual(15);
        linkedList.add(1, 20);
        expect(linkedList.getItem(1)).toEqual(20);
        linkedList.add(7, 25);
        expect(linkedList.getItem(7)).toEqual(25);
    });

    test('Print Item', () => {
        for (let index = 0; index < linkedList.size(); index++) {
            console.log(linkedList.getItem(index));
        }
    });
});

// linkedList.addFirst(1);
// linkedList.addFirst(2);
// linkedList.addLast(3);
// linkedList.addFirst(4);
// linkedList.addLast(5);
// linkedList.addLast(6);
// linkedList.add(2, 7);
// linkedList.add(5, 8);
// // console.log(linkedList.getItem(0));
// // console.log(linkedList.getItem(1));
// // console.log(linkedList.getItem(2));
// // console.log(linkedList.getItem(3));
// // console.log(linkedList.getItem(4));
// // console.log(linkedList.getItem(5));
// // console.log(linkedList.getItem(6));
// // console.log(linkedList.getItem(7));
// //linkedList.print('all');
// linkedList.add(0, 10);
// linkedList.add(0, 15);
// linkedList.add(1, 20);
// linkedList.add(7, 25);
// linkedList.print('item');
