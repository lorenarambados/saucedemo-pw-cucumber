# 🧪 Saucedemo Testing with Playwright + Cucumber

This project demonstrates automated testing of the [Saucedemo](https://www.saucedemo.com/) website using **Playwright**, **Cucumber**, and **JavaScript**.

It includes automated scenarios such as:

1. ✅ Successful login with valid credentials  
2. ❌ Login failed with invalid credentials 
3. 🛒 Adding a product to the cart and verifying its presence  
4. ❌ Removing a product from the cart and confirming removal 
---

## 📦 Tech Stack

- **JavaScript**
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- **Node.js v20.12.0**

---

## ⚙️ Installation & Usage

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd saucedemo-pw-cucumber
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install Playwright browsers:**

```bash
npx playwright install
```

4. **Run the scenarios:**

```bash
npm run test:report
npm run test:negative
npm run test:positive
npm run test:smoke

```

> The HTML report will open automatically in your browser:  
> `reports/html/index.html`

---

## ✨ Covered Scenarios

### ✅  Login with valid credentials

- Navigates to the login page  
- Enters valid credentials  
- Verifies redirection to `/inventory.html`

### ✅  Login with invalid credentials

- Navigates to the login page  
- Enters invalid credentials  
- Verifies that the system show and error message

### 🛒 Add Product to Cart

- Logs into the app  
- Clicks "Add to Cart" on the first item  
- Navigates to the cart  
- Confirms that the product appears

### ❌ Remove Product from Cart

- Accesses the cart  
- Removes the previously added item  
- Verifies that the cart badge is no longer visible

---

## 👀 HTML Report

- A detailed HTML report is generated using `multiple-cucumber-html-reporter`
- Includes scenario status, step execution, system metadata, and timestamp

---

## 👤 Author

Developed by **Lorena Rambados** as part of a QA Automation Challenge.  
Feel free to reach out with questions or feedback!