// β unknown
let as: unknown

if (typeof as === 'number') {
  let f = as + 1
}
if (typeof as === 'string') {
  let f = as.toUpperCase()
}
// π« let f = as + 1

// β void
// μλ¬΄κ²λ returnνμ§ μλ ν¨μμμ λ°ν μλ£ν
function hellos() {
  console.log('x')
}
const ac = hello()
// π« ac.toUpperCase()

// β never
// ν¨μκ° returnνμ§ μμ λ
function hello(): never {
  throw new Error('zzz')
  // π«return "a"
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

// if μμμλ stringνμ name λ°ν
// else if μμμλ numberνμ name λ°ν
// else μμμλ neverνμ name λ°ν
// β μ¦, μ λλ‘ μΈμκ° μ λ¬λμλ€λ©΄ elseλ‘ μ¬ μ μμ
function invalid(message: string): never {
  throw new Error(message)
}
// neverλ μΌλ°μ μΌλ‘ ν¨μμ λ¦¬ν΄ νμμΌλ‘ μ¬μ©λ©λλ€.
//  ν¨μμ λ¦¬ν΄ νμμΌλ‘ neverκ° μ¬μ©λ  κ²½μ°,
//  ν­μ μ€λ₯λ₯Ό μΆλ ₯νκ±°λ λ¦¬ν΄ κ°μ μ λλ‘ λ΄λ³΄λ΄μ§ μμμ μλ―Έν©λλ€.
//  μ΄λ λ¬΄ν λ£¨ν(loop)μ λΉ μ§λ κ²κ³Ό κ°μ΅λλ€.
