const $ = document

const buttonWrapper = $.querySelector(".buttonWrapper");
const tabButtons = $.querySelectorAll(".tab-button");
const contents = $.querySelectorAll(".content");

buttonWrapper.addEventListener('click', event =>{

    const mainContentId = event.target.dataset.id
    const mainContent = $.querySelector(`#${mainContentId}`)

    tabButtons.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')
})