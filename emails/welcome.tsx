import { 
  Html,
  Head, 
  Body,
  Container,
  Text,
  Link,
  Preview,
  Section,
  Heading
} from '@react-email/components';

interface WelcomeEmailProps {
  name: string;
  level: string;
}

export const WelcomeEmail = ({ name, level }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to UGO Network!</Preview>
    <Body style={{ backgroundColor: '#f6f9fc', padding: '20px 0' }}>
      <Container>
        <Section style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px' }}>
          <Heading style={{ color: '#00703C', fontSize: '32px', textAlign: 'center' }}>
            Welcome to UGO Network!
          </Heading>
          <Text style={{ fontSize: '16px', lineHeight: '26px' }}>
            Dear {name},
          </Text>
          <Text style={{ fontSize: '16px', lineHeight: '26px' }}>
            Thank you for applying to join the UGO Network as a {level} student member. We're excited to have you as part of our growing community!
          </Text>
          <Text style={{ fontSize: '16px', lineHeight: '26px' }}>
            Your application is being reviewed, and we'll get back to you shortly with the next steps.
          </Text>
          <Text style={{ fontSize: '16px', lineHeight: '26px', marginTop: '24px' }}>
            Best regards,<br />
            The UGO Network Team
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);