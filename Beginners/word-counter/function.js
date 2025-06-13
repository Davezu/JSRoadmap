 const input = document.querySelector("#textInput");
 const wordCount = document.querySelector("#result");
 const button = document.querySelector("#btn");

button.addEventListener("click",()=>{
    let text = input.value;
    let word = text.split(" ");

        for(let count = 1; count <= word.length; count++){
        wordCount.innerHTML = `Word Count: ${count}`;
        }
    });
//     for(let i = 0; i < word.length; i++){
//     return wordCount.innerHTML = `Word Count: ${word.length}`;
//     }

// });

// button.addEventListener("click",()=>{
//     let text = input.value
//     let word = text.trim().splt(/\s+/);
//     let count = 0;

//     if (text === true) {
//         for(count = 0; count < word.length; count++){
//         wordCount.innerHTML = `Word Count: ${count}`;
//         }     
//     }else{
//         return wordCount.innerHTML = `Please Enter a valid value`
//     }
//     });