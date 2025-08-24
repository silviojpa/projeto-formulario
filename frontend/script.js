document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('response-message');

    // Limpa a mensagem anterior
    responseMessage.textContent = '';
    responseMessage.style.color = 'black';

    try {
        const response = await fetch('http://localhost:3000/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        if (response.ok) {
            responseMessage.textContent = 'Mensagem enviada com sucesso!';
            responseMessage.style.color = 'green';
            this.reset(); // Limpa o formulário
        } else {
            responseMessage.textContent = 'Erro ao enviar a mensagem: ' + data.error;
            responseMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        responseMessage.textContent = 'Erro ao conectar com o servidor.';
        responseMessage.style.color = 'red';
    }
});