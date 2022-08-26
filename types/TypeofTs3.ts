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

function temp(name: string | number) {
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
function invalid(message: string): never {
  throw new Error(message)
}
// never는 일반적으로 함수의 리턴 타입으로 사용됩니다.
//  함수의 리턴 타입으로 never가 사용될 경우,
//  항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다.
//  이는 무한 루프(loop)에 빠지는 것과 같습니다.
