# 🧠 Day 3 - User Info Card (DOM Practice)

This project is part of my 30-Day MERN Learning Plan.  
It helps me practice **DOM manipulation**, **form handling**, and **dynamic element creation** using plain JavaScript.

---

## 🎯 Features
- Collects user input (Name, Email, Age) from a form  
- Creates a dynamic **user info card** on form submit  
- Each card has a **Delete** button to remove it individually  
- Clears form fields automatically after submission  
- Fully interactive — no page reload required

---

## 💻 Technologies Used
- **HTML5**
- **CSS3** (inline styles in JS)
- **JavaScript (ES6+)**

---

## ⚙️ How It Works
1. The user fills out the form  
2. JavaScript grabs the input values using `.value`  
3. A new `<div>` is created dynamically with `document.createElement()`  
4. The card is styled and appended to the main container  
5. Clicking “Delete” removes that card from the DOM  

---

## 🧠 Concepts Practiced
- DOM selection (`querySelector`)
- Creating elements dynamically (`createElement`)
- Event handling (`addEventListener`)
- Preventing default form behavior (`preventDefault`)
- Manipulating styles and innerHTML

---

## 🖼️ Preview
*(Add a screenshot of your project here later)*  
Example:
```html
<img src="screenshot.png" alt="User Info Card Preview" width="600"/>
