// ✅ readonly 사용하기
type Player2 = {
  readonly name: string
  age?: number
}

const playerMakers = (name: string): Player => ({ name })

const nicos = playerMakers('nico')
// 🚫 nicos.name = "aa"

const numberss: readonly number[] = [1, 2, 3, 4]
// 🚫 numberss.push(1)
// ❗ readonly가 있으면 최초 선언 후 수정 불가
//     ⇒ immutability(불변성) 부여
//         but, javascript에서는 그냥 배열

const names: readonly string[] = ['1', '2', '3', '4', '5', '6']

//✅ Tuple
//Tuple은 array를 생성하게 해주는데
const p: [string, number, boolean] = ['nico', 1, true]
player[0] = 'hi'
//코드를 저장하고 실제 production 환경으로 push하기 전에 오류를 확인할수 있어.

// ✅ undefined, null, any
// any: 아무 타입
// undefined: 선언X 할당X
// null: 선언O 할당X
let a: undefined = undefined
let b: null = null

type Player3 = {
  age?: number
}

let c = []
