export function sticker(configuration:any) {
    
    return function (target:any) {
        target.prototype.sticker=configuration.stiker
    }
   
}