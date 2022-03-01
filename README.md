
### Movie Time 
***

### Description:
React Native App developed in 10 days with two students during CodeClan's Professional Software Development course. It uses Expo to build our app and "The Movie Database" to fetch movie data from. Our backend uses Java/Spring Boot

### Why:
Learning React Native would give us a wider knowledge of frameworks, also it gives us an opportunity to start working on mobile applications.

### Screenshots:
![App Screenshot](/client/assets/screen1.png?raw=true) ![App Screenshot](/client/assets/screen2.png?raw=true) ![App Screenshot](/client/assets/screen3.png?raw=true) ![App Screenshot](/client/assets/screen4.png?raw=true)



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
