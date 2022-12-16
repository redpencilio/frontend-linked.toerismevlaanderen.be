export function initialize(appInstance) {
  // Set default locale for intl
  const intl = appInstance.lookup('service:intl');
  intl.setLocale(['en-us']);
}

export default {
  initialize,
};
