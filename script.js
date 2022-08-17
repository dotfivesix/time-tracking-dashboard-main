const reportCardContainer = document.getElementsByClassName("report-cards-container")[0];

const getSnakeCase = x => x.split(" ").join("-").toLowerCase();

function getReportCard(data)
{
    const title = getSnakeCase(data.title);
    const reportCard = document.createElement("div");

    reportCard.id = `report-card-${title}`;
    reportCard.classList.add("report-card");
    reportCard.setAttribute("mousecount", "1");

    reportCard.innerHTML = `<div class="report-icon-container">
    <img src="./images/icon-${title}.svg" alt="${title}" class="report-icon">
  </div>
  <div class="report-content">
    <section class="report-type-container">
      <h3 class="report-type" id="report-type-${title}">${data.title}</h3>
      <img src="./images/icon-ellipsis.svg" alt="...">
    </section>
    <section class="report-current-time-container">
      <h2 class="report-current-time" id="report-current-time-${title}">${data.timeframes.weekly.current}hrs</h2>
    </section>
    <section class="report-previous-time-container">
      <h4 class="report-previous-time" id="report-previous-time-${title}">Lask week - ${data.timeframes.weekly.previous}hrs</h4>
    </section>
  
  </div>
  <div class="rect" id="rect-${title}"></div>`;

  reportCard.attributes.mousecount.value = "1";

  reportCard.addEventListener("mouseenter", () => {
    let rectangle = reportCard.children[2];
    reportCard.style.transform = "scale(1.1)";
        rectangle.style.left = "-15rem"
        setTimeout(() => {
            rectangle.style.transition = "left 0s ease-out";
            reportCard.style.transform = "scale(1)";
            rectangle.style.left = "26rem";
            setTimeout(() => {
              rectangle.style.transition = "left .5s ease-out";
            }, 100);
        }, 500);
    });



  reportCardContainer.append(reportCard);
}

fetch("./data.json").then(res => res.json()).then(data => {
    for (let i = 0; i < data.length; i++)
    {
        let item = data[i];
        getReportCard(item);
    }
});
