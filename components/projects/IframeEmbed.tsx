export default function IframeEmbed({ url }: { url: string }) {
  return (
    <iframe
      src={url}
      className="h-full w-full rounded-md"
      title="External Website"
    ></iframe>
  );
}
