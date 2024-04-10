# Rimac - Indra - challenge

En este repositorio se utiliza el stack de React + TypeScript + Vite para desarrollar el reto frontend de la empresa Indra - Rimac.
Herramientas que se utilizaron:
- Sass con la metodología BEM.
- classnames para le manejo de estilos.
- Redux-toolkit y redux-persist para el manejo de estado y la persistencia.
- axios para obtener los datos de la API.
- react-router-dom para la navegación

Puedes acceder al link desplegado en: https://challenge-indra-rimac.vercel.app

## Explicación de la App

1. En la primera vista, la aplicación le pedirá datos como su número de documento y celular, tambien debe de aceptar las políticas de Privacidad y Comunicaciones comerciales.
2. En la segunda vista debe seleccionar el tipo de plan entre: `Para mí` o `Para alguien más`
   2. 1. Al seleccionar una opción se recuperará información de los planes, filtrando por la edad del usuario.
   2. 2. Seleccione su plan de su preferencia.
3. Se mostrará la pantalla final del resumen del seguro.


## Estructura de las Carpetas

├── src                     # React - app
    ├── components
        ├── Button             # Component
        ├── Checkbox           # Component
        ├── Footer             # Component
        ├── HeaderPage         # Component
        ├── Input              # Component
        ├── PersonCard         # Component
        ├── PlanCard           # Component
        ├── Select             # Component
        ├── Steps              # Component
        ├── SummaryCard        # Component
    ├── View
        ├── OfferPlans            # Page show Plans to will select
        ├── Register              # Page to register user information
        ├── Summary               # Page show summary plan selected
    ├── hooks
        ├── useApi                # Service to get data
    ├── models
        ├── formUserModel            # model
        ├── planModel                # model
        ├── selectorModel            # model
        ├── userModel                # model
    ├── router
        ├── AppRouter               # navigate
    ├── scss
        ├── abstracts               # to variables
        ├── base                    # base and  reset
    ├── store
        ├── slices                  # to plan and  user
    ├── utils
        ├── api                     # API constants
        ├── getAge                  # get age from birthday
        ├── initialValues           
        ├── reducers                
└── README.md                   # README

cada componente esta compuesto por : 

├── component
        ├── index             # export
        ├── Component         # Component
        ├── component.scss    # scss styles
        ├── types             # Interfaces

## Run

En caso de querer clonar el repositorio y probar localmente, haz lo siguiente:

1. Clone el repositorio.
2. Ejecutar:

```bash
npm install
```

1. Ejecutar

```bash
npm run dev
```

## Contacto
* Linkedin: [carlos yaco](https://www.linkedin.com/in/carlos-yaco-tincusi/)
* website: [web](https://carlosyaco.com)

##  Licencia
Este proyecto esta bajo la licencia [MIT](/LICENCE).