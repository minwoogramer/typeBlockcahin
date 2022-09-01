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

// interface LocalStorageAPI<T> {
//   [key: string]:T
// }
// class MyLocalStorage<T> {
//     private storage : LocalStorageAPI<T> ={}
//     setItem(key:string, value: T){
//         this.storage[key] = value
//     }
//     getItem(key:string):T{
//         return this.storage[key]
//     }
//     clearItem(key: string){
//         delete this.storage[key]
//     }
//     clear(){
//         this.storage = {}
//     }
// }
// const LLocalStorage = new MyLocalStorage<string>();

// LLocalStorage.setItem("hi", "my name is")
// LLocalStorage.getItem("hi")
// LLocalStorage.clearItem("hi")
// LLocalStorage.clear()

// interface PositionCallback{
//     (position: Position): void
// }
// interface Position {
//     coords: Coordinates
//     timestamp: number
// }
// interface Coordinates {
//     latitude: number
//     longitude: number
// }
// interface PositionErrorCallback {
//     (positionError: PositionError): void
// }
// interface PositionError {
//   PERMISSION_DENIED: number
//   POSITION_UNAVAILABLE: number
//   TIMEOUT: number
//   code: number
//   message: string
// }
// interface Optionobj {
//     enableHighAccuracy: boolean
//     maximumAge: number
//     timeout: number
// }
// interface GeolocationAPI {
//  clearWatch(watchId: number): void
//  getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: Optionobj): void
//  watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: Optionobj): number
// }

// class MyGeo implements GeolocationAPI {
//     private  location = {}
//     private pos:Position
//     constructor(pos:Position) {
//       this.pos=pos
//     }

//     clearWatch(watchId:number){
//         delete this.location[watchId]
//     }
//     getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: Optionobj){
//         this.location={successCallback,errorCallback,options}
//     }
//     watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: Optionobj){
//        return this.location={successCallback,errorCallback,options}
//     }
// }

// let watchId:number;
// let target:Coordinates;
// let optionsObj:Optionobj;
// function successFn(pos:Position) {
//   const crd = pos.coords;

//   if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//     console.log('Congratulations, you\'ve reached the target!');
//     navigator.geolocation.clearWatch(watchId);
//   }
// };

// function errorFn(err:any) {
//   console.error(`ERROR(${err.code}): ${err.message}`);
// };
// watchId = 2
// target = {
//   latitude : 0,
//   longitude: 0,
// }

// optionsObj = {
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 0
// };

// const geolocation = new MyGeo()
// geolocation.getCurrentPosition(successFn);
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(successFn);
// geolocation.watchPosition(successFn,  errorFn);
// geolocation.watchPosition(successFn,  errorFn, optionsObj);
// geolocation.clearWatch(watchId);

// LocalStorage Interface
abstract class SLocalStorage<T> {
  protected items: Items<T>
  constructor() {
    this.items = {}
  }
  abstract length(): number
  abstract key(index: number): T
  abstract getItem(key: string): T
  abstract setItem(key: string, value: T): void
  abstract removeItem(key: string): void
  abstract clear(): void
}
interface Items<T> {
  [key: string]: T
}
class SuperStorage extends SLocalStorage<string> {
  constructor() {
    super()
  }
  public key(index: number) {
    return Object.keys(this.items)[index]
  }
  public length() {
    return Object.keys(this.items).length
  }
  public getItem(key: string) {
    return this.items[key]
  }
  public setItem(key: string, value: string) {
    this.items[key] = value
  }
  public removeItem(key: string) {
    delete this.items[key]
  }
  public clear() {
    this.items = {}
  }
}

// Geolocation Interface
type GeolocationCoords = {
  latitude: number
  longitude: number
  altitude: number
  accuracy: number
  altitudeAccuracy: number
  heading: number
  speed: number
}
type Position = {
  coords: GeolocationCoords
}
type GeoError = {
  code: number
  message: string
}
type SuccessFunction = (position: Position) => void
type ErrorFunction = (error: GeoError) => void
type GeoOptions = {
  maximumAge: number
  timeout: number
  enableHighAccuracy: boolean
}

type GetCurrentPosition = {
  (success: SuccessFunction): void
  (success: SuccessFunction, error: ErrorFunction): void
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void
}

type WatchCurrentPosition = {
  (success: SuccessFunction): number
  (success: SuccessFunction, error: ErrorFunction): number
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number
}

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition
  watchPosition: WatchCurrentPosition
  clearWatch: (id: number) => void
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions,
  ) => {
    return // Implementation goes here :)
  }
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions,
  ) => {
    return 1 // Implementation goes here :)
  }
  clearWatch = (id: number) => {}
}
