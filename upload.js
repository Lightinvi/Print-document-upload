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
            fetch('https://discord.com/api/webhooks/1224199038044344340/PQTdT5WkWR4eD0JCOV8GSUUEVTBq43K57nTWWQuwblhXWexI4LTSECxE1Ba5xvcC7u4v', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
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
