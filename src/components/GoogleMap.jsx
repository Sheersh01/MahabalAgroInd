const GoogleMap = () => {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.533827312239!2d79.14708562195301!3d21.09856611738864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9694ed31581%3A0xeeb53963cd8b9bf6!2sGorakshan!5e1!3m2!1sen!2sin!4v1748932876536!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>`,
        }}
      />
    </div>
  );
};

export default GoogleMap;
