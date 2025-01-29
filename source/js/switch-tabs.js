const priceTabsList = document.querySelector('.price__tabs');
const priceTabs = priceTabsList.querySelectorAll('input[type="radio"]');
const priceList = document.querySelector('.price__list');
const priceNumbers = priceList.querySelectorAll('.price__number');
const priceLablesList = priceTabsList.querySelectorAll('.price__tab-lable');


const Price = {
  oneMonth: {
    month: '5000',
    dayTime: '1700',
    fullDay: '2700',
    lessonsAmount: '12 занятий',
  },

  sixMonth: {
    month: '30000',
    dayTime: '10200',
    fullDay: '16200',
    lessonsAmount: '72 занятия',
  },

  twelveMonth: {
    month: '60000',
    dayTime: '20400',
    fullDay: '26400',
    lessonsAmount: '144 занятия',
  }
};

const fillPriceValues = (id) => {
  const lessonsPrice = document.querySelector('#lessons-price');
  const daytimePrice = document.querySelector('#daytime-price');
  const fulldayPrice = document.querySelector('#fullday-price');
  const lessonsAmount = document.querySelector('#lessons-amount');

  lessonsPrice.dataset.price = Price[id].month;
  daytimePrice.dataset.price = Price[id].dayTime;
  fulldayPrice.dataset.price = Price[id].fullDay;
  lessonsAmount.textContent = Price[id].lessonsAmount;

  for (const priceValue of priceNumbers) {
    priceValue.textContent = priceValue.dataset.price;
  }
};

const changeRadioButtonsClass = (radioId) => {
  const checkedTub = priceTabsList.querySelector('.price__tab-lable--checked');
  checkedTub.classList.remove('price__tab-lable--checked');

  const priceTab = priceTabsList.querySelector(`label[for="${radioId}"]`);
  priceTab.classList.toggle('price__tab-lable--checked');
};


const switchTubOnClick = (evt) => {
  const radioButtonsId = evt.target.id;
  fillPriceValues(radioButtonsId);
  changeRadioButtonsClass(radioButtonsId);
};


const switchTubOnKeydown = (evt) => {
  if (evt.key === 'Enter') {
    const radioButtonsLablesId = evt.target.children[0].id;
    fillPriceValues(radioButtonsLablesId);
    changeRadioButtonsClass(radioButtonsLablesId);
  }
};


const initPriceTubSwither = () => {
  for (const tub of priceTabs) {
    tub.addEventListener('click', switchTubOnClick);
  }

  for (const lable of priceLablesList) {
    lable.addEventListener('keydown', switchTubOnKeydown);
  }
};

export { initPriceTubSwither };
