import common from './common.json';
import home from './home.json';
import ceo from './ceo.json';
import contact from './contact/contact.json';
import inquiry from './contact/inquiry.json';
import biogas from './business/biogas.json';
import fertilizer from './business/fertilizer.json';
import service from './business/service.json';

export default {
  ...common,
  ...home,
  ...ceo,
  Contact: contact,
  Inquiry: inquiry,
  ...biogas,
  ...fertilizer,
  ...service,
};


