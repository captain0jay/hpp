import React from 'react'

export default function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123805.36709367766!2d72.97767360145777!3d22.30365479535497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc944a7d9b5cd%3A0xdcda38f3b79902fc!2sHEALTH%20PLUS%20PHYSIOTHERAPY%20CLINIC!5e0!3m2!1sen!2sin!4v1708500166430!5m2!1sen!2sin"
        className="responsive-iframe"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}
