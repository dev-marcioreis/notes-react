const useCreateDate = () => {
    const dateObj = new Date()
    const month = dateObj.getMonth()
    let monthName;

    switch (month) {
        case 0: monthName = "Janeiro";
            break;
        case 1: monthName = "Fevereiro";
            break;
        case 2: monthName = "Março";
            break;
        case 3: monthName = "Abril";
            break;
        case 4: monthName = "Maio";
            break;
        case 5: monthName = "Junho";
            break;
        case 6: monthName = "Julho";
            break;
        case 7: monthName = "Agosto";
            break;
        case 8: monthName = "Setembro";
            break;
        case 9: monthName = "Outubro";
            break;
        case 10: monthName = "Novembro";
            break;
        case 11: monthName = "Dezembro";
            break;
    
        default:
            break;
    }

    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;

    return date;

}

export default useCreateDate