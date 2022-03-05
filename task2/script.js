const getDayName = date => {
    const  days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const d = new Date(date); // создаем дату
    const n = d.getDay(); // получаем порядковые номер дня недели

    return days[n];
}

const getNumberOfTheWeek = date => {
    return Math.floor(date / 7) + 1; // note: можно явно преобразовать date => Number(date)
}


const getMonthName = date => {
    const months =  [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];

    return months[date - 1];
}



function getDayInfo(date) {
    date = date.split('.').reverse(); // [ "year", "month", "day" ]

    const dayName = getDayName(date);
    const numberOfTheWeek = getNumberOfTheWeek(date[2]);
    const month = getMonthName(date[1]);

    return `${dayName}, ${numberOfTheWeek} неделя ${month} ${date[0]} года`;
}

console.log(getDayInfo("05.03.2022"));