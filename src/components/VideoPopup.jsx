import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function VideoPopup({ show, videoUrl, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body className="p-0">
      <div className="ratio ratio-16x9">
        <iframe
          src={videoUrl}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-100 h-100"
        ></iframe>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default VideoPopup
