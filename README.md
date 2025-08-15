# JSL Portfolio Piece: Kanban App Deployment & Features Implementation

## Overview

This project involves **deploying a Kanban app to Netlify**, ensuring the app's functionality and persistence through local storage, and implementing dynamic features such as task editing, deletion, sidebar interaction, and a theme toggle. The goal is to deliver a fully functional, deployable application that is responsive across devices and maintains data consistency. Students will also focus on **clean, modular code** that is well-documented for future development.


A **Dynamic Kanban board** designed to showcase a **Kanban board** using **HTML**, **CSS**, **Javascript** and **Figma**.  
The website is fully **responsive** on **desktop devices**, using appropriate **media queries** for a smooth user experience. as well as Javascript to make it interactive for the user to dynamically add tasks as well as save them to a local storage

---

## 🛠️ Installation Instructions

### Step 1️⃣: Install Visual Studio Code

#### 🪟 Windows

1. Visit the official VS Code website:  
   [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click **“Download for Windows”** (usually auto recognises your OS).
3. Run the installer (`.exe` file) after downloading.
4. During installation, consider checking these options:
   - ✅ Add to PATH  
   - ✅ Create a desktop icon  
   - ✅ Open with Code
5. Click **Next** through the steps, then click **Install**.
6. Once installed, launch VS Code from the **Start Menu** or **desktop**.

#### 🍎 macOS

1. Visit:  
   [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click **“Download for macOS”**.
3. Open the downloaded `.zip` file.
4. Drag `Visual Studio Code.app` into your **Applications** folder.

---

### Step 2️⃣: Install Extensions

#### ✅ How to Install Extensions

1. Open **VS Code**.
2. Click the **Extensions** icon on the left sidebar  
   (or press `Ctrl+Shift+X` / `Cmd+Shift+X` on Mac).
3. Type the extension name into the search bar.
4. Click **Install** on the correct extension.

#### 🔌 Recommended Extension

- **Live Server**  
  - 🔍 *Search for:* `Live Server`  
  - Ensure that once you press install that is it *enabled*  
  - 🔥 *Feature:* Lets you right-click your `index.html` and click **"Open with Live Server"** — auto-reloads on save!

---
## 🚀 Usage

### 🔧 How to Run the Project

1. Open the project folder in VS Code:
   - Launch VS Code.
   - Go to **File > Open Folder...** and select your project directory.
2. Locate `index.html`, **right-click**, and select **"Open with Live Server"**.
3. There you will see pre-rendered tasks on the board as well as an add task button which can be clicked in order to add new tasks to the board

---

### Data Persistence

- **Store fetched tasks in local storage** to ensure data persists across page reloads.
- On startup, **load tasks from local storage** and display them in their respective columns (To Do, Doing, Done) to maintain an organized task board.

### Task Editing & Deletion

- Allows users to **edit task details** (title, description, status) in a modal. Upon saving, the task should reflect the updated data on the board and in local storage.
- Implemented a **delete button** within the modal to allow users to remove tasks. A confirmation message should appear before deleting a task, and if confirmed, the task will be removed from both the task board and local storage.

### Sidebar Interaction

- Implement a **sidebar** that contains all required elements as shown in the Figma design.
- Allow the sidebar to be **toggleable**, so users can hide or show it based on their preferences.
- Provide a mobile version of the sidebar that can be **accessed from the app logo**, and ensure it matches the design and functionality of the desktop sidebar.

### Mobile Sidebar (Menu) Functionality

- On mobile, the sidebar should function as a **menu** accessible from the top of the screen.
- Include the **theme toggle** switch in the mobile menu and ensure all features match the desktop sidebar, as shown in the Figma design.
- Ensure that the mobile menu is **closable**, allowing users to dismiss it for an unobstructed view of the tasks.


## 🎥 Video Presentation

Watch a short walkthrough of this project, where I explain the structure, features, and technologies used.

🔗 [Click here to view the presentation](https://www.veed.io/view/30dd0efa-711e-4ec2-a665-be4263ca83da?panel=share)
<!-- Replace the # with your video link, e.g. https://youtu.be/your-video-id -->

---
