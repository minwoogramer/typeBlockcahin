interface SStorage<T> {
  [key: string]: T
}

//제네릭은 다른타입에 물려줄 수 있음
//제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에
//인터페이스는 제네릭을 사용해
class LocalStorage<T> {
  private storage: SStorage<T> = {}
  set(key: string, value: T) {
    this.storage[key] = value
  }
  remove(key: string) {
    delete this.storage[key]
  }
  get(key: string): T {
    return this.storage[key]
  }
  clear() {
    this.storage = {}
  }
}

const stringsStorage = new LocalStorage<string>()
//타입스크립트가 하는것은 이 T는 value를 string인 value로 바꿔주는 거야
stringsStorage.get('ket')
stringsStorage.set('hello', 'how are you?')
const booleansStorage = new LocalStorage<boolean>()

booleansStorage.get('xxx')
booleansStorage.set('hello', true)
