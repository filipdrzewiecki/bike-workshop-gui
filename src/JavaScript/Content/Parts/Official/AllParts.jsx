import '../../../Css/index.css';
import './allParts.css'
import React from 'react';
import { Link } from "react-router-dom";
import * as partTypes from '../PART_TYPES.jsx';
import { mapCamelCase } from '../stringUtils';
import FrameIcon from "../../../../resources/icon/frame.png";
import ForkIcon from "../../../../resources/icon/fork.png";
import WheelIcon from "../../../../resources/icon/wheel.png";
import ChainIcon from "../../../../resources/icon/chain.png";
import FrontDerailleurIcon from "../../../../resources/icon/front_derailleur.png";
import RearDerailleurIcon from "../../../../resources/icon/rear_derailleur.png";
import HandlebarIcon from "../../../../resources/icon/handlebar.png";
import HubIcon from "../../../../resources/icon/hub.png";
import SaddleIcon from "../../../../resources/icon/saddle.png";
import SeatpostIcon from "../../../../resources/icon/seatpost.png";
import StemIcon from "../../../../resources/icon/stem.png";
import TyreIcon from "../../../../resources/icon/tyre.png";
import BottomBracketIcon from "../../../../resources/icon/bottom_bracket.png";
import BrakeHydrualicIcon from "../../../../resources/icon/brake_hydraulic.png";
import BrakeHandleIcon from "../../../../resources/icon/brake_lever.png";
import BrakeCaliperIcon from "../../../../resources/icon/brake_caliper.png";
import SeatpostClampIcon from "../../../../resources/icon/seatpost_clamp.png";
import CassetteIcon from "../../../../resources/icon/cassette.png";
import ChainringIcon from "../../../../resources/icon/chainring.png";
import CrankIcon from "../../../../resources/icon/crank.png";
import DamperIcon from "../../../../resources/icon/damper.png";
import DiscIcon from "../../../../resources/icon/disc.png";
import GripsIcon from "../../../../resources/icon/grips.png";
import HeadsetIcon from "../../../../resources/icon/headset.png";
import RimIcon from "../../../../resources/icon/rim.PNG";
import ShifterIcon from "../../../../resources/icon/shifter.png";

function mapPartTypeToPicture(type) {
  switch (type) {
    case partTypes.FRAME: return <img src={FrameIcon} alt={partTypes.FRAME}></img>
    case partTypes.FORK: return <img src={ForkIcon} alt={partTypes.FORK}></img>
    case partTypes.WHEEL: return <img src={WheelIcon} alt={partTypes.WHEEL}></img>
    case partTypes.CHAIN: return <img src={ChainIcon} alt={partTypes.WHEEL}></img>
    case partTypes.FRONT_DERAILLEUR: return <img src={FrontDerailleurIcon} alt={partTypes.FRONT_DERAILLEUR}></img>
    case partTypes.REAR_DERAILLEUR: return <img src={RearDerailleurIcon} alt={partTypes.REAR_DERAILLEUR}></img>
    case partTypes.HANDLEBAR: return <img src={HandlebarIcon} alt={partTypes.HANDLEBAR}></img>
    case partTypes.HUB: return <img src={HubIcon} alt={partTypes.HUB}></img>
    case partTypes.SADDLE: return <img src={SaddleIcon} alt={partTypes.SADDLE}></img>
    case partTypes.SEATPOST: return <img src={SeatpostIcon} alt={partTypes.SEATPOST}></img>
    case partTypes.STEM: return <img src={StemIcon} alt={partTypes.STEM}></img>
    case partTypes.TYRE: return <img src={TyreIcon} alt={partTypes.TYRE}></img>
    case partTypes.BOTTOM_BRACKET: return <img src={BottomBracketIcon} alt={partTypes.BOTTOM_BRACKET}></img>
    case partTypes.BRAKE_CALIPER: return <img src={BrakeCaliperIcon} alt={partTypes.BRAKE_CALIPER}></img>
    case partTypes.CASSETTE: return <img src={CassetteIcon} alt={partTypes.CASSETTE}></img>
    case partTypes.CHAINRING: return <img src={ChainringIcon} alt={partTypes.CHAINRING}></img>
    case partTypes.DAMPER: return <img src={DamperIcon} alt={partTypes.DAMPER}></img>
    case partTypes.CRANK: return <img src={CrankIcon} alt={partTypes.CRANK}></img>
    case partTypes.DISC: return <img src={DiscIcon} alt={partTypes.DISC}></img>
    case partTypes.GRIPS: return <img src={GripsIcon} alt={partTypes.GRIPS}></img>
    case partTypes.HEADSET: return <img src={HeadsetIcon} alt={partTypes.HEADSET}></img>
    case partTypes.RIM: return <img src={RimIcon} alt={partTypes.RIM}></img>
    case partTypes.SHIFTER: return <img src={ShifterIcon} alt={partTypes.SHIFTER}></img>
    case partTypes.BRAKE_LEVER: return <img src={BrakeHandleIcon} alt={partTypes.BRAKE_LEVER}></img>
    case partTypes.BRAKE_HYDRAULIC: return <img src={BrakeHydrualicIcon} alt={partTypes.BRAKE_HYDRAULIC}></img>
    case partTypes.SEATPOST_CLAMP: return <img src={SeatpostClampIcon} alt={partTypes.SEATPOST_CLAMP}></img>
    default: return type;
  }
}

export default () => {
  const parts = partTypes.PART_LIST;

  return (
    <div className="part_card_container">
      {parts.map((part, i) => (
        <Link to={`/parts/${part}`} key={i}>
          <div className="part_card">
            <div className="part_card_picture">{mapPartTypeToPicture(part)}</div>
            <div class="tooltiptext"><h2>{mapCamelCase(part)}</h2></div>
          </div>
        </Link>
      ))}
    </div>
  );
}