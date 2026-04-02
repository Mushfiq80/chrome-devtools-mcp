# Chrome DevTools MCP Server

## What is it?

The **Chrome DevTools MCP Server** is a Model Context Protocol (MCP) server that allows Claude (or other AI assistants) to interact with Chrome DevTools programmatically. It can inspect, debug, and analyze web pages in real-time.

## Your Current Setup

Your [`.mcp.json`](.mcp.json) file is already configured:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"]
    }
  }
}
```

## How to Use

### Option 1: With Claude Desktop App

1. **Copy the MCP config** to your Claude Desktop settings:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - Mac: `~/Library/Application Support/Claude/claude_desktop_config.json`

2. **Add this to your config** (merge with existing):

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"]
    }
  }
}
```

3. **Restart Claude Desktop**

4. **Start Chrome with remote debugging**:
   ```bash
   # Windows
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

   # Or close all Chrome windows first, then run the above
   ```

5. **Ask Claude to inspect a page**:
   - "Open github.com and analyze the page structure"
   - "What's the performance score of example.com?"
   - "Take a screenshot of the current tab"

### Option 2: With MCP Inspector (Testing)

```bash
npx @modelcontextprotocol/inspector npx chrome-devtools-mcp@latest
```

This opens a web UI to test the MCP server's capabilities.

## Available Tools

The Chrome DevTools MCP server typically provides:

| Tool | Description |
|------|-------------|
| `chrome_launch` | Launch Chrome browser |
| `chrome_navigate` | Navigate to a URL |
| `chrome_screenshot` | Capture screenshots |
| `chrome_evaluate` | Run JavaScript in the page |
| `chrome_getElements` | Get DOM elements |
| `chrome_console` | Access console messages |
| `chrome_performance` | Get performance metrics |

## Example Usage in Claude

Once configured, you can ask Claude:

- "Can you analyze my Next.js app at localhost:3000 and find any accessibility issues?"
- "Take a screenshot of the homepage and describe the layout"
- "What JavaScript errors are in the console?"
- "Check the Lighthouse performance score for my site"

## Resources

- [GitHub: chrome-devtools-mcp](https://github.com/ModelContextProtocol/servers)
- [MCP Documentation](https://modelcontextprotocol.io/)
