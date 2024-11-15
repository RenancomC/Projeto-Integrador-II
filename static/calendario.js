const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function generateCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDay = firstDayOfMonth.getDay();

  const calendarDays = document.getElementById("calendar-days");
  calendarDays.innerHTML = "";

  // Adicionando dias vazios antes do primeiro dia do mês
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarDays.appendChild(emptyDiv);
  }

  // Adicionando os dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("calendar-day");

    // Evento "Culto da familia" de novembro
    if (
      currentMonth === 10 &&
      (day === 3 || day === 10 || day === 17 || day === 24)
    ) {
      dayDiv.classList.add("event-day");
      dayDiv.title = "Culto da Família";
    }

    // Evento "Culto de ensino" de novembro
    if (
      currentMonth === 10 &&
      (day === 6 || day === 13 || day === 20 || day === 27)
    ) {
      dayDiv.classList.add("event-day-2");
      dayDiv.title = "Culto da Ensino";
    }

    // Evento "Culto da familia" de novembro
    if (
      currentMonth === 11 &&
      (day === 1 || day === 8 || day === 15 || day === 22 || day === 29)
    ) {
      dayDiv.classList.add("event-day");
      dayDiv.title = "Culto da Família";
    }

    // Evento "Cult de ensino" de novembro
    if (currentMonth === 11 && (day === 4 || day === 11 || day === 18)) {
      dayDiv.classList.add("event-day-2");
      dayDiv.title = "Culto da Ensino";
    }

    // Evento "comunhao" de novembro
    if (currentMonth === 10 && day === 16) {
      dayDiv.classList.add("event-day-5");
      dayDiv.title = "Culto Jovens";
    }

    // Evento "comunhao" de novembro
    if (currentMonth === 11 && day === 21) {
      dayDiv.classList.add("event-day-5");
      dayDiv.title = "Culto Jovens";
    }

    // Evento "comunhao" de dezembro
    if (currentMonth === 11 && day === 24) {
      dayDiv.classList.add("event-day-3");
      dayDiv.title = "Comunhao";
    }

    // Evento "Cult de Jesus" de dezembro
    if (currentMonth === 11 && day === 25) {
      dayDiv.classList.add("event-day-4");
      dayDiv.title = "Culto do Nascimento de Jesus";
    }

    // Evento "Comunhao de virada" de dezembro
    if (currentMonth === 11 && day === 31) {
      dayDiv.classList.add("event-day-3");
      dayDiv.title = "Comunhao";
    }

    dayDiv.innerText = day;
    dayDiv.addEventListener("click", () => {
      if (
        (day === 3 || day === 10 || day === 17 || day === 24) &&
        currentMonth === 10
      ) {
        showEventInfo(
          "Culto da Família",
          "/static/images/cultofamiliaa.png",
          "#"
        );
      } else if (
        (day === 6 || day === 13 || day === 20 || day === 27) &&
        currentMonth === 10
      ) {
        showEventInfo("Culto da Ensino", "/static/images/cultoensuno.png", "#");
      } else if (
        (day === 1 || day === 8 || day === 15 || day === 22 || day === 29) &&
        currentMonth === 11
      ) {
        showEventInfo(
          "Culto da Família",
          "/static/images/cultofamiliaa.png",
          "#"
        );
      } else if (
        (day === 4 || day === 11 || day === 18) &&
        currentMonth === 11
      ) {
        showEventInfo("Culto da Ensino", "/static/images/cultoensuno.png", "#");
      } else if (day === 16 && currentMonth === 10) {
        showEventInfo("Cuto de Jovens", "/static/images/cultojovens.png", "#");
      } else if (day === 21 && currentMonth === 11) {
        showEventInfo(
          "Culto de Jonvens",
          "/static/images/cultojovens.png",
          "#"
        );
      } else if (day === 24 && currentMonth === 11) {
        showEventInfo("Comunhão", "/static/images/comunhao.png", "#");
      } else if (day === 25 && currentMonth === 11) {
        showEventInfo(
          "Culto do Nascimento de Jesus",
          "/static/images/cultonatal.png",
          "#"
        );
      } else if (day === 31 && currentMonth === 11) {
        showEventInfo(
          "Comunhão da Virada",
          "/static/images/cultonatal.png",
          "#"
        );
      } else {
        alert(
          `Você clicou no dia ${day}, no momento esse dia não possui nenhum evento marcado.`
        );
      }
    });
    calendarDays.appendChild(dayDiv);
  }

  document.getElementById(
    "month-year"
  ).innerText = `${monthNames[currentMonth]} ${currentYear}`;
}

function showEventInfo(title, imageUrl, linkUrl) {
  const eventInfo = document.getElementById("event-info");
  document.getElementById("event-title").innerText = title;
  document.getElementById("event-image").src = imageUrl;
  document.getElementById("event-link").href = linkUrl; // Atribui o link ao evento
  eventInfo.style.display = "block";
}

document.getElementById("close-btn").addEventListener("click", () => {
  const eventInfo = document.getElementById("event-info");
  eventInfo.style.display = "none";
});

document.getElementById("prev-month").addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  generateCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  generateCalendar();
});

generateCalendar();
