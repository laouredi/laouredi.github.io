# Zero to Hero: The Ultimate Guide to `content.ts`

Welcome to your website's **Control Center**. 

The file `client/src/lib/content.ts` is the single source of truth for your portfolio. By editing this one file, you can manage your entire website without touching complex code.

---

## 🚀 Level 1: The Basics (Personal Info)

At the very top of the file, you'll see the `personal` section. This is your digital ID card.

```javascript
personal: {
  name: "Alex",          // Your first name (used in intros)
  fullName: "Alex Doe",  // Your full legal name (used in copyright footer)
  logo: "ALEX.",         // The text logo at the top left of the site
  email: "...",          // Updates the contact page automatically
  phone: "...",          // Updates the contact page automatically
  location: "...",       // Updates the contact page automatically
}
```

**✅ Action:** Change these values to your real information immediately.

---

## 🛠 Level 2: Managing Projects

The `projects` section is a list (array) of your work. Each project is wrapped in curly braces `{ }`.

### Structure of a Project
```javascript
{
  id: 1,                                       // Unique number (1, 2, 3...)
  title: "My Awesome App",                     // Project Name
  category: "Web Development",                 // Category label (appears above title)
  description: "I built this amazing tool...", // Short summary
  image: "https://...",                        // Link to project screenshot
  tech: ["React", "Python"],                   // List of tools used (badges)
  link: "https://my-app.com",                  // Link to live site
  github: "https://github.com/...",            // Link to code
},
```

### How to Add a New Project
1. Copy an existing project block (from `{` to `},`).
2. Paste it at the bottom of the list.
3. **IMPORTANT:** Change the `id` to the next number (e.g., if the last one was 3, make this one 4).
4. Fill in your details.

---

## 📜 Level 3: The Journal (Blog)

The `blog` section allows you to write articles.

### Writing Content
The `content` field supports **HTML**. This gives you full control over formatting.

- **Paragraphs:** Wrap text in `<p> ... </p>`
- **Headings:** Use `<h3>Title</h3>` for section titles.
- **Quotes:** Use `<blockquote>Quote here</blockquote>` for stylish quotes.
- **Bold:** Use `<strong>Bold text</strong>`

**Example:**
```javascript
content: `
  <p>This is the first paragraph of my story.</p>
  <h3>Chapter 1: The Beginning</h3>
  <p>Then I decided to learn code...</p>
`
```

---

## 🎓 Level 4: Experience & Files

### Adding a Job
Under `experience.career`, copy a block and fill in:
- `year`: "2023 - Present"
- `role`: "CEO"
- `company`: "My Startup"
- `description`: What you did there.

### Adding a File (Resume/Certificate)
1. **Upload:** Drag your PDF into the `client/public` folder on the left.
2. **Link:** In `content.ts`, under `experience.documents`:
   ```javascript
   {
     name: "My Resume",
     url: "/my-uploaded-file.pdf" // Must start with /
   }
   ```

---

## 💡 Pro Tips
- **Images:** You can use external links (like Unsplash) or upload images to `client/public` and link them like `/my-image.jpg`.
- **Safety:** Don't delete the commas `,` at the end of lines! The code needs them to understand the list.
- **Preview:** Save the file (`Cmd+S` or `Ctrl+S`), and the preview window will update instantly.

**Go forth and create!** 
