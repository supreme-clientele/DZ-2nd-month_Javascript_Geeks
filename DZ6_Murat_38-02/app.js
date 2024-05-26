const currentDate = moment();

function renderWeekdays() {
    const weekdaysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const calendarWeekdaysContainer = document.querySelector('.calendar-weekdays');

    const htmlElements = weekdaysNames.map (function (weekday) {
        const li = document.createElement('li');
        li.innerText = weekday;
        return li;
    });

    calendarWeekdaysContainer.innerHTML = '';
    calendarWeekdaysContainer.append(...htmlElements); // append (1,2,3) append (...[1,2,3])
}    

function renderCurrentDate() {
    const calenderCurrentDateContainer = document.querySelector('.calendar-current-date');
    calenderCurrentDateContainer.innerText = currentDate.format('MMMM YYYY');

    // Дополнения для ДЗ6
    // Обновления сезона
    updateSeason();
}

function renderDays() {
    const calendarDaysContainer = document.querySelector('.calendar-dates');
    calendarDaysContainer.innerHTML = '';

    const firstDayInMonth = currentDate.clone().startOf('month');
    const skipDaysCount = (firstDayInMonth.isoWeekday() - 1) & 7;

    for(let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement('li');
        li.innerText = '';
        calendarDaysContainer.append(li);
    }

    const daysInMonth = currentDate.daysInMonth();
    const dateNow = moment();

    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement('li');
        li.innerText = i.toString();
        if(currentDate.format('MM-YYYY') === dateNow.format('MM-YYYY') && dateNow.date() === i) {
            li.className = 'active';
        }

        // Дополнения для ДЗ6
        // Подсветка выходных дней
        const dayOfWeek = currentDate.set('date', i).day();
        if (dayOfWeek === 6) {
            li.classList.add('saturday');
        } else if (dayOfWeek === 0) {
            li.classList.add('sunday');
        }
        // Дополнения для ДЗ6

        calendarDaysContainer.append(li);
    } 
}

function renderCalendar() {
    renderWeekdays();
    renderCurrentDate();
    renderDays();
}


// Дополнения для ДЗ6
function updateSeason() {
    const month = currentDate.month();
    const body = document.body;
    body.className = '';

    if ([11, 0, 1].includes(month)) {
        body.classList.add('winter');
    } else if ([2, 3, 4].includes(month)) {
        body.classList.add('spring');
    } else if ([5, 6, 7].includes(month)) {
        body.classList.add('summer');
    } else if ([8, 9, 10].includes(month)) {
        body.classList.add('fall');
    }
}
// Дополнения для ДЗ6

renderCalendar();

const [prevBtn, nextBtn] = [...document.querySelectorAll('.calendar-navigation span')];

prevBtn.onclick = () => {
    currentDate.subtract(1, 'month');
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, 'month');
    renderCalendar();
}


