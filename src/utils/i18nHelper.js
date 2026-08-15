import { useTranslation } from 'react-i18next';

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const tr = (viText, enText) => {
    if (!isEn) return viText;
    return enText || viText;
  };

  return { t, i18n, isEn, tr, lang: i18n.language };
};
