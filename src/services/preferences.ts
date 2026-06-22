import defaults_conf from '@template'
import { AppConfig } from '@type/config';

/* ponytail: Removed redundant try-catch stringify deep clones and simplified initial resolution */
const external_conf = localStorage.getItem("pageper_external_conf");
let parsedExternalConf: AppConfig | null = null;

if (external_conf) {
  try {
    parsedExternalConf = JSON.parse(external_conf);
  } catch (e) {
    console.error("Failed to parse external_conf:", e);
  }
}

if (!parsedExternalConf && defaults_conf) {
  localStorage.setItem("pageper_external_conf", JSON.stringify(defaults_conf, null, 2));
}

const user_pref: AppConfig = parsedExternalConf || defaults_conf || { bookmarks: {} };
export default user_pref;
