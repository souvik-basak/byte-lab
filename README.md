# **Byte Lab**

**Byte Lab** is a collaborative code editor and snippet manager designed for developers to write, execute, and share code seamlessly. It features a powerful editor, code snippet management, real-time execution, and a user-friendly interface. Built with cutting-edge technologies, Byte Lab offers an all-in-one platform for developers to enhance productivity and collaboration.

---

## **Features**

- **Code Editor**:  
  - Syntax highlighting using Monaco Editor.
  - Language selection with dynamic runtime support.
  - Theme customization and font size adjustment.

- **Code Execution**:  
  - Execute code in multiple programming languages using the Piston API.
  - Real-time error feedback and output display.

- **Code Snippet Management**:  
  - Create, save, and share code snippets.
  - Comment on and discuss snippets with others.
  - Intuitive UI for managing snippet versions and permissions.

- **User Management**:  
  - Authentication powered by Clerk.
  - Profile page for managing user preferences.

- **Pricing & Plans**:  
  - Subscription-based plans for advanced features.
  - Dynamic pricing page with reusable components.

- **State Management**:  
  - Zustand for managing application state seamlessly.

- **Backend Integration**:  
  - Convex for handling database operations.
  - Efficient storage for snippets, comments, and user data.

---

## **Tech Stack**

- **Frontend**:  
  - Next.js (v15.1.4)  
  - React (v19.0.0)  
  - TailwindCSS (v3.4.1)  

- **State Management**: Zustand  

- **Code Execution**: Piston API  

- **Backend**: Convex  

- **Authentication**: Clerk  

- **UI Components**:  
  - Monaco Editor  
  - React Syntax Highlighter  
  - Framer Motion  

---

## **Installation**

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/souvik-basak/byte-lab.git
   cd byte-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `.env.local` file for environment variables:
   ```bash
   touch .env.local
   ```
   Add the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api-key>
   PISTON_API_URL=https://emkc.org/api/v2/piston/execute
   CONVEX_DEPLOYMENT_URL=<your-convex-url>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Folder Structure**

```plaintext
/src
├── app
│   ├── (root)               # Main editor and home page
│   │   ├── _components      # Core components like editor, theme selector, etc.
│   │   ├── _constants       # Constants for the root module
│   │   └── page.tsx         # Root module entry point
│   ├── pricing              # Pricing page
│   ├── profile              # User profile page
│   ├── snippets             # Code snippet management
│   │   └── [id]             # Dynamic snippet pages
│   ├── support              # Support page
│   └── terms                # Terms & conditions page
├── components               # Shared components (Footer, Navigation, etc.)
├── hooks                    # Custom hooks
├── store                    # Zustand state management
├── types                    # TypeScript types and interfaces
```

---

## **How It Works**

### **Code Execution**
- The editor uses the Piston API to execute code in various languages.
- The selected language and its version are dynamically configured via the `LANGUAGE_CONFIG` constant.

### **Snippet Sharing**
- Snippets are stored in a Convex database.
- Users can create, share, and comment on snippets, enabling collaboration.

### **Dynamic Theming**
- Users can toggle between light and dark themes using the `ThemeSelector` component.
- Font size and language preferences are persisted using `localStorage`.

---

## **Scripts**

- **Start Development Server**:  
  ```bash
  npm run dev
  ```

- **Build for Production**:  
  ```bash
  npm run build
  ```

- **Run Production Server**:  
  ```bash
  npm start
  ```

- **Lint the Code**:  
  ```bash
  npm run lint
  ```

---

## **Contributing**

Contributions are welcome!  
Feel free to submit issues and pull requests to improve Byte Lab.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For any inquiries or feedback, contact [souvik.basak2404@gmail.com].  
