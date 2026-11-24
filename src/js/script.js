document.addEventListener("DOMContentLoaded", () => {
  iniciarTema();

  // Cada página solo tiene algunos elementos: comprobamos que existen
  if (document.getElementById("lista-cesta")) iniciarCesta();
  if (document.getElementById("form-registro")) iniciarRegistro();
});


// ===== 1. MODO CLARO / OSCURO (las dos páginas) =====
function iniciarTema() {
  const html = document.documentElement;
  const boton = document.getElementById("boton-tema");

  // Al cargar, aplicamos el tema guardado (por defecto, claro)
  aplicarTema(localStorage.getItem("tema") || "light");

  boton.addEventListener("click", () => {
    const nuevoTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    aplicarTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
  });

  function aplicarTema(tema) {
    html.setAttribute("data-bs-theme", tema);
    // Icono: sol en modo oscuro, luna en modo claro
    boton.querySelector("i").className = tema === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
  }
}


// ===== 2. CESTA (index.html) =====
function iniciarCesta() {
  const cesta = []; // productos añadidos: { nombre, precio, cantidad }
  const lista = document.getElementById("lista-cesta");
  const total = document.getElementById("total-cesta");
  const contador = document.getElementById("contador");

  document.querySelectorAll(".boton-anadir").forEach((boton) => {
    boton.addEventListener("click", () => {
      // Leemos los atributos data-nombre y data-precio del botón
      const nombre = boton.dataset.nombre;
      const precio = Number(boton.dataset.precio);

      // Si ya está en la cesta sumamos uno; si no, lo añadimos
      const producto = cesta.find((p) => p.nombre === nombre);
      if (producto) {
        producto.cantidad++;
      } else {
        cesta.push({ nombre, precio, cantidad: 1 });
      }
      pintarCesta();
    });
  });

  // Vuelve a dibujar la lista, el total y el contador
  function pintarCesta() {
    let suma = 0;
    let unidades = 0;
    lista.innerHTML = "";

    cesta.forEach((p) => {
      suma += p.precio * p.cantidad;
      unidades += p.cantidad;
      // Añado un <li> por producto usando un template string
      lista.innerHTML += `
        <li class="producto-cesta">
          <strong>${p.nombre}</strong><br>
          ${euros(p.precio)} &nbsp; x${p.cantidad}
        </li>`;
    });

    total.textContent = euros(suma);
    contador.textContent = unidades;
  }

  // Pasa 450 a "450,00 €"
  function euros(numero) {
    return numero.toFixed(2).replace(".", ",") + " €";
  }
}


// ===== 3. VALIDACIÓN DEL FORMULARIO (registro.html) =====
function iniciarRegistro() {
  const formulario = document.getElementById("form-registro");
  const mensajeOk = document.getElementById("mensaje-ok");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // no hay servidor: evitamos que la página se recargue
    mensajeOk.textContent = "";

    const usuario = document.getElementById("usuario");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repetir = document.getElementById("repetir");
    const condiciones = document.getElementById("condiciones");

    // Cada comprobación devuelve true o false.
    // .test() comprueba si el texto cumple la expresión regular.
    // Usuario: solo letras, números o _, entre 3 y 15 caracteres
    const ok1 = comprobar(usuario, /^[a-zA-Z0-9_]{3,15}$/.test(usuario.value),
      "Entre 3 y 15 caracteres: letras, números o _.");

    // Email: algo + @ + algo + . + algo, sin espacios
    const ok2 = comprobar(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
      "Introduce un correo válido (ej. nombre@correo.com).");

    // Contraseña: 8 caracteres o más, al menos una mayúscula y un número
    const ok3 = comprobar(password,
      password.value.length >= 8 && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value),
      "La contraseña no cumple los requisitos.");

    const ok4 = comprobar(repetir, repetir.value !== "" && repetir.value === password.value,
      "Las contraseñas no coinciden.");

    const ok5 = comprobar(condiciones, condiciones.checked,
      "Debes aceptar las condiciones.");

    if (ok1 && ok2 && ok3 && ok4 && ok5) {
      mensajeOk.textContent = `¡Cuenta creada! Bienvenido/a, ${usuario.value}.`;
      formulario.reset();
      formulario.querySelectorAll(".is-valid").forEach((campo) => campo.classList.remove("is-valid"));
    }
  });

  // Marca el campo en verde (is-valid) o rojo (is-invalid) y escribe el error
  function comprobar(campo, esValido, mensajeError) {
    campo.classList.toggle("is-valid", esValido);
    campo.classList.toggle("is-invalid", !esValido);
    document.getElementById(campo.id + "-error").textContent = esValido ? "" : mensajeError;
    return esValido;
  }
}
