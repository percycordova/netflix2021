## Inicializacón del proyecto

`npx create-react-app netflix2021 --template redux`
`npm start`

### Proceso de Limpieza

### Librerias a usar

`npm add @material-ui/core`
`npm add axios`
`npm i firebase`
`npm add react-router-dom`
`npm add react-uuid`
`npm install --save styled-components`

### App.js - layout inicial

- Creamos las rutas
- Rendelizamos Login, si existe lo enviamos a la apliacion, si no lo mandamos a logearse.

### Estilos

- Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes.

### Crear las carpetas de componentes: components

- Creamos la infraestructura básica de los componentes que representa una página:Home, Login, Paypall, Profile, Singup

### Estilos en los componentes de Pages

- Patrón para añadir la infraestructura de estilos a todos los components páginas.

### Crear la carpeta de components, con componentes más secundarios

- Creamos la infraestructura básica del resto de componentes: Banner, Header, Plans, Rows.

### Estilos en los componentes de la carpeta components

- Patrón para añadir la infraestructura de estilos a todos los components secundarios

### Comenzamos a trabajar en el header

- Importamos el logo
- Añadir ul AppBar una clase condicional transparent. Esta clase se activa si la variable show = true.
- La variable show es true cuando el scroll y es mayor que > 100 px
- Para escuchar cuando el usuario hace scroll vertical, añadimos un eventListener al objeto window.
- El eventlistener esta activo una sola vez cada vez que refrescamos la página(usseEfect con[])
- Una vez montado el componente hay que limpiarlo para que no nos quede colgado el eventListener

- Añadimos las rutas tanto a logo como avatar

### Comenzamos a trabajar en el Banner

- Hemos importado un pedazo de imagen como backgroundImage
- Hemos añadio un div vacio, que le da un gradiente que le da un difuminado a la imagen hasta funcionarla con resto del UI que es oscuro.

### Comenzamos a trabajar en el Login

- Hemos creado un boton con style component y le hemos llamado NetflixButton.
- Style component para varias los estilos del input o boton, pero para su posicionamiento le aplicamos una clase normal
- Hemos creado un input de base personalizado styled.input en styled components. Le hemos llamado netflixInput.
  , si hubiese sido un InutBase que es un componente de material ui, hubiese sido styled(InputBase).

### Comenzamos a trabajar en el Profile

- Hemos trabajo en la distribucion
- <Plans>texto</Plans>
- Const Plans=({children})=>{ return ()}, esto me va coger el texo como atributo.
- Pasar props a los tyled components

### Comenzamos a trabajar en el Sign up

- Redenrizado condicional, hemos creado una variable signIn.

- Si la variable es false, desplegamos el formulario.

### Proceso de Registro y SignIn

- Habilitado una cuenta en firebase
- Inicializado el objeto auth
- Capturado los datos tecleado por el usuario dentro del formulario
- Registrado email y password
- Sign con auth.signInWithEmail....

### Redux

- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos

### Persistencia

- Hemos añadido un especie de "event listener" en App.js
- Este evente listener lo tare el obj auth, escucha cada vez que cambia el usuario en firebase.
- Cada vez que cambia, vuelve a inyectar el usuario en la capa de datos de userSlice(Redux), de esta manera recordamos que ya estamos dentro aunque refresquemos la página.

### Request

- Vamos a costruir el componente row
- Hemos habilitado todos los edpoints para acceder a themovidb, y extrarer toda la informacion clasificada por genero.

### Request al Api

- Con useEffect, hacemos llamdas asyccronas, mediante una funcion a la que hemos llamado fetchData, esta funcion devuleve request.results.data, que es un array con todas las películas y las desplegamos en el UI.

### Creacion del componente paypal

- Al componente Paypal lo llamamos cuando clickamos uno de los botones de los planes de suscripcion a Netflix
