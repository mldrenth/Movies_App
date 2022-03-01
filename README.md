
### Movie Time 
***

### Description:
React Native App developed in 10 days with two students during CodeClan's Professional Software Development course. With this, users will get multiple lists of movies displayed they can add on to their watchlist or mark them as favourites and get recommendations based upon these choices. It uses Expo to build our app and "The Movie Database" to fetch movie data from. Our backend uses Java/Spring Boot.

### Why:
Learning React Native would give us a wider knowledge of frameworks, also it gives us an opportunity to start working on mobile applications.

### Screenshots:

<img src="https://user-images.githubusercontent.com/84736627/156210903-bc2ececa-cd4e-4cf4-8621-18f00ebb5cc9.png" width="25%" height="25%"><img src="https://user-images.githubusercontent.com/84736627/156211557-dd19aeb9-870e-407d-ab97-4124f56d19f5.png" width="25%" height="25%">
<img src="https://user-images.githubusercontent.com/84736627/156211579-a5b59bb8-25e4-4e12-a66e-82a2df81e8f0.png" width="25%" height="25%"><img src="https://user-images.githubusercontent.com/84736627/156211587-001612db-77c9-4f88-8466-b159ef60542d.png" width="25%" height="25%">




### How to install:
Please install the ExpoGo app on your own device.
1. Follow the steps on https://developers.themoviedb.org/3/getting-started/introduction to get your own API key
2. Fork the repository
3. `$ npm install --global expo-cli ` to install expo via the terminal
4. `npm install` in the terminal from inside '/client' for dependencies
5. Open /server in IntelliJ
6. Run ServerApplication in IntelliJ
7. Open /client in VSCode
8. In /services create a new file "local_ip.js" and write `export const ip = "{Your own IPv4 Address}";` (Needed so your phone knows to connect to your computer's localhost)
9. In /services create a new file "apikey.js" and write `export const apikey = "{Your own Api Key}";`
10. From /client in the terminal `expo start`
11. Choose your own app to scan the code or use the iOS simulator
12. Use fiona.g@gmail.com and 888 for the login details
