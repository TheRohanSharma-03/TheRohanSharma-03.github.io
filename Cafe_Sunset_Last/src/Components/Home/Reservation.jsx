import "./Style.css";
import reservationImg from '../../Assests/reservationImg.jpeg'

function Reservation() {
    return (
      <>
      <div className="reservationWrapper-Bg">
        <div className="reservation-container reservationContainer-Left">
            <div className="reservationImg">
                <img src={reservationImg} alt="" />
            </div>

            <div className="reservation-Header reservationContainer-Right">
                <h3>Reservation</h3>
                <h1>BOOK A TABLE ONLINE</h1>

                <div className="reservationdiv-Input">
                    <div className="inputDiv-NmaeEmail">
                        <input type="text" name="name" id="full-name" placeholder="Your Name" />
                        <input type="email" name="email" id="Email" placeholder="Your Email" required />
                    </div>

                    <div className="inputDiv-datePeople">
                        <input type="datetime-local" id="dateTimeInput" name="dateTimeInput" placeholder="Date & Time" />
                        <input type="number" id="numberOfPeople" placeholder="No. of People" name="numberOfPeople" min="1" max="15" />
                    </div>

                    <div className="speclReq-input">
                        <input type="text" name="message" id="message" placeholder="Special Request" />
                        <button className="bookNow-btn">BOOK NOW</button>
                    </div>


                </div>

            </div>

        </div>

      </div>

      </>
        
    );
  }
  export default Reservation;