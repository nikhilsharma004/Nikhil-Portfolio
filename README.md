# ShopWave

ShopWave is a Java full-stack ecommerce project built with Spring Boot, Spring Security, Thymeleaf, Spring Data JPA, Hibernate, H2, and Maven.

## Features

- Product catalog with search
- Product category filtering
- Product detail and deals pages
- Session-based shopping cart
- Quantity updates and cart removal
- Database-backed user registration
- Spring Security login/logout
- BCrypt password hashing
- Protected checkout and orders pages
- Checkout form with validation
- Order persistence in H2
- Amazon-style responsive storefront UI

## Security

- Registered users are stored in the `app_users` table.
- Passwords are hashed using BCrypt before saving.
- Login is handled by Spring Security using a custom `UserDetailsService`.
- Checkout and order pages require authentication.
- CSRF protection is enabled for form submissions.

## Run

```powershell
mvn spring-boot:run
```

Then open:

```text
http://localhost:8080
```

The H2 database console is available at:

```text
http://localhost:8080/h2-console
```

Use JDBC URL `jdbc:h2:mem:shopwavedb`, username `sa`, and an empty password.

## Test

```powershell
mvn test
```

The test suite verifies the catalog, CSS, login/register pages, protected checkout, product detail page, deals page, delivery page, cart flow, checkout flow, and orders page.

## Resume Summary

```text
Developed a full-stack ecommerce web application using Java, Spring Boot, Spring MVC, Spring Security, Thymeleaf, Spring Data JPA, Hibernate, H2, and Maven with database-backed user registration, BCrypt password hashing, authentication, product catalog, cart management, checkout, and order tracking features.
```

## CSS Path

The stylesheet is stored at:

```text
src/main/resources/static/css/styles.css
```

Spring Boot serves that file at:

```text
http://localhost:8080/css/styles.css
```
