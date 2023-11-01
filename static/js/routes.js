// 當文檔準備好後執行
document.addEventListener('DOMContentLoaded', function() {
    // 使用 fetch API 從後端獲取數據
    fetch('http://localhost:5000/predict')
    .then(response => response.json())  // 解析為 JSON
    .then(data => {
        // 更新 HTML 內容
        document.getElementById('predicted-emotion').innerText = data.emotion;
        document.getElementById('file-name').innerText = data.filename;
    })
    .catch(error => console.error('Error:', error));
});
