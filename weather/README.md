# Приложение - виджет для определения погоды. (Тестовое задание)
Запуск стандартной командой 

### `npm run start`

В папке build собраная версия, также можно использовать 
### `npm run build`

Чтобы добавить приложение как виджет на страницу: 
  подключаем файл стилей и файл js
  создаем виджет загрузке DOM

```sh
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="bundle.css">
</head>
<body>
  <div id="my-widget-id"></div>
  <script src="bundle.js"></script>
  <script>
    window.addEventListener("DOMContentLoaded", function(e) {
      new WeatherWidget("open");
    });
  </script>
</body>
</html>
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
