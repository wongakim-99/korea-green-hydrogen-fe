import common from './common.json';
import home from './home.json';
import ceo from './ceo.json';
import biogas from './business/biogas.json';
import fertilizer from './business/fertilizer.json';
import service from './business/service.json';

export default {
  ...common,
  ...home,
  ...ceo,
  ...biogas,
  ...fertilizer,
  ...service,
};


