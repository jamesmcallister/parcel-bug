import * as S from "./styles";
import { MediaItem } from "./media.item";

export function App() {
  return (
    <div>
      <h1>Hello broken * imports</h1>
      <MediaItem />
      <S.MediaItem />
    </div>
  );
}
