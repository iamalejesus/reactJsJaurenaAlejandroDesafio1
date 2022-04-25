const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <span class="footer-title">Servicios</span> 
                <a class="link link-hover">Marca</a> 
                <a class="link link-hover">Diseño</a> 
                <a class="link link-hover">Marketing</a> 
                <a class="link link-hover">Publicidad</a>
            </div> 
            <div>
                <span class="footer-title">Compañía</span> 
                <a class="link link-hover">Nosotros</a> 
                <a class="link link-hover">Contacto</a> 
                <a class="link link-hover">Trabaja con nosotros</a> 
            </div> 
            <div>
                <span class="footer-title">Legal</span> 
                <a class="link link-hover">Terminos y Condiciones</a> 
                <a class="link link-hover">Privacidad</a> 
                <a class="link link-hover">Cookies</a>
            </div> 
            <div>
                <span class="footer-title">Escríbanos</span> 
                <div class="form-control w-80">
                <label class="label">
                    <span class="label-text">Ingrese su e-mail</span>
                </label> 
                <div class="relative">
                    <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16"></input>
                    <button class="btn btn-outline absolute top-0 right-0 rounded-l-none">Suscribir</button>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer