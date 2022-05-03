![](https://img.shields.io/badge/Ruby_on_Rails-red)

# Art work gallery RoR API

This app is the back-end api service for the art work gallery app. This is an exercise based on the Ruby on Rails course for the [Enroute Systems](https://www.enroute.com/) company.

## Tests with minitest

This website was tested with [minitest](https://rubygems.org/gems/minitest)

## 🔧 Built With these features
- Ruby 3.1.2
- Rails 7.0.2.3
- Bundler version 2.3.7
- PostgreSQL 13.5

## 🛠 Getting Started

## Before to start

Make sure to have installed docker and docker-compose on your system. To make sure you have docker and docker-compose, run the following command:

- `docker -v` and `docker-compose -v` will help you to know if you have installed docker and docker-compose respectively. If you see the version on your terminal, you have installed them correctly.

> Check with project administrator if you don't have the appropiated permissions to clone the repository.

## Install and run the application
To run the web application follow these simple example steps.

- Open a terminal
- Copy this code : `git clone https://github.com/vichuge/messageme_chat.git`
- Go to the created folder and run the following command:
`docker-compose up`
- To make sure, you could use `docker ps` to see the list for containers created and the status. One of them should be called as `messageme_chat_web_1` or similar, make sure to use the correct name for container on next step
- Now let's enter on the bash inside this container using `docker exec -ti messageme_chat_web_1 bash`. Inside, The terminal prompt should be changed
- To finish, let's create the databse using `rails db:create`
- As a second option, you can use `docker-compose run web rails db:create` to create the database.

## Open app in browser

- When the docker container is up and database created, open your favorite browser.
- put: localhost:3000/
- Enjoy the app.

## ✒️ Authors

👤 **Victor Pacheco**

- GitHub: [@vichuge](https://github.com/vichuge)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/victor-pacheco-7946aab2/)
- Twitter: [@Pachecofloresv](https://twitter.com/Pachecofloresv)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/vichuge/messageme_chat/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
