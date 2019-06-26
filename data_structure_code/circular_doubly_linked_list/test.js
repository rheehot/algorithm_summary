const LinkedList = require('./linked_list');
const linkedList = new LinkedList();

describe('Linked List test', () => {
    test('Add first test', () => {
        linkedList.addFirst(1);
        expect(linkedList.getItem(0)).toEqual(1);
        linkedList.addFirst(2);
        expect(linkedList.getItem(0)).toEqual(2);
    });

    test('Add last test', () => {
        linkedList.addLast(3);
        expect(linkedList.getItem(linkedList.size()-1)).toEqual(3);
    });

    test('Add first test', () => {
        linkedList.addFirst(4);
        expect(linkedList.getItem(0)).toEqual(4);
    });

    test('Add last test', () => {
        linkedList.addLast(5);
        expect(linkedList.getItem(linkedList.size() - 1)).toEqual(5);
        linkedList.addLast(6);
        expect(linkedList.getItem(linkedList.size() - 1)).toEqual(6);
    });

    test('add(index, item) test', () => {
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

    test(`Delete first item test`, () => {
        linkedList.deleteFirst();
        expect(linkedList.getItem(0)).toEqual(20);
        linkedList.deleteFirst();
        expect(linkedList.getItem(0)).toEqual(10);
        linkedList.deleteFirst();
        expect(linkedList.getItem(0)).toEqual(4);
    });

    test(`Delete last item test`, () => {
        linkedList.deleteLast();
        expect(linkedList.getItem(linkedList.size() - 1)).toEqual(5);
        linkedList.deleteLast();
        expect(linkedList.getItem(linkedList.size() - 1)).toEqual(8);
        linkedList.deleteLast();
        expect(linkedList.getItem(linkedList.size() - 1)).toEqual(3);
    });

    test(`delete(index) item test`, () => {
        linkedList.delete(4);
        expect(linkedList.getItem(4)).toEqual(3);
        linkedList.delete(1);
        expect(linkedList.getItem(1)).toEqual(7);
        linkedList.delete(1);
        expect(linkedList.getItem(1)).toEqual(1);
        linkedList.delete(0);
        expect(linkedList.getItem(0)).toEqual(1);
        linkedList.delete(1);
        expect(linkedList.getItem(0)).toEqual(1);
        linkedList.delete(0);
        expect(linkedList.getItem(0)).toEqual(-1);
    });

    test(`Add or Delete test`, () => {
        linkedList.add(0, 200);
        linkedList.add(1, 150);
        linkedList.addFirst(300);
        linkedList.addLast(450);
        linkedList.add(10, 250);
        linkedList.delete(3);
        linkedList.delete(3);
        linkedList.deleteFirst();
        linkedList.deleteFirst();
        linkedList.delete(0);
        linkedList.add(0, 15);
        linkedList.add(2, 20);
        linkedList.add(1, 25);
        linkedList.deleteLast();
        expect(linkedList.getItem(0)).toEqual(15);
        expect(linkedList.getItem(1)).toEqual(25);
    });

    test('Print Item', () => {
        const testArr = [15, 25];
        for (let i = 0; i < linkedList.size(); i++) {
            expect(linkedList.getItem(i)).toEqual(testArr[i]);
        }
        expect(linkedList.size()).toEqual(2);
        linkedList.printAll();
        console.log(`size : ${linkedList.size()}`);
    });
});
