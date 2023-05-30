export function readonly(value:any) {
    
    return function (target: any, key: any) {
        Object.defineProperty(target, key, {
            set: () => target.key = value,
            get: () => value,
            configurable:false
        })
        
    }
   
}