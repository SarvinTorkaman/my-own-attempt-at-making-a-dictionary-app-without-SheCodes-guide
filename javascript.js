function handleResponse(response) {
  if (typeof response === "object") {
    console.log(response);
    let desplayResult = document.querySelector("#display-result");

    let resultHtml = ` <h2>${response.data[0].word}</h2>`;

    response.data[0].meanings.forEach((element) => {
      console.log(element);
      // console.log("hello");
      resultHtml = resultHtml + `<h3>${element.partOfSpeech}</h3>`;
      element.definitions.forEach((element) => {
        resultHtml = resultHtml + `<p>${element.definition}</p> `;

        if (element.example !== undefined) {
          resultHtml = resultHtml + `<div> <em>${element.example}</em> </div>`;
        }
      });
      resultHtml = resultHtml + `<hr>`;
      desplayResult.innerHTML = resultHtml;
    });
  } else {
    alert("No result for that word");
  }
}

function handlesubmit(event) {
  event.preventDefault();

  let word = document.querySelector("#word-input").value;
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

  axios.get(apiUrl).then(handleResponse);
  axios.get(apiUrl).catch(function (error) {
    alert(`${word} is not found in english dictionary`);
  });
}
let dictionaryForm = document.querySelector("#dictionar-form");
dictionaryForm.addEventListener("submit", handlesubmit);
