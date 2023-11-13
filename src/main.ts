import { createApp }from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Components from './components';
import localeService from './services/locale.service';
const app = createApp(App)

app.config.globalProperties.$localeToText = localeService.localeToText;
app.config.globalProperties.$userLocale = localeService.getUserLocale();

Components.forEach(component => app.component(component.name, component))


app.use(store)
app.use(router)
app.mount('#app')
