# Guia rapida: perfiles de CV

El proyecto carga variantes desde archivos de perfil:

```text
src/data/profiles/
|-- ai-engineer.profile.js
|-- fullstack-ai.profile.js
`-- mobile-flutter.profile.js
```

Cada archivo `*.profile.js` exporta:

```javascript
{
  id,
  label,
  description,
  resume
}
```

`resume` contiene los datos completos del CV. La app detecta automaticamente los archivos `*.profile.js`, asi que para crear una nueva variante basta con anadir un nuevo archivo en `src/data/profiles/`.

## Como se cargan

La carga esta centralizada en:

```text
src/features/profiles/loadProfiles.js
src/features/profiles/useProfiles.js
src/features/profiles/ProfileSelector.jsx
```

El selector se construye desde los metadatos de cada perfil (`id`, `label` y `description`).

## Criterio de edicion

Cuando ajustes una version para una oferta concreta, prioriza:

- Claridad del rol objetivo.
- Frases que transmitan criterio tecnico.
- Proyectos que expliquen problema, decision tecnica y resultado funcional.
- Tecnologias reales y defendibles.
- Una pagina A4 como limite.

Evita convertir el CV en una lista de herramientas. Si una linea no ayuda a conseguir entrevista, probablemente sobra.
