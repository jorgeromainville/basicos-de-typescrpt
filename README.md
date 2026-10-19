# 🚀 Fundamentos de TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

Repositorio de práctica con conceptos básicos y ejercicios prácticos de **TypeScript**, desarrollado durante el programa formativo de **Funval** (Semana 2 - Día 1).

---

## 📌 Contenido del Repositorio

El archivo principal [`main.ts`](./main.ts) abarca desde los tipos de datos primitivos hasta un reto integrador de lógica de combate por turnos:

### 1. Tipos de Datos y Declaraciones
- **Primitivos de JavaScript/TypeScript**: `number`, `string`, `boolean`, `null`, `undefined`, `BigInt`, `symbol`.
- **Tipos especiales de TypeScript**: `any`, `unknown`, `void`.
- **Variables y Constantes**: Uso de `let` y `const` (buenas prácticas evitando `var`).

### 2. Operadores
- **Aritméticos**: Suma (`+`), resta (`-`), multiplicación (`*`), división (`/`), módulo (`%`) y exponenciación (`**`).
- **Comparación**: `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`.
- **Autoasignación**: `++`, `--`, `+=`, `-=`, `*=`, `/=`, `%=`.
- **Lógicos**: AND (`&&`), OR (`||`), NOT (`!`).

---

## 📝 Taller Práctico (Ejercicios Desarrollados)

| # | Ejercicio | Nivel | Concepto Clave |
|---|---|---|---|
| **01** | Tarjeta de Perfil | Básico | Tipado explícito (`string`, `number`, `boolean`) |
| **02** | Calculadora de Propinas | Básico | Operaciones aritméticas y cálculo porcentual |
| **03** | Contador de Visitas | Básico | Incremento (`++`) y decremento (`--`) |
| **04** | Inventario Compuesto | Básico/Intermedio | Operadores de autoasignación (`+=`, `-=`, `*=`) |
| **05** | Detector de Números Pares | Básico/Intermedio | Operador residuo (`%`) y comparación estricta (`===`) |
| **06** | Mayoría de Edad y Permiso | Intermedio | Operador lógico OR (`\|\|`) y relacionales (`>=`) |
| **07** | Acceso a Cajero Automático | Intermedio | Operador lógico AND (`&&`) y negación (`!`) |
| **08** | Rango de Temperatura | Intermedio | Condiciones de rango con operadores relacionales |
| **09** | Carrito con Envío Gratis | Intermedio | Evaluación de condiciones compuestas (`\|\|`) |
| **10** | Validación de Registro | Intermedio | Validación multicriterio con AND (`&&`) y NOT (`!`) |

---

## ⚔️ Reto Integrador: Batalla por Turnos

Simulación del estado de combate de un personaje donde se aplican de manera integrada:
- Control dinámico de vida (`puntosDeVida`)
- Modificación de estado por daño (`-=`) y pociones (`++`)
- Escudo protector y condiciones compuestas para determinar supervivencia y estado crítico (`alertaPeligro`).

---

## 💻 ¿Cómo ejecutar este proyecto?

### Requisitos previos
- Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### Opción 1: Ejecutar directamente con `ts-node` o `tsx` (Recomendado)
```bash
# Con npx (sin necesidad de instalar globalmente)
npx tsx main.ts

# O utilizando ts-node
npx ts-node main.ts
```

### Opción 2: Compilar a JavaScript y ejecutar con Node
```bash
# 1. Compilar TypeScript a JavaScript
npx tsc main.ts

# 2. Ejecutar el archivo compilado
node main.js
```

---

## 👤 Autor

- **Jorge Romainville** - [GitHub](https://github.com/jorgeromainville)
