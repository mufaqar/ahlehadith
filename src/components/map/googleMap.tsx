const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6796.299514331889!2d74.300104!3d31.602356000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c62b2f9f8e7%3A0xeffc0ca0dbecf0c8!2sMarkazi%20Jamiat%20Ahl-e-Hadees%20Pakistan%20(MJAP)%20Secretariat%20Office!5e0!3m2!1sen!2sus!4v1685617680798!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;
