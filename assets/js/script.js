const api_url = 'https://api.adviceslip.com/advice'
// fetch('https://api.adviceslip.com/advice').then(response =>)

async function getAdviceIndex() {

    const response = await fetch(api_url);
    const adviceData = await response.json();

    // const { slip_id	, advice } = adviceData;
    console.log(adviceData.slip);

    document.getElementById('advice_results').innerHTML = `<p>${adviceData.slip.advice}</p>`
}

getAdviceIndex();

const btnAdv = document.getElementById('get_advice')

btnAdv.addEventListener('click', () => {
    getAdviceIndex();
})

// clean code rapaziada