
export function deposit(amount){
    return {type:"deposit",payload:amount}
}

export function withdraw(amount){
    return {type:"withdraw",payload:amount}
}

export function nameupdate(name){
    return {type:"nameupdate",payload:name}
}

export function mobileupdate(number){
    return {type:"mobileupdate",payload:number}
}