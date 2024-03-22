document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('upload-btn').addEventListener('click', function() {
        document.getElementById('file-input').click();
    });
    
    document.getElementById('file-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgElement = document.getElementById('preview-img');
                imgElement.src = e.target.result;
                imgElement.style.display = 'block';
            }
            reader.readAsDataURL(file);
    
            var url = 'https://discord.com/api/v10/channels/1146358218696691764/messages';
            var authToken = decrypt('uY3ANQt+2c5P7zNDzoUvf+Vy4MLvCDg+naP1w1HiVAJMwg1IDwc9FO9N3WVyAQXqCqXIbUzr5lrhZiBq0J7ZZvbfwhWa99urJRotR4oK/X4=');
    
            title = document.getElementById('upload-container').children[0]

            title.innerHTML = '上傳中'
            var formData = new FormData();
            formData.append('printfile', file);
            formData.append('content', 'print target-tag:355');
    
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', authToken);
            xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            xhr.setRequestHeader('Accept', 'application/json');
    
            xhr.onload = function () {
                console.log("submit")
                if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText);
                } else {
                console.error('Request failed:', xhr.statusText);
                }
            };
    
            xhr.onerror = function () {
                console.error('Request failed');
            };
    
            xhr.send(formData);
            
        }
    });
})