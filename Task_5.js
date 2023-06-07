const onBtnClick = () => {
    const limitElement = document.getElementById("limit")
    const pageNumberElement = document.getElementById("pageNumber")
    const limit = parseInt(limitElement.value)
    const pageNumber = parseInt(pageNumberElement.value)
 
    if (typeof limit !== "number" || typeof pageNumber !== "number") {
        console.log ("Это не число")
        return undefined;
    }
    if (limit < 1 || limit > 10) {
        console.log ("Лимит вне диапазона от 1 до 10")
        return undefined;
    }
    
    if (pageNumber < 1 || pageNumber > 10) {
        console.log ("Номер страницы вне диапазона от 1 до 10")
        return undefined;
    }
    const URL = `https://some/path?page=${pageNumber}&limit=${limit}`
    console.log (`Мы отправили запрос на ${URL}`)
    let promise = fetch(URL)
        .then((response)=> {console.log("Тут запрос выполнился успешно")})
        .catch((e)=> {console.log(`Тут запрос не выполнился ${e}`)});

  }

