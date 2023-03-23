const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabsContent = document.querySelectorAll('.tabcontent');

const hideTabsContent = () => {
  tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  })

  tabs.forEach(item => {
    item.classList.remove("tabheader__item_active")
  });

}

const showTabContent = (i = 0) => {
  tabsContent[i].classList.add('block', 'fade')
  tabsContent[i].classList.remove('hide')
  tabs[i].classList.add('tabheader__item_active');
}


hideTabsContent()
showTabContent()

tabsParent.addEventListener('click', function (e) {
  const target = e.target

  if (target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if (item === target) {
        hideTabsContent()
        showTabContent(i)
        clearInterval(autoPlay)
        setTimeout(() => {
          playTabs()
        }, 5000);
      }
    });
  }

});

const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden'
}

openModalBtn.addEventListener('click', openModal)

const closeModal = () => {
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal);

// 1) Сделать сладер автоматическим(переключать фотографии каждую 1 секунду).
// Если человек взаимодействует со слайдером то убирать автоматическое переключение фотографий.
// Если пользователь не взаимодействовал со слайдером более 5 секунд снова делать его автоматическим.
// Добавить анимацию для переключения картинок.

let indexValue = 0
let autoPlay

function playTabs() {
  autoPlay = setInterval(() => {

    tabsContent.forEach(i => {
      i.style.display = 'none';
    });

    tabs.forEach(i => {
      i.classList.remove('tabheader__item_active')
    });

    indexValue++
    if (indexValue > tabsContent.length) {
      indexValue = 1;
    }
    tabsContent[indexValue - 1].style.display = 'block';
    tabsContent[indexValue - 1].classList.add('fade')
    tabs[indexValue - 1].classList.add("tabheader__item_active")
  }, 1000);
}
playTabs()


// 2) Закрывать модальное окно по нажатию на серую область
// Открывать модальное окно если пользователь оказывается в самом низу сайта

modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
  }
});


function modalSroll() {
  if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    openModal();
    window.removeEventListener('scroll', modalSroll);
  }
}

window.addEventListener('scroll', modalSroll);