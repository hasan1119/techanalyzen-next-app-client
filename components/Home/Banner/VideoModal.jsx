import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ktGOsjhHFAE"
        onClose={() => setOpen(false)}
      />

      <button className="video_button" onClick={() => setOpen(true)}>
        <i className="fas fa-play"></i>
      </button>
    </React.Fragment>
  );
};

export default VideoModal;
