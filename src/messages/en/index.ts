import common from './common.json';
import home from './home.json';
import ceo from './ceo.json';
import about from './company/about.json';
import contact from './contact/contact.json';
import inquiry from './contact/inquiry.json';
import biogas from './business/biogas.json';
import fertilizer from './business/fertilizer.json';
import service from './business/service.json';
import smartFarm from './business/smart-farm.json';
import solar from './business/solar.json';
import ccus from './business/ccus.json';

export default {
  ...common,
  ...home,
  ...ceo,
  ...about,
  Contact: contact,
  Inquiry: inquiry,
  ...biogas,
  ...fertilizer,
  ...service,
  ...smartFarm,
  ...solar,
  ...ccus,
};


