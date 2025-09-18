# React Technical Interview Prep 🚀

A comprehensive collection of React components and practice prompts designed to help you prepare for technical interviews. Each component focuses on specific React concepts and common interview scenarios.

## 🎯 Purpose

This repository contains:
- **Working examples** of common React interview components
- **Practice prompts** with requirements and concepts to implement
- **Interview-style code reviews** and explanations
- **Progressive difficulty levels** from beginner to advanced

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd react-techincal-prep
npm install
```

### 2. Start Development Server
```bash
npm start
```
Your app will open at `http://localhost:3000`

### 3. Practice Components
Navigate through the components in your browser:
- **Basic Components**: Counter, TodoList, ColorPicker
- **Intermediate**: FormValidation, FetchUser, LiveInput
- **Advanced**: Check the `advanced/` folder for practice challenges

## 🌐 Live Demo

**View the live app**: [https://mitchelldawkinsjr.github.io/react-interview-prep-lab](https://mitchelldawkinsjr.github.io/react-interview-prep-lab)

## 📦 Deploy to GitHub Pages

### Deploy Commands
```bash
# Build and deploy to GitHub Pages
npm run deploy

# Or manually:
npm run build
npx gh-pages -d build
```

### First Time Setup
1. Make sure your repo is pushed to GitHub
2. Run `npm run deploy`
3. Go to your repo Settings → Pages
4. Select "gh-pages" branch as source
5. Your site will be available at `https://yourusername.github.io/react-interview-prep-lab`

## 📚 Component Categories

### ✅ Working Examples
- **ColorPicker** – useState, props, conditional rendering
- **LiveInput** – controlled input, character count
- **TodoList** – array state, immutability, event handling
- **FetchUser** – useEffect, async API call, error handling
- **AnimalFacts** – object manipulation, random selection
- **FormValidation** – form handling, validation, controlled inputs

### 🎯 Practice Prompts
Located in `src/components/advanced/`:
- **Counter** – useState, event handlers, conditional styling
- **Search & Filter** – debouncing, array filtering, real-time search
- **Modal** – portals, backdrop, focus management
- **Timer/Stopwatch** – useEffect, setInterval, cleanup
- **Theme Context** – createContext, useContext, providers
- **Custom Hook** – useApi hook, async state management
- **React.memo** – performance optimization, memoization
- **Infinite Scroll** – intersection observer, pagination
- **Drag & Drop** – HTML5 drag API, reordering

## 🎓 How to Practice

### Method 1: Code Review Style
1. Pick a component from `prompts/`
2. Read the requirements and concepts
3. Implement your solution
4. Compare with working examples
5. Get feedback on your approach

### Method 2: Interview Simulation
1. Set a timer (15-30 minutes)
2. Pick a random prompt
3. Implement without looking at examples
4. Explain your code out loud
5. Discuss trade-offs and improvements

## 🧠 Key React Concepts Covered

- **State Management**: useState, useEffect, custom hooks
- **Event Handling**: onClick, onChange, form submission
- **Performance**: React.memo, useMemo, useCallback
- **Advanced Patterns**: Context, Portals, Error Boundaries
- **User Interactions**: Forms, Modals, Drag & Drop
- **Data Fetching**: API calls, loading states, error handling
- **Real-time Features**: Timers, search, infinite scroll

## 📖 Interview Tips

### Before You Start Coding
- Ask clarifying questions
- Explain your approach
- Consider edge cases
- Think about performance

### While Coding
- Use descriptive variable names
- Add comments for complex logic
- Handle error states
- Consider accessibility

### After Implementation
- Test your solution
- Discuss potential improvements
- Explain trade-offs
- Consider scalability

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **Create React App** - Zero-config setup
- **Axios** - HTTP client for API calls
- **Modern JavaScript** - ES6+ features

## 📝 Contributing

Feel free to:
- Add new practice components
- Improve existing examples
- Add more interview scenarios
- Share your solutions

## 🎯 Interview Success Tips

1. **Practice regularly** - Consistency beats intensity
2. **Explain your thinking** - Interviewers want to see your process
3. **Handle edge cases** - Show you think about real-world scenarios
4. **Write clean code** - Readable code is maintainable code
5. **Ask questions** - Clarify requirements before coding

---

**Happy coding and good luck with your interviews! 🍀**