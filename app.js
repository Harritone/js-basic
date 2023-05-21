const languages = {
  en: 'en',
  ru: 'ru',
  de: 'de',
};

const defaultReply = 'Неизвестный язык. Перезагрузите страницу чтобы попробовать снова.';

const replies = {
  en: 'Good afternoon!',
  ru: 'Добрый день!',
  de: 'Gutten tag!',
};

const lang = prompt('Выберете язык', languages.ru);
console.log(lang);

switch (lang) {
  case null:
    break
  case languages.ru:
    alert(replies.ru);
    break;
  case languages.en:
    alert(replies.en);
    break;
  case languages.de:
    alert(replies.de);
    break;
  default:
    alert(defaultReply);
    break;
}
