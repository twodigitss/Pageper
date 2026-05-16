# 📰 Pageper

**Pageper** is a minimalist focused **startpage** that aims to be as **simple** and customizable **as possible**.<br>
This Project was born from the need to create a **less saturated start page**. 

<div style="display:grid; place-items: center;" align="center">
<img src="./public/screenshots/home.png" style="border: 3px solid black; border-radius:15px">
    <i>Figure i: home screen</i>
</div>
<br>

### The problem?<br>
Modern startpages ship with irrelevant news, intrusive ads, and unsolicited recommendations.<br>
This "bloatware" ecosystem turns a practical tool that should not take too much cognitive load to manage into a panel of distractions.
Sometimes those developers dare more and try to implemment cloud based features, like saving your bookmarks under an account you create 
to manage your bookmarks. This is friction and innecesary infrastructure for one only purpose, not to mention the privacy issues and latency it might exist.
<br>

This type of tools are meant to be lightweight and operate with the least friction possible between intention and execution.<br>
Pageper tries actively to mititgate all of the previous problems listed above.
<br><br>

### Why Pageper?
- Zero bloat: no news, no ads, no widgets you didn't ask for.
- Private by default: no account, no telemetry, no cloud sync. 
  Everything stays in your browser. (Favicons fetched via DuckDuckGo.)
- Keyboard-first: open any bookmark with a keystroke. No mouse required.
- Themes: eight colorschemes, saved locally.
<br><br><br>

## 🌐 Installation

### Through Firefox Extensions. <br>
**This is the recommended way** of installation.<br>
* https://addons.mozilla.org/en-US/firefox/addon/pageper/
<br><br>

### From source with node package manager (npm) or bun.js (bun).<br>
I made a Markdown file for building from source.<br>
* [Building instructions from source and requisites](/BuildFromSource.md)

Or you can run the auto-build script that atomate this whole process.<br>
* [Auto build script](/build.sh)

    
<br><br>

## 📖 Get started!
Click the settings button in the top right corner to open the configurations window.
You can find in the left side some sections:
- Bookmarks: here you can add, remove, modify and organize your bookmarks.
- Themes: Eight colorschemes to choose from.
- Keyboard: how the keyboard navigation works.
- Help: if you have extra questions it will redirect to this repository to contact me.

<div align="center">
  <table>
    <tr>
        <td><img src="./public/screenshots/settings-bookm.png" style="border: 3px solid black; border-radius:15px"></td>
        <td><img src="./public/screenshots/settings-cols.png" style="border: 3px solid black; border-radius:15px"></td>
    </tr>
    <tr>
        <td><img src="./public/screenshots/settings-keys.png" style="border: 3px solid black; border-radius:15px"></td>
        <td><img src="./public/screenshots/home-sel2.png" style="border: 3px solid black; border-radius:15px"></td>
    </tr>
  </table>
  <i>Figures ii - v: Available Configurations</i>
</div>
<br>


## 🚫 Got a error?
Open a issue or discution in this repository (:<br>
If its possible, add the output log of the console from `Inspect(Q) -> Console`.<br> 
I am trying to be as active as i can.<br><br>

## ⚠️ Disclaimer
Pageper fetches site icons exclusively through DuckDuckGo's favicon service. No other external requests are made — your bookmarks, settings, and preferences are stored locally in your browser and never leave your device.<br><br>
