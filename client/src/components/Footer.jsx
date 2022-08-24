import React from 'react';
import { MDBFooter,MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                ABOUT US
              </h6>
              <p> My supermarket is your new way to shop easily and quickly!</p>
              <p>We are very happy that you chose to join us, thank U :)</p>
              <p> And now it's your time to go shopping !!</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Get connected with us on Facebook:</h6>
              <p>
              <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/My-Supermarket-109443241883186'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tel Aviv, Rothschild 32, Israel
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@MySupermarket.co.il
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 972 03-9628249
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 972 03-9634857
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};