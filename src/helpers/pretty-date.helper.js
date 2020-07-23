import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const onlyDate = (datetime) => datetime.split('T')[0];
const fromNow = (datetime) => moment(datetime).fromNow();
const prettyFormat = (datetime) => moment(datetime).format('LL');

export { onlyDate, fromNow, prettyFormat };
