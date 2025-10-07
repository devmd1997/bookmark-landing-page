import "./download.css";
import TextContainer from "../common/textContainer";
import Image from "next/image";
import CustomButton from "../common/button";

interface DownloadItem {
  name: string;
  version: number;
  image: string;
}

const downloadItems: DownloadItem[] = [
  {
    name: "Chrome",
    version: 62,
    image: "/logo-chrome.svg",
  },
  {
    name: "Firefox",
    version: 55,
    image: "/logo-firefox.svg",
  },
  {
    name: "Opera",
    version: 46,
    image: "/logo-opera.svg",
  },
];

const DownloadListItem = ({ item }: { item: DownloadItem }) => {
  return (
    <li>
      <div className="download-item-content">
        <div className="download-image-container">
          <Image
            src={item.image}
            alt="Download Image"
            width={105}
            height={100}
            style={{ objectFit: "contain", height: "100%", width: "auto" }}
          />
        </div>
        <div className="download-text-content">
          <h1>{`Add to ${item.name}`}</h1>
          <p>Minimum version {`${item.version}`}</p>
        </div>
        <CustomButton text="Add & Install Extension" type="button-primary" />
      </div>
    </li>
  );
};

const DownloadList = () => {
  return (
    <ul className="download-list">
      {downloadItems.map((item) => (
        <DownloadListItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default function DownloadSection() {
  return (
    <section className="download-container">
      <TextContainer
        title="Download the extension"
        body="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
        type="compact"
        maxWidth="540px"
      />
      <DownloadList />
    </section>
  );
}
