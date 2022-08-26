//지난 시간 했던것들
// function add(a:number, b:number) {
//     return a+ b
// }

import { Router } from 'react-router-dom'

const adding = (a: number, b: number) => a + b

//call signature
type Add = (a: number, b: number) => number

const add: Add = (a, b) => a + b
//overloading
//what is overloading?
//서로 다른 여러개 의 call signature를 가졌을때 발생함
//즉 overloading은 여러개의 signature를 가졌다는거지 음음

// 🚫type Adds = {
//     (a:number, b:number):number
//     (a:number, b:number):number
// }

// 🚫const adds: Add=(a,b) =>{
//     if(typeof b ==="string") return a
//     return a + b
// }

//일상에서 발생할 수 있는 overloading은 뭐가 있을까?

// Router.push({
//     path:"/home",
//     state: 1
// })

// .push("/home")

type Config = {
  path: string
  state: object
}

type Push = {
  (config: string | Config): void
}

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config)
  } else {
    console.log(config.path)
  }
}
//파라미터의 개수가 다른경우
type Addd = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}
const addings: Addd = (a, b, c?: number) => {
  if (c) a + b + c
  return a + b
}
//chelenge

// Last 배열의 마지막값 리턴

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(lastItem);

// Prepend 앞에있는값 리턴

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) =>  [item, ...items]

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items,0);

console.log(newItems)