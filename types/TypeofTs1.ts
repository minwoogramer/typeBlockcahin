const player: {
  name: string
  age?: number
} = {
  name: 'nico',
  age: 115,
}
// age를 선택적으로 가지고 싶게 만들고싶어?
// ?를 넣어주면 돼
// 컴퓨터와 더 나은 방식으로 소통하고있어. 오케이?
// palyer안의 age를 불러와보자

//age가 number로 작성했지만 아마도 undefined일수도있어.
// if(player.age <10){
// }

//반복하는걸 피하고싶다면 Alias를 써보자
type Age = number
type Name = string
type Player = {
  name: Name
  age?: Age
}

const playerNico: Player = {
  name: 'minwoo',
}
//retrun 값의 type 을 정하고싶으면 어떻게해야할까?
//함수가 return 하는값을 알고 싶다면

function playerMaker(name: string): Player {
  return {
    name,
  }
}
const playerMK = (name: string): Player => {
  return { name }
}
const nico = playerMaker('nico')
nico.age = 12
//불가능해 왜냐하면  playerMaker에는 age라는 key값이 없기 때문이야 ok?
