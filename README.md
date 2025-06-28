# 🧪 Saucedemo Testing with Playwright + Cucumber

## 📌 Project Overview
This challenge was implemented using Playwright with JavaScript and Cucumber. Although the suggested stack included WebdriverIO, I chose Playwright due to my prior experience and its robust support for multi-browser execution and automation speed. To align with the assignment's structure, I integrated Cucumber — a combination I hadn’t worked with before, but saw as an opportunity to learn and grow.
During the process, I discovered that combining Playwright's native for multi-browser execution with Cucumber requires a custom setup. I planned to implement that configuration, but due to personal matters over the weekend, I wasn’t able to complete those steps in time. That said, I decided to submit a clean, working version ahead of time rather than rush last-minute changes. I’m enthusiastic about continuing to improve this repo and excited to discuss it during the interview.

I chose to automate four scenarios across two features to provide a small but meaningful variety that allowed me to incorporate Cucumber tags and split execution into positive, negative, and smoke tests.
The selected scenarios were based on :

If logging in with valid credentials fails or users are unable to add products to the cart, we are facing a critical-severity, high-priority, and blocking issue, as these flows are essential to the core functionality of any e-commerce experience.

If users are unable to remove products from the cart, this is also a functional issue and should be treated as high priority. While its severity may vary depending on the business context, it would generally be considered high as well. Ultimately, severity and priority levels should be defined in alignment with the team and product stakeholders.


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