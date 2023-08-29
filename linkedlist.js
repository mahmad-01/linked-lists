import Node from "./node.js";
export default class linkedList{
    constructor(){
        head = null;
    }
    append(value){
        if (this.head==null){
            this.head = new Node(value);
        }
        else{
            let temp = new Node (head);
            while (temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node (value);
        }
    }
    prepend(value){
        if (this.head == null){
            this.head = new Node(value);
        }
        else{
            let temp = new Node(value);
            temp.nextNode = head;
            this.head = temp;
        }
    }
    size(){
        if (this.head == null){
            return 0;
        }
        else{
            let count = 0;
            let temp = this.head;
            while (temp.nextNode != null){
                count += 1;
                temp = temp.nextNode;
            }
            return count;
        }
    }
    head(){
        return this.head;
    }
    tail(){
        let temp = this.head;
        while (temp.nextNode != null){
            temp = temp.nextNode;
        }
        return temp;
    }
    at(index){
        let temp = this.head;
        for (let i=0;i<index;i++){
            temp = temp.nextNode;
        }
        return temp;
    }
    pop(){
        let temp = this.head;
        let prev = null;
        while (temp.nextNode != null){
            prev = temp;
            temp = temp.nextNode;
        }
        prev.nextNode = null;
    }
    contains(value){
        let temp = this.head;
        while (tmp != null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
          }
          return false;
    }
    find(value) {
        let temp = this.head;
        let index = 0;
        while (temp != null) {
          if (temp.value === value) {
            return index;
          }
          temp = temp.nextNode;
          index++;
        }
        return null;
      }
    
      toString() {
        let temp = this.head;
        let stringL = "";
        while (temp != null) {
          stringL += `(${temp.value}) -> `;
          temp = temp.nextNode;
        }
        return (stringL += "null");
      }
}