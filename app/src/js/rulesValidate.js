export function required (name) {return !!name || 'Это поле обязательное'}
export function email(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result=re.test(String(email).toLowerCase());
        return result || 'Введите корректный email'
}
export function equalsPassword(password,passwordDuplicate){
        return (password==passwordDuplicate) || 'Пароли не совпадают'
}