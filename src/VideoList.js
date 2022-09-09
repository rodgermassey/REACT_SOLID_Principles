import { Thumbnail } from "./Thumbnail";

export const VideoList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        if ("coverUrl" in item) {
          // it's a video
          return <Thumbnail coverUrl={item.coverUrl} />;
        } else {
          // it's a live stream
          return <Thumbnail coverUrl={item.previewUrl} />;
        }
      })}
    </ul>
  );
};
