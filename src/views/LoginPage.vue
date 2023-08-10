<script setup>

</script>

<template>
    <section class="pantalla-dividida">
        <div class="izquierda">
            <form method="POST" action="/login">
                <h2>Bienvenido a Menu Scan 😎</h2>
                <p style="text-align: center; margin-bottom: 60px;" class="texto plomo">Menu digital al alcance de tu tienda
                </p>

                <div class="contenedor-label-input">
                    <label>Correo electronico:</label>
                    <input type="email" id="email" name="email" placeholder="Ingrese su correo electronico" required>
                </div>
                <div class="contenedor-label-input">
                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>
                </div>
                <div class="contenedor-button">
                    <button type="submit">Iniciar sesion</button>
                </div>
                <div>¿Necesitas una cuenta? <a href="#" class="text-decoration-none text-warning fw-semibold">Registrar</a>
                </div>
            </form>
        </div>

        <div class="derecha">
            <img src="@/assets/images/loginbanner.jpg">
        </div>
    </section>
</template>

<style>
@import '@/assets/css/login.css';
</style>
