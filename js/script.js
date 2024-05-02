const button = document.getElementById('send--request')


const consultaGemini = asyn (question => {
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
        const respostaTextIa = data.candidates[0].content.parts[0].text
        respostaTextIa(respostaTextIa)
    })
})

const respostaIa = (respostaTextIa) =>{
    const textAreaPt = document.getElementById('answer-pt')
    text
}


button.addEventListener('click', () =>{
    constquestion = document.getElementById('ask--user').value
    consultaGemini(question)
})