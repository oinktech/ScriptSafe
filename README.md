# ScriptSafe

ScriptSafe 是一個簡單的網站工具，用於禁用瀏覽器的檢視原始碼功能和右鍵菜單。它使用 JavaScript 和 CSS 實現，提供了基本的網站保護功能。

## 語言選擇

- [繁體中文](#繁體中文)
- [English](#english)

## 繁體中文

### 介紹

這個工具展示了一個虛擬彈出框，用於阻止用戶檢視原始碼和右鍵菜單。彈出框會顯示一條警告消息，告知用戶這些功能已被禁用。

### 使用方法

1. 將以下代碼添加到您的 HTML 文件中：

    <button class="copy-button" onclick="copyCode('html-code')">複製代碼</button>
    <pre class="code-block"><code id="html-code">&lt;script src='https://oinktech.github.io/ScriptSafe/script.js'&gt;&lt;/script&gt;</code></pre>

2. 當用戶嘗試檢視原始碼或使用右鍵菜單時，彈出框會顯示警告消息。

### 技術支持

如需技術支持，請聯繫我們的技術支持團隊。您可以通過電子郵件 [oinktech2024@gmail.com](mailto:oinktech2024@gmail.com) 與我們取得聯繫。

### 貢獻

如果您有任何建議或改進，請提交拉取請求或問題報告。

### 授權

本專案使用 [MIT 許可證](https://github.com/oinktech/ScriptSafe/blob/main/LICENSE.md) 授權。

## English

### Introduction

ScriptSafe is a simple web tool designed to disable browser functionality such as viewing source code and context menus. It uses JavaScript and CSS to provide basic website protection features.

### Usage

1. Add the following code to your HTML file:

    <button class="copy-button" onclick="copyCode('html-code-en')">Copy Code</button>
    <pre class="code-block"><code id="html-code-en">&lt;script src='https://oinktech.github.io/ScriptSafe/script.js'&gt;&lt;/script&gt;</code></pre>

2. When users attempt to view the source code or use the context menu, a popup will display a warning message.

### Technical Support

For technical support, please contact our support team. You can reach us via email at [oinktech2024@gmail.com](mailto:oinktech2024@gmail.com).

### Contributing

If you have any suggestions or improvements, please submit a pull request or report an issue.

### License

This project is licensed under the [MIT License](https://github.com/oinktech/ScriptSafe/blob/main/LICENSE.md).

<style>
.copy-button {
    background-color: #00bfff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.copy-button:hover {
    background-color: #0099cc;
}

.code-block {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 16px;
    overflow-x: auto;
    margin-top: 8px;
}

code {
    display: block;
    white-space: pre;
    color: #333;
}
</style>

<script>
function copyCode(id) {
    var code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(function() {
        alert('Code copied to clipboard!');
    }, function() {
        alert('Failed to copy code.');
    });
}
</script>
