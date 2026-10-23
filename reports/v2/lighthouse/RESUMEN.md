# Lighthouse v2 — resumen

Servidor: `astro preview` (build de producción compilado con `SITE_URL=http://localhost:4321`, es decir, en modo indexable, como quedará con el dominio definitivo).
Lighthouse 13.5.0, 2026-10-23.

| Página | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|---|
| / | mobile | 98 | 100 | 100 | 100 |
| / | desktop | 100 | 100 | 100 | 100 |
| /en/ | mobile | 98 | 100 | 100 | 100 |
| /en/ | desktop | 100 | 100 | 100 | 100 |
| /de/ | mobile | 98 | 100 | 100 | 100 |
| /de/ | desktop | 100 | 100 | 100 | 100 |
| /rutas/colegiata-sepulcro-ducal/ | mobile | 98 | 100 | 100 | 100 |
| /rutas/colegiata-sepulcro-ducal/ | desktop | 100 | 100 | 100 | 100 |
| /rutas/juego-de-tronos-escenarios-rodaje/ | mobile | 99 | 100 | 100 | 100 |
| /rutas/juego-de-tronos-escenarios-rodaje/ | desktop | 100 | 100 | 100 | 100 |
| /en/tours/collegiate-church-ducal-tomb/ | mobile | 98 | 100 | 100 | 100 |
| /en/tours/collegiate-church-ducal-tomb/ | desktop | 100 | 100 | 100 | 100 |
| /en/tours/game-of-thrones-filming-locations/ | mobile | 99 | 100 | 100 | 100 |
| /en/tours/game-of-thrones-filming-locations/ | desktop | 100 | 100 | 100 | 100 |
| /de/fuehrungen/stiftskirche-herzogsgruft/ | mobile | 98 | 100 | 100 | 100 |
| /de/fuehrungen/stiftskirche-herzogsgruft/ | desktop | 100 | 100 | 100 | 100 |
| /de/fuehrungen/game-of-thrones-drehorte/ | mobile | 99 | 100 | 100 | 100 |
| /de/fuehrungen/game-of-thrones-drehorte/ | desktop | 100 | 100 | 100 | 100 |

## Comprobación adicional: resto de páginas nuevas (móvil)

| Página | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|---|
| `/rutas/antigua-universidad/` | mobile | 99 | 100 | 100 | 100 |
| `/rutas/monasterio-encarnacion/` | mobile | 99 | 100 | 100 | 100 |
| `/rutas/calle-san-pedro-palacios-barrocos/` | mobile | 99 | 100 | 100 | 100 |
| `/rutas/canteras-necropolis-zona-arqueologica/` | mobile | 99 | 100 | 100 | 100 |
| `/rutas/osuna-nocturna/` | mobile | 99 | 100 | 100 | 100 |
| `/visitas-a-medida/` | mobile | 99 | 100 | 100 | 100 |
| `/preguntas-frecuentes/` | mobile | 100 | 100 | 100 | 100 |
| `/de/gruppenfuehrungen/` | mobile | 99 | 100 | 100 | 100 |
| `/de/datenschutz/` | mobile | 100 | 100 | 100 | 100 |

Informes en `extra/`.

## Nota sobre la URL de demostración

Con el build por defecto (`*.workers.dev`), todas las páginas llevan `noindex` a propósito hasta que haya dominio. Medido el inicio en ese modo: SEO 69, únicamente por la auditoría «La página no se puede indexar» (is-crawlable). Al poner el dominio en `SITE_URL`, el `noindex` desaparece y la nota es la de la tabla de arriba.
