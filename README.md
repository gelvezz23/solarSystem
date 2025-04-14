## sistema solar

Este proyecto se realizo usando las siguientes tecnologias:

```bash
Node js v22.14.0

npm v11.2.0

Next js v15

Tailwind v5

Zustand v4
```

si deseas correr el proyecto con el comando

```bash
npm run dev
```

## Importante

te puedes guiar por el archiv `.env.example` para crear tus variables de entrono

```bash
NEXT_PUBLIC_SOLAR_SYSTEM_API_BASE_URL= # URL DE LA API
```

Yo para este caso he usado esta [API](https://api.le-systeme-solaire.net/)
Si necesitas mas informacion de la API por [swagger](https://api.le-systeme-solaire.net/swagger/)
[github](https://github.com/systeme-solaire) de la API

## Estructura de carpetas

<details>
  <summary>click para ver la estructura completa</summary>
  
```bash
├── src
│   ├── app
│   │   ├── Loading.tsx
│   │   ├── api
│   │   │   └── images
│   │   │       └── [imageName]
│   │   │           └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── planets
│   │       ├── [planetName]
│   │       │   ├── Loading.tsx
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── config
│   │   └── index.ts
│   ├── entities
│   │   ├── PlanetStore.ts
│   │   └── Planets.ts
│   ├── infrastructure
│   │   ├── nasaApi
│   │   │   ├── getPlanetData
│   │   │   │   └── getPlanetData.ts
│   │   │   └── getPlanetsData
│   │   │       ├── getPlanetsData.ts
│   │   │       └── index.ts
│   │   └── zustand
│   │       └── store
│   │           └── planetStore.ts
│   └── presentation
│       ├── components
│       │   ├── Card
│       │   │   ├── Card.tsx
│       │   │   └── index.ts
│       │   ├── Loading
│       │   │   ├── Loading.tsx
│       │   │   └── index.ts
│       │   ├── Navbar
│       │   │   ├── Navbar.module.css
│       │   │   ├── Navbar.tsx
│       │   │   └── index.ts
│       │   ├── Orbit
│       │   │   ├── Orbit.css
│       │   │   ├── Orbit.tsx
│       │   │   └── index.ts
│       │   ├── PlanetInformation
│       │   │   └── PlanetInfo.tsx
│       │   ├── Planets
│       │   │   ├── Earth
│       │   │   │   ├── Earth.module.css
│       │   │   │   ├── Earth.tsx
│       │   │   │   ├── Moon
│       │   │   │   │   ├── Moon.css
│       │   │   │   │   ├── Moon.tsx
│       │   │   │   │   └── index.ts
│       │   │   │   └── index.ts
│       │   │   ├── Jupiter
│       │   │   │   ├── Jupiter.module.css
│       │   │   │   ├── Jupiter.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Mars
│       │   │   │   ├── Mars.module.css
│       │   │   │   ├── Mars.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Mercury
│       │   │   │   ├── Mercury.tsx
│       │   │   │   ├── index.ts
│       │   │   │   └── mercury.module.css
│       │   │   ├── Neptune
│       │   │   │   ├── Neptune.module.css
│       │   │   │   ├── Neptune.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Pluto
│       │   │   │   ├── Pluto.module.css
│       │   │   │   ├── Pluto.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Saturn
│       │   │   │   ├── Saturn.module.css
│       │   │   │   ├── Saturn.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Uranus
│       │   │   │   ├── Uranus.module.css
│       │   │   │   ├── Uranus.tsx
│       │   │   │   └── index.ts
│       │   │   ├── Venus
│       │   │   │   ├── Venus.module.css
│       │   │   │   ├── Venus.tsx
│       │   │   │   └── index.ts
│       │   │   └── index.ts
│       │   └── Sun
│       │       ├── Sun.module.css
│       │       ├── Sun.tsx
│       │       └── index.ts
│       └── screens
│           ├── PlanetsDetails
│           │   ├── PlanetsDetails.tsx
│           │   └── index.ts
│           ├── SolarSystem
│           │   ├── SolarSystem.tsx
│           │   ├── index.ts
│           │   └── solarSystem.css
│           └── TablePlanets
│               ├── TablePlanets.tsx
│               ├── index.ts
│               └── tablePlanets.module.css
├── tailwind.config.js
└── tsconfig.json
```

</details>

---

- Puedes ver la estructura completa en el archivo `folder_structure.txt`

- **_public_** : uso para almacenar imagenes
- **_src_** : codigo y logica del proyecto
- **_app_** : manejo de rutas (este es obligatorio de Next JS v15)
- **_config_** : Centralizacion de variables de entorno
- **_entities_** : manejo de tipos como interfaces o types
- **_Infrastructure_** : comunicacion con APIs externas como API de la Nasa o zustand
- **_Presentation_** : Donde estan los componentes reutilizables, paginas y estilos

## Server Components

La page `PlanetDetails` es un server component por esta razon es asincrono y consume la informacion directa de el API

## Arquitectura

Implementacion de Clean Architecture para separar por capaz.

- Aplication
- Infrastructure
- Presentation
- Entities

# zustand

Cree un store en el cual se hacen las peticiones y se manejan los estados de error y carga globales

- **_fetchPlanets_**: se comunica con la API y trae los planetas para alimentar el estado global.
- **_fetchPlanetDetails_**: busca dentro del estado el planeta seleccionado.
- **_setSearchTerm_**: Alimenta el estado de el nombre del planeta que estamos buscando.
- **_searchPlanets_**: recibe un nombre para buscar en los planetas;
- **_sortPlanetsAlphabetically_**: ordena por orden alfabetico;
- **_setCurrentPage_**: recibe una pagina y modifica la pagina en la que estamos;
