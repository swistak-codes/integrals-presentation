import App from './components/App.svelte';
import { getMode } from './helpers/getMode';

const app = new App({
  target: document.body,
  props: {
    mode: getMode(),
  },
});

export default app;
