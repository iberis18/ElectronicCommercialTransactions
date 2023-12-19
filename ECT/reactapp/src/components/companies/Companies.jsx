import { BlokingWindow } from "../popupComponents/blokingWindow/BlokingWindow";
import { usePopup } from "../popupComponents/usePopup";

export default function Companies() {
  const [isShowingBlokingWindow, toggleBlokingWindow] = usePopup();

    return (
      <div >
      <BlokingWindow show={isShowingBlokingWindow} title={'TITLE'} message={'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'} />
      <button onClick={toggleBlokingWindow}>
        Open Modal
      </button>
    </div>
    )
  }