import '@styles/index.css';
import Bookmarks from "@components/Bookmarks";
import CurrentDate, { CurrentTime } from "@components/Clock";
import { AppConfig } from '../types/config';

interface HomeProps {
  config: AppConfig;
}

/* ponytail: Cleaned up commented dead code and passed down config prop */
const Home = ({ config }: HomeProps) => (
  <div className="grid px-8 py-4 gap-12">
    <div className="flex content-center justify-start gap-8 max-[932px]:justify-center max-[932px]:w-full">
      <div className="flex items-center justify-center gap-4 my-4 max-[932px]:justify-center max-[700px]:grid-flow-row max-[700px]:justify-items-center">
        <CurrentDate />
        <CurrentTime />
      </div>
    </div>

    <div className="grid min-h-120 w-[calc(100%-20dvw)] place-content-center fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-[700px]:top-[45%] max-[460px]:top-1/2 max-[460px]:w-[90dvw]">
      <Bookmarks config={config} />
    </div>
  </div>
);

export default Home;
