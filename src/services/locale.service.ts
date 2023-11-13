import jsonData from '../db/translations.json';

class LocaleService {

    getUserLocale(): string {
        let locale = localStorage.getItem('locale');
        if(!locale) return 'en';
        return locale;
    }

    localeToText (key: string) {
        
        let userLocale = localStorage.getItem('locale') || 'en';
        // let userLocale = this.getUserLocale()

        for(let obj of jsonData) {
            if(obj.key === key) {
                return obj[userLocale];
            }   
        }
        return '';
    }
}

export default new LocaleService();