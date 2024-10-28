import en from '~~/i18n/locales/en.yaml'
import ru from '~~/i18n/locales/ru.yaml'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en,
    ru
  }
}))
