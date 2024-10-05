// Función que valida el formulario cuando el usuario intenta enviarlo
function validarFormulario() {
    // Obtenemos los valores de los campos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmarPassword = document.getElementById('confirmarPassword').value;
    let mensaje = document.getElementById('mensaje');

    // Limpiamos el mensaje de error o éxito
    mensaje.innerHTML = '';

    // Verificamos que el nombre no esté vacío
    if (nombre.trim() === '') {
        mensaje.innerHTML = 'Por favor, ingresa tu nombre.';
        return false;
    }

    // Verificamos el formato del correo electrónico usando una expresión regular
    let regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(email)) {
        mensaje.innerHTML = 'Por favor, ingresa un correo electrónico válido.';
        return false;
    }

    // Verificamos que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        mensaje.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
        return false;
    }

    // Verificamos que ambas contraseñas coincidan
    if (password !== confirmarPassword) {
        mensaje.innerHTML = 'Las contraseñas no coinciden.';
        return false;
    }

    // Si todo es correcto, mostramos un mensaje de éxito
    mensaje.style.color = 'green';
    mensaje.innerHTML = 'Registro completado con éxito.';
    return true;  // Permite el envío del formulario
}

