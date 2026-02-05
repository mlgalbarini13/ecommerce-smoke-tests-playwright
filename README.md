# Ecommerce Smoke Tests — Playwright

End-to-end (E2E) smoke test suite for an ecommerce web application using **Playwright + TypeScript**.

This project demonstrates automated testing of critical user flows such as authentication, product sorting, cart management, and checkout process using modern QA automation practices.

The tests are implemented against the public demo site:

👉 https://www.saucedemo.com/

---

## 📌 Project Goal

The goal of this project is to showcase a clean and maintainable automation structure focused on:

- Smoke testing critical ecommerce flows
- Reliable UI automation using Playwright
- Clear test scenarios and validations
- Readable and maintainable test code
- Portfolio demonstration of QA automation skills

---

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Playwright HTML Reporter

---

## ✅ Test Coverage

This smoke suite validates the main ecommerce flows:

### Authentication
- ✅ Successful login
- ✅ Login with invalid credentials
- ✅ Required field validation
- ✅ Locked user validation

### Inventory
- ✅ Sort products by price (Low → High)

### Cart
- ✅ Add product to cart
- ✅ Remove product from cart
- ✅ Continue shopping from cart

### Checkout
- ✅ Successful checkout flow
- ✅ Checkout validation for required fields

---

## 📂 Project Structure

```bash
tests/
│
├── login.spec.ts
├── sort-products.spec.ts
├── cart.spec.ts
└── checkout.spec.ts

playwright.config.ts
package.json
```


Each spec file groups related smoke scenarios for better readability and maintenance.

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ecommerce-smoke-tests-playwright.git
cd ecommerce-smoke-tests-playwright
```

Install dependencies:
```bash
npm install
```

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:
```bash
npm test
```

Run tests in UI mode:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

---

## 📊 Test Report

After execution, open the HTML report:
```bash
npx playwright show-report
```

The report includes:

- Test results
- Execution steps
- Screenshots on failure
- Traces for debugging

---

## 🧪 Testing Approach

This project follows a smoke testing strategy, focusing on validating the most critical business flows:
- User authentication
- Product interaction
- Purchase completion
Selectors were implemented using Playwright best practices (getByRole, getByText, and data attributes) to improve stability and readability.

---

## 👩‍💻 Author

Maria Galbarini
QA Automation Engineer / Full Stack Developer

