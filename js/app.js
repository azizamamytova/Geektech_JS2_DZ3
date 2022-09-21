const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) =>{
        item.classList.remove("tableheader__item_active");
    });
};

hideTabContent();

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent(i);
                showTabContent(i);
        }
    });
  }
});


let slider = 0;
const sliderTime = () => {
    slider++
    if(slider > 3 ){
        slider = 0
    }
    hideTabContent()
    showTabContent(slider)
}
setInterval(sliderTime,1500)



const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal();
    }
})


 function myFunction() {
    const element = document.documentElement;

    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", myFunction);
    }
 }
window.addEventListener("scroll", myFunction);
const modalTimeout = setTimeout(openModal, 40000);










