# api-flex

api-flex is a lightweight and powerful library designed to simplify API integration by enhancing the native `fetch` and `axios` with additional features like automatic retries, token management, error handling, and response caching.

## Features

- **Built-in Retries**: Automatically retries failed requests.
- **Token Management**: Handles token management for API calls seamlessly.
- **Centralized Error Handling**: Provides a structured way to manage errors across your application.
- **Response Caching**: Caches responses to improve performance and reduce redundant requests.
- **Easy to Use**: Simple and intuitive API that integrates easily into your existing codebase.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Examples](#api-examples)
- [Comparison](#comparison)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install api-flex via npm, run:

```bash
npm install api-flex
```

## Usage

### Simple GET Request

Here's how to make a simple GET request using api-flex:

```javascript
import apiFlex from "api-flex";

try {
  const data = await apiFlex.get("/user?ID=12345");
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Advanced Usage: POST Request

You can also make POST requests easily:

```javascript
import apiFlex from "api-flex";

const userData = { name: "John Doe", email: "john@example.com" };

try {
  const response = await apiFlex.post("/users", userData);
  console.log(response);
} catch (error) {
  console.error(error);
}
```

## API Examples

- **GET Request**: Fetch product details.
- **POST Request**: Create a new product.
- **PUT Request**: Update an existing product.
- **DELETE Request**: Remove a product from the database.

### GET Request Example

```javascript
import apiFlex from "api-flex";

try {
  const product = await apiFlex.get("https://fakestoreapi.com/products/1");
  console.log(product);
} catch (error) {
  console.error("Failed to fetch product:", error.message);
}
```

### POST Request Example

```javascript
import apiFlex from "api-flex";

try {
  const newProduct = await apiFlex.post("https://fakestoreapi.com/products", {
    title: "New Product",
    price: 29.99,
    category: "electronics",
  });
  console.log(newProduct);
} catch (error) {
  console.error("Failed to create product:", error.message);
}
```

## Comparison

| Feature          | fetch       | axios       | api-flex                 |
| ---------------- | ----------- | ----------- | ------------------------ |
| Built-in retries | ❌          | ❌          | ✅                       |
| Token management | ❌ (manual) | ❌ (manual) | ✅ (automatic handling)  |
| Error handling   | ❌ (manual) | ✅          | ✅ (centralized logging) |
| Caching          | ❌          | ❌          | ✅ (in-memory caching)   |

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
