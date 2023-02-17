const api_url = 'https://api.adviceslip.com/advice'
// fetch('https://api.adviceslip.com/advice').then(response =>)

// Função: mostra o conselho na tela
async function getAdviceIndex() {
    
    // Label de carregando enquanto a função faz a request pra API
    document.getElementById('advice_results').innerHTML = `Carregando...`

    const response = await fetch(api_url);
    const adviceData = await response.json();

    // const { slip_id	, advice } = adviceData;
    console.log(adviceData.slip);

    document.getElementById('advice_results').innerHTML = `<p>${adviceData.slip.advice}</p>`
}

getAdviceIndex();

const btnAdv = document.getElementById('get_advice')

// Evento de clique que executa a função 
btnAdv.addEventListener('click', () => {
    getAdviceIndex();
})

// clean code rapaziada