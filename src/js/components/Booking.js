import {
  templates,
  select
} from '../settings.js';
import {
  utils
} from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(elBooking) {
    const thisBooking = this;
    thisBooking.render(elBooking);
    thisBooking.initWidgets();
    console.log('thisBooking', thisBooking);
  }

  render(elBooking) {
    const thisBooking = this;
    /* generate HTML based on template */
    const generatedHTML = templates.bookingWidget();
    /* generate object */
    thisBooking.dom = {};

    thisBooking.dom.wrapper = elBooking;

    /* create element generatedDOM */
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    /* add element to thisBooking.dom.wrapper */
    thisBooking.dom.wrapper.appendChild(generatedDOM);

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.HourPicker = thisBooking.dom.wrapper.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
  }
}
export default Booking;
