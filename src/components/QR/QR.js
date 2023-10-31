import { ReactComponent as QRCode } from "../../assets/business-card-qrcode.svg";
import { ReactComponent as CityptRunner } from "../../assets/citypt-runner-cropped.svg";

export default function QR() {
  return (
    <div className="max-w-[96px] max-h-[96px] w-full h-full relative">
      <QRCode />
      <div className="w-[30px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CityptRunner />
      </div>
    </div>
  );
}
