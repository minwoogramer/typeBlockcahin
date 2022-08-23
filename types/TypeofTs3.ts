// ✅ unknown
let as: unknown

if (typeof as === 'number') {
  let f = as + 1
}
if (typeof as === 'string') {
  let f = as.toUpperCase()
}
// 🚫 let f = as + 1

// ✅ void
// 아무것도 return하지 않는 함수에서 반환 자료형
function hellos() {
  console.log('x')
}
const ac = hello()
// 🚫 ac.toUpperCase()

// ✅ never
// 함수가 return하지 않을 때
function hello(): never {
  throw new Error('zzz')
  // 🚫return "a"
}

function temp(name: string | number): never {
  if (typeof name === 'string') {
    name
  } else if (typeof name === 'number') {
    name
  } else {
    name
  }
}

// if 안에서는 string형의 name 반환
// else if 안에서는 number형의 name 반환
// else 안에서는 never형의 name 반환
// ⇒ 즉, 제대로 인자가 전달되었다면 else로 올 수 없음
