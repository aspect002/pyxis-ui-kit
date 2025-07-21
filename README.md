# Pyxis UI Kit

Библиотека React-компонентов с поддержкой кастомизации AntD через SCSS-модули.

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск сторибука
npm run storybook

# Локальная разработка
npm run dev

# Сборка библиотеки
npm run build
```

## Использование в другом проекте

Добавьте зависимость через GitHub:

```
"dependencies": {
  "pyxis-ui-kit": "git+https://github.com/aspect002/pyxis-ui-kit.git"
}
```

## Кастомизация переменных AntD

Компоненты обёрнуты в контейнер, где можно переопределять CSS-переменные для AntD.

## Storybook

Весь Storybook покрыт AntD ConfigProvider для поддержки переменных.
