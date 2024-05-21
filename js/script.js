const button = document.getElementById('send--request')


const consultaGemini = (question => {
    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content=Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }

    fetch (url, requestOptions)
    .then(response => response.json())
    .then(data =>{
        const responseTextIa = data.candidates[0].content.parts[0].text
        respostaIa(responseTextIa)
    })
})

const respostaIa = (responseTextIa) =>{
    const textAreaPt = document.getElementById('answer-pt')
    textAreaPt.value = responseTextIa
}


button.addEventListener('click', () =>{
    const question = document.getElementById('ask--user').value
    consultaGemini(question)
})