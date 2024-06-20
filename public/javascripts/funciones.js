function validar(){
    let form = document.form

    if(form.email.value == ''){
        alert('Debe ingresar su correo electrónico')
        form.email.value = ''
        form.email.focus()
        return false
    }

    if(form.password.value == ''){
        alert('Debe ingresar su password')
        form.password.value = ''
        form.password.focus()
        return false    
    }

    form.submit()
}