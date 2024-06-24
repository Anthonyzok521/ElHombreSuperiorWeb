import { Cards } from "./Cards";
import youtube from "/assets/youtube.svg";
import spotify from "/assets/spotify.svg";
import facebook from "/assets/facebook.svg";
import telegram from "/assets/telegram.svg";

interface Links {
  youtube: string;
  spotify: string;
  facebook: string;
  telegram: string;
}

const links: Links = {
  youtube: import.meta.env.VITE_YOUTUBE,
  spotify: import.meta.env.VITE_SPOTIFY,
  facebook: import.meta.env.VITE_FACEBOOK,
  telegram: import.meta.env.VITE_TELEGRAM,
};

export const ContainerCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Cards
        title="Youtube"
        link={links.youtube}
        description="Siguenos en nuestro canal de Youtube"
        image={youtube}
      />
      <Cards
        title="Telegram"
        link={links.telegram}
        description="Tenemos un canal de Telegram"
        image={telegram}
      />
      <Cards
        title="Spotify"
        link={links.spotify}
        description="Escuchanos en nuestro canal de Spotify"
        image={spotify}
      />
      <Cards
        title="Facebook"
        link={links.facebook}
        description="Únete a nuestra sociedad sigma en Facebook"
        image={facebook}
      />
    </div>
  );
};
