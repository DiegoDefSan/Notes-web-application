# Notes application

## Overview

Fullstack web application designed for creating, categorizing, and filtering notes. Users can easily take notes, organize them into categories, and apply filters for efficient retrieval.

### Features

- Create, modify and delete notes.
- Archive and unarchive notes.
- List active and archived notes.
- Filter notes by category.

## System requirements

### Technologies

Ensure that the following runtimes, engines, and tools are installed to run the application:

- Java Development Kit (JDK) - Version 1.8
- Node.js - Version 18.17.1
- Node Package Manager (npm) - Version 10.1
- MySql - Version 8.0.34

### Frameworks and Libraries

- Java Spring Boot - Version 3.2.1
- React.ts - Version 18.2.0

### Dependencies

#### Java Spring Boot dependencies
- Spring boot starter data jpa
- spring boot starter web
- Mysql connector java
- Lombok
- Spring boot starter test
- ModelMapper
- Springdoc openapi starter webmvc ui

#### React dependencies
- Axios
- @tanstack/react-query
- React responsive masonry

## Configuration

### Spring Boot configuration

First of all, download a Spring Boot project with from the official web [spring.io](https://start.spring.io). To add the dependencies you could select from the page before installing or add them directly to `pom.xml` file.

```html
  <dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.modelmapper</groupId>
			<artifactId>modelmapper</artifactId>
			<version>3.1.0</version>
		</dependency>
		<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
			<version>2.2.0</version>
		</dependency>
	</dependencies>
```

### Database configuration

Ensure to configure the `application.properties` file for the database connection. Here is an example configuration for MySQL:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/note_app_db
spring.datasource.username=root
spring.datasource.password=MyDB_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create

springdoc.api-docs.enabled=true
springdoc.swagger-ui.enabled=true

springdoc.swagger-ui.path=/doc/swagger-ui.html
```

Be sure to modify the settings according to your specific requirements, such as the database name (`note_app_db`), username (`root`) and password (`MyDB_password`) for the connection to your MySQL database. If you are using a different type of database, adjust the settings accordingly.

### Installing packages in React

Firstly, go to the frontend project directory, `frontend/notes_app`. Then, install the npm dependency.

```
$ npm install
```

Then, install the additional packages, that are required to init the application.

#### Axios package
```
$ npm install axios
```

#### @tanstack/react-query
```
$ npm i @tanstack/react-query
```

#### react-responsive-masonry
```
$ npm install react-responsive-masonry
$ npm i --save-dev @types/react-responsive-masonry
```

And, if it is required, run the following command:
```
$ npm install --save prop-types
```

## Application review

### Home page
![Home page](https://media.discordapp.net/attachments/913149434987175946/1197399792372949052/image.png?ex=65bb2075&is=65a8ab75&hm=6d608e717f9423dc3fec3212207c6529bb73211cd7db26eb421aa8b527b9442a&=&format=webp&quality=lossless&width=675&height=670)

### Form to add note
![form to add note](https://media.discordapp.net/attachments/913149434987175946/1197400420033757184/image.png?ex=65bb210a&is=65a8ac0a&hm=0ae82ec1fc66c79d7f6ff19588ceb131255f47f4167fa9e0c31ddb659d1ab1f1&=&format=webp&quality=lossless&width=611&height=670)

### Filter notes by category
![filter notes by category](https://media.discordapp.net/attachments/913149434987175946/1197399924132810782/image.png?ex=65bb2094&is=65a8ab94&hm=a0ec1ae8e4156e6f5bfcad9fda867bd4b8498491f80f426c666c1d03ab75e2ac&=&format=webp&quality=lossless&width=660&height=670)

### View archived notes
![view archived notes](https://media.discordapp.net/attachments/913149434987175946/1197400348252454952/image.png?ex=65bb20f9&is=65a8abf9&hm=dfab45d57e5dbd63b844b84e7a3ac44fed4900fbb818e26cb64cd85ee19ba4dd&=&format=webp&quality=lossless&width=671&height=670)
