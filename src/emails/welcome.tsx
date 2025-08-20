import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Welcome() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <div style={logoContainer}>
              <div style={logo}>
                <span style={logoText}>Uptimebuddy</span>
              </div>
            </div>
          </Section>

          <Section style={content}>
            <Heading style={h1}>Welcome to Uptimebuddy! 🚀</Heading>

            <Text style={text}>
              Thank you for joining our community of developers who never want
              to be caught off guard by API downtime.
            </Text>

            <Section style={featuresSection}>
              <div style={featureItem}>
                <div style={featureIcon}>⚡</div>
                <div>
                  <Text style={featureTitle}>Lightning Fast Alerts</Text>
                  <Text style={featureDesc}>
                    Get notified in under 30 seconds when issues occur
                  </Text>
                </div>
              </div>

              <div style={featureItem}>
                <div style={featureIcon}>🌍</div>
                <div>
                  <Text style={featureTitle}>Global Monitoring</Text>
                  <Text style={featureDesc}>
                    Monitor from multiple locations worldwide
                  </Text>
                </div>
              </div>

              <div style={featureItem}>
                <div style={featureIcon}>📊</div>
                <div>
                  <Text style={featureTitle}>Detailed Analytics</Text>
                  <Text style={featureDesc}>
                    Track performance trends and historical data
                  </Text>
                </div>
              </div>
            </Section>

            <Hr style={hr} />

            <Section style={footer}>
              <Text style={footerText}>
                Best regards,
                <br />
                Uptimebuddy Team
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  maxWidth: "600px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
};

const header = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "40px 0",
  textAlign: "center" as const,
};

const logoContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logo = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "12px",
  padding: "12px 24px",
  margin: "12px",
  backdropFilter: "blur(10px)",
};

const logoText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: 0,
};

const content = {
  padding: "40px",
};

const h1 = {
  color: "#1a202c",
  fontSize: "32px",
  fontWeight: "bold",
  lineHeight: "1.2",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const text = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
};

const featuresSection = {
  backgroundColor: "#f7fafc",
  borderRadius: "12px",
  padding: "30px",
  margin: "30px 0",
};

const featureItem = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "20px",
  gap: "16px",
};

const featureIcon = {
  fontSize: "24px",
  width: "40px",
  height: "40px",
  backgroundColor: "#e6fffa",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const featureTitle = {
  color: "#2d3748",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 5px 0",
};

const featureDesc = {
  color: "#718096",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "30px 0",
};

const footer = {
  textAlign: "center" as const,
};

const footerText = {
  color: "#4a5568",
  fontSize: "16px",
  margin: "0 0 20px 0",
  fontWeight: "500",
};
