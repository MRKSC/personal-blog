import React from 'react';
import axios from 'axios';
import './contact.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import {
  BgContainer,
  PageContainer,
  InnerContainer,
  HeadingContainer,
  HeadingInnerContainer,
  HeadingMainDiv,
  HeadingSecondDiv,
  HeadingOne,
  ContactFormContainer,
  ContactFormInnerContainer,
  ContactForm,
  Label,
  Input,
  ButtonContainer,
  SubmitButton,
  TextArea,
  AlertContainer,

} from './Contact.styled';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      alert: 'Send and wait for the response from the Server...',
      className: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { email } = this.state;

    const { message } = this.state;
    if (!name || !email || !message) {
      this.setState({ alert: 'Please fill the Form' });
      setTimeout(() => {
        this.setState({ alert: 'Send and wait for the response from the Server...' });
      }, 2000);
    } else if (message.length > 255) {
      this.setState({ alert: 'Your Message is too long' });
      setTimeout(() => {
        this.setState({ alert: 'Send and wait for the response from the Server...' });
      }, 2000);
    } else if (name.length > 30) {
      this.setState({ alert: 'Your Name is too long' });
      setTimeout(() => {
        this.setState({ alert: 'Send and wait for the response from the Server...' });
      }, 2000);
    } else if (email.length > 50) {
      this.setState({ alert: 'Your Email is too long' });
      setTimeout(() => {
        this.setState({ alert: 'Send and wait for the response from the Server...' });
      }, 2000);
    } else {
      this.setState({ alert: 'Sending Message' });
      axios({
        method: 'POST',
        url: '/api/send',
        data: this.state,
      }).then((response) => {
        if (response.data.status === 'success') {
          this.setState({ alert: 'Message delivered successfully' });
          this.setState({ className: true });
          this.resetForm();
          setTimeout(() => {
            this.setState({ className: false, alert: 'Send and wait for the response from the Server...' });
          }, 5000);
        } else if (response.data.status === 'error') {
          this.setState({ alert: 'Something happened on the way' });
          this.setState({ className: false });
        }
      });
    }
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <BgContainer>
        <PageContainer>
          <HeadingContainer>
            <HeadingInnerContainer>
              <FontAwesomeIcon icon={faSkullCrossbones} className="faSkull-style" />
              <HeadingMainDiv>
                <HeadingOne>
                            In the case you need something
                </HeadingOne>
              </HeadingMainDiv>
              <HeadingSecondDiv />
              <AlertContainer className="animation" isSended={this.state.className}>
                <h3>{this.state.alert}</h3>
              </AlertContainer>
            </HeadingInnerContainer>
          </HeadingContainer>
          <InnerContainer>
            <ContactFormContainer>
              <ContactFormInnerContainer>
                <ContactForm id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <Label htmlFor="name" />
                  <Input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  <Label htmlFor="email" />
                  <Input type="email" placeholder="Email Address" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  <Label htmlFor="message" />
                  <TextArea type="textarea" className="InputStyle" placeholder="Your Message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  <ButtonContainer>
                    <SubmitButton>
                                        Submit
                    </SubmitButton>
                  </ButtonContainer>
                </ContactForm>
              </ContactFormInnerContainer>
            </ContactFormContainer>
          </InnerContainer>
        </PageContainer>
      </BgContainer>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}


export default Contact;
