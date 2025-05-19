import { InstagramIcon } from "lucide-react";
import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";
import IconButton from "./Line two buttons/IconButton";
import SocialMButton from "./Line two buttons/SocialMButton";
import CheckButton from "./Line two buttons/CheckButton";
import LoadingButton from "./Line two buttons/LoadingButton";
import DownloadButton from "./Line two buttons/DownloadButton";

function LibraryLineTwo() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Icon Button:</LabelForButton>
          <IconButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Social Media Button:</LabelForButton>
          <SocialMButton>
            <InstagramIcon color="pink" className="mr-1" /> Instagram
          </SocialMButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Check:</LabelForButton>
          <CheckButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Loading Button:</LabelForButton>
          <LoadingButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Download Button:</LabelForButton>
          <DownloadButton />
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineTwo;
