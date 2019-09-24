function bouncer(arr) {
    // Create a new empty array
    // Criando um array novo
    let newArray = [];
    // Use a for cycle to iterate over all elements of the provided array (arr)
    // Usando o For  para passar por todos os elementos do array
    for (var i = 0; i < arr.length; i++) {
        // Use the if statement to check if the current element is truthy 566 or falsy
        // Usando o if para checar se o elemento existe ou é um falsy
        if (arr[i]) {
            //If the element is truthy, I push it to the new array (newArray). 
            //This result in the new array (newArray) containing only truthy elements.
            // Se o elemento existe, eu coloco ele no novo array
            // O resultado final é um novo array só com os elementos que existem.
            newArray.push(arr[i]);
        }
    }
    // return the new array (newArray)
    // Retorna o novo array com elementos certos.
    return newArray;
  }
