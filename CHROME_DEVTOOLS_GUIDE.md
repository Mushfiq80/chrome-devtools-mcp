# Chrome DevTools MCP - Quick Start Guide

## Step 1: Start the MCP Inspector

Run this command to launch the MCP Inspector with Chrome DevTools MCP server:

```bash
npx @modelcontextprotocol/inspector npx chrome-devtools-mcp@latest
```

This will:
- Install the inspector if needed
- Install chrome-devtools-mcp if needed
- Start a proxy server on localhost:6277
- Open the MCP Inspector UI in your browser at http://localhost:6274

---

## Step 2: Start Your Project

In a separate terminal, start your development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your app will run on http://localhost:3000 (or your configured port)

---

## Step 3: Use Chrome DevTools MCP via Claude Code

### Open Your App in Automated Chrome

**Prompt:** `Open my project at localhost:3000 in Chrome`

This will launch a Chrome instance controlled by MCP and navigate to your app.

---

### Inspect Your Page

**Prompt:** `Take a snapshot of the page`

This returns the accessibility tree with all interactive elements (buttons, inputs, links) with unique `uid` identifiers.

---

### Interact with Elements

**Click a button:**
```
Click the "Add" button
```

**Type in an input:**
```
Type "Buy groceries" into the task input
```

**Fill multiple form fields:**
```
Fill out the form:
- Email: test@example.com
- Password: secret123
- Name: John Doe
```

---

### Take Screenshots

**Full page screenshot:**
```
Take a screenshot of the full page
```

**Screenshot specific element:**
```
Take a screenshot of the task list
```

---

### Run Performance Audits

**Lighthouse audit (accessibility, SEO, best practices):**
```
Run a Lighthouse audit on my page
```

**Performance trace:**
```
Start a performance trace
```

---

### Monitor Network & Console

**List network requests:**
```
Show me all network requests
```

**View console messages:**
```
List all console messages
```

**Check for errors:**
```
Show me only error console messages
```

---

### Debug Memory Issues

**Take a heap snapshot:**
```
Take a memory heap snapshot
```

---

## Common MCP Tools Available

| Tool | Description |
|------|-------------|
| `new_page` | Open a new tab with URL |
| `navigate_page` | Navigate to URL, back, forward, reload |
| `take_snapshot` | Get page structure and interactive elements |
| `take_screenshot` | Capture page or element as image |
| `click` | Click an element by uid |
| `fill` | Type text into input/textarea |
| `fill_form` | Fill multiple form fields at once |
| `hover` | Hover over an element |
| `drag` | Drag element to another |
| `evaluate_script` | Run JavaScript in the page |
| `list_console_messages` | Get console logs/errors |
| `list_network_requests` | Get network activity |
| `lighthouse_audit` | Run accessibility/SEO/best-practices audit |
| `performance_start_trace` | Record performance metrics |
| `take_memory_snapshot` | Capture heap for memory leak debugging |

---

## Example Workflow

```
You: Open my app at localhost:3000
You: Take a snapshot
You: Click the "Sign Up" button
You: Fill out the form:
     - Name: Alice
     - Email: alice@example.com
     - Password: test123
You: Click the "Submit" button
You: Take a screenshot
You: Show me any console errors
```

---

## Tips

- The snapshot gives you `uid` values for precise element targeting
- You can describe elements naturally (e.g., "the blue button" or "email input")
- Network requests can be inspected to see API calls and response times
- Performance traces help identify Core Web Vitals issues (LCP, INP, CLS)
