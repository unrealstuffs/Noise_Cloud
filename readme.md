# Noisecloud - клон Soundcloud

### Завершенное приложение 
    http://ec2-100-26-151-155.compute-1.amazonaws.com:4000/

### Запуск приложения
##### Режим разработки
- sudo service mongodb start
- npm run dev:server
- npm run dev:assets

##### Режим продакшн
- sudo service mongodb start
- npm start

### Пример файла .env
    PORT=4000
	MONGO_URL="mongodb://localhost:27017/[whatever]"
	MONGO_URL_PROD="mongodb+srv://[user_name]:[password]@cluster0.oqlei.mongodb.net/[whatever]?retryWrites=true&w=majority"
	COOKIE_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
	AWS_KEY="XXXXXXXXXXXXXXXXXXXX"
	AWS_PRIVATE_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

### О приложении
Данное приложение частично реализует функционал оригинального сервиса SoundCloud. Сделано при помощи Node JS, Express JS и нативного JavaScript. Доступные возможности представлены в списке ниже:
- Загрузка аудио файлов
- Аутентификация
- Комментирование
- Поиск треков
- Редактирование треков и профилей