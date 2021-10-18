function handleResponse(response) {
  console.log(response);
  let desplayResult = document.querySelector("#display-result");

  let resultHtml = ` <h2>${response.data[0].word}</h2>`;

  response.data[0].meanings.forEach((element) => {
    console.log(element);
    // console.log("hello");
    resultHtml = resultHtml + `<h3>${element.partOfSpeech}</h3>`;
    element.definitions.forEach((element) => {
      resultHtml =
        resultHtml +
        `<p>${element.definition} <div> <em>${element.example}</em> </div></p>`;
    });
    resultHtml = resultHtml + `<hr>`;
  });

  desplayResult.innerHTML = resultHtml;

  //   `<h3>noun</h3>
  //   <p>
  //     ${response.data[0].meaning}
  //   </p>
  //   <div>
  //     <em>a book of selected poems</em>
  //   </div>
  //   <p>a bound set of blank sheets for writing in.</p>
  //   <div>
  //     <em>an accounts book</em>
  //   </div>
  //   <p>
  //     a set of tickets, stamps, matches, samples of cloth, etc., bound
  //     together.
  //   </p>
  //   <div>
  //     <em>a pattern book</em>
  //   </div>`;
}

function handlesubmit(event) {
  event.preventDefault();

  let word = document.querySelector("#word-input").value;
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

  axios.get(apiUrl).then(handleResponse);
}
let dictionaryForm = document.querySelector("#dictionar-form");
dictionaryForm.addEventListener("submit", handlesubmit);
