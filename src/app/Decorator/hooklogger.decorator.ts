export function hookelogger(configuration?:any) {
    
    return function (target:any) {
        const componentName = target.name;
        const defaultHooks: string[] = [
            'ngOnChanges',
            'ngOnInit',
            'ngDoCheck'
        ]
        let hooksToBeLogged = (configuration && configuration.hooks) || defaultHooks
        hooksToBeLogged.forEach((hookToBeLogged:any) => {
            const orignal=target.prototype[hookToBeLogged]
            target.prototype[hookToBeLogged] = function (...args:any) {
                console.log(`Component Name: ${componentName} | Hook Name:${hookToBeLogged} |}`,...args)
                orignal && orignal.apply(this,args)
            }

        });
    }
   
}