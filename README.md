# Interactive Question Management Sheet

## Project Description

This is a web application designed to help users track their progress while learning Data Structures and Algorithms (DSA).

Think of it as an interactive checklist. It displays a list of coding topics (like Arrays or Linked Lists). Users can expand these topics to see specific questions, mark them as "Solved," and even rearrange the order of questions using drag-and-drop.

I built this project to demonstrate my skills in frontend development, specifically working with complex data and interactive features.

## Main Features

**1. Interactive Checklist**
You can view topics and sub-topics. Clicking on a topic expands it to show the list of questions inside.

**2. Progress Tracking**

* **Progress Bars:** Every topic has a progress bar. As you mark questions as "Solved," the bar fills up with an green color.
* **Visual Feedback:** When a question is solved, the text turns gray to show it is completed.

**3. Drag and Drop**
I implemented a full drag-and-drop system.

* You can drag **Topics** to reorder them in the list.
* You can drag **Sub-Topics** inside a topic.
* You can drag **Questions** to change their priority.

**4. Auto-Detect Logos**
The app is smart enough to look at the link for a question. If the link is from LeetCode, GeeksforGeeks, or Coding Ninjas, the app automatically fetches and displays that website's logo next to the question.

**5. Custom Design**
Instead of a standard white website, I created a custom "Dark Mode" theme using black and orange colors. This makes it look modern and comfortable for coding at night.

## Tech Stack (Tools I Used)

* **React (Vite):** I used React to build the user interface because it allows for fast, interactive components. Vite was used to set up the project because it is faster than standard tools.
* **Bootstrap 5:** I used Bootstrap for the main layout (rows, columns, and spacing) to ensure the site looks good on different screen sizes.
* **Zustand:** This is a tool for "State Management." I used it to handle the data. For example, when you check a box or move an item, Zustand makes sure the app remembers that change instantly without needing a slow database reload.
* **@hello-pangea/dnd:** This is a library specifically for Drag and Drop. It handles the complex math required to move items around the screen smoothly.

## How I Handled the Data (API & CRUD)

The project requirements asked for "CRUD" (Create, Read, Update, Delete) and "Sample Data." Here is how I solved that without a backend database:

1. **Read (Sample Data):** I used the `sheet.json` file provided in the assignment. When the app starts, it reads this file and automatically builds the list of topics.
2. **Create:** I added an "Add Topic" button that lets you create a new category dynamically.
3. **Update:** When you drag an item or click "Solved," the app updates the internal memory (State) to reflect the change immediately.
4. **Delete:** I added a trash icon next to every question. Clicking it removes the question from the list.

## How to Run This Project

If you want to run this code on your own computer, follow these steps:

**Step 1: Download the code**
Clone this repository or download the ZIP file.

```bash
git clone [Insert your repo link here]

```

**Step 2: Install the tools**
Open your terminal in the project folder and run this command. It downloads all the necessary libraries (like React and Bootstrap).

```bash
npm install

```

**Step 3: Start the website**
Run this command to turn on the server.

```bash
npm run dev

```

**Step 4: Open in Browser**
Look at your terminal. It will show a link (usually `http://localhost:5173`). Click that link to use the app.

---

