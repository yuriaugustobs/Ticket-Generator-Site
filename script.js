function gerarTicket() {
    // Get user input values
    const nomeCompleto = document.getElementById('nome-completo').value;
    const email = document.getElementById('email').value;

    // Validate inputs
    if (!nomeCompleto || !email) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Set user information in the ticket
    document.getElementById('nameUser').innerText = nomeCompleto;
    document.getElementById('emailUser').innerText = email;
    document.getElementById('userName').innerText = nomeCompleto;
    document.getElementById('userEmail').innerText = email;

    // Generate a random ticket number
    const ticketNumber = Math.floor(Math.random() * 1000000);
    document.getElementById('ticketNumber').innerText = ticketNumber;

    // Show the generated ticket
    document.getElementById('ticket-gerado').style.display = 'block';

    document.getElementById('container-main-title').style.display = 'none';

    document.getElementById('container-form').style.display = 'none';
}

// Criando estrutura para trocar a foto do avatar pelo arquivo enviado pelo usuário
const inputFile = document.getElementById('upload-file'); // Input para upload
const userAvatar = document.getElementById('userAvatar'); // Avatar no ticket

inputFile.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Obtém o arquivo selecionado

    if (file) {
        // Validação do tamanho (máximo 500KB)
        if (file.size > 500 * 1024) {
            alert('O arquivo excede o tamanho máximo de 500KB.');
            return;
        }

        // Validação do tipo de arquivo
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Por favor, envie uma imagem no formato JPG ou PNG.');
            return;
        }

        // Utilizando FileReader para carregar a imagem
        const reader = new FileReader();

        reader.onload = function (e) {
            userAvatar.src = e.target.result; // Define a imagem como avatar
        };

        reader.readAsDataURL(file); // Lê o arquivo como URL base64
    }
});
