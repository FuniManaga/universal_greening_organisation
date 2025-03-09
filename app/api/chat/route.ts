import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage.content.toLowerCase();

    // Default response
    let response = "I'm here to help answer questions about UGO. What would you like to know?";

    // Tree planting specific responses
    if (userMessage.includes('tree') || userMessage.includes('plant') || userMessage.includes('planting') || 
        userMessage.includes('forest') || userMessage.includes('green')) {
      const treeResponses = [
        "UGO has successfully planted over 100,000 trees as part of our environmental initiatives, focusing on native species.",
        "Our tree planting programs span multiple countries, with a focus on areas most affected by deforestation.",
        "Each tree we plant is monitored and maintained to ensure its survival and maximum environmental impact.",
        "We work with local communities to ensure our tree planting initiatives create lasting positive change.",
        "Our forestry programs include urban greening and rural reforestation projects.",
        "We use advanced monitoring systems to track the growth and health of planted trees."
      ];
      response = treeResponses[Math.floor(Math.random() * treeResponses.length)];
    }
    // Year/History specific responses
    else if (userMessage.includes('year') || userMessage.includes('history') || userMessage.includes('time') || 
             userMessage.includes('long') || userMessage.includes('when') || userMessage.includes('started') ||
             userMessage.includes('old') || userMessage.includes('begin')) {
      const yearResponses = [
        "UGO has been making environmental impact for over 10 years, focusing on tree planting and education.",
        "In our 10+ year history, we've grown from a local initiative to a globally recognized environmental organization.",
        "Over the past decade, we've continuously expanded our programs and impact across multiple continents.",
        "Our 10-year journey has been marked by significant achievements in environmental conservation.",
        "Since our founding, we've reached millions of people through our environmental programs.",
        "Our decade-long commitment to environmental conservation has created lasting positive change."
      ];
      response = yearResponses[Math.floor(Math.random() * yearResponses.length)];
    }
    // Location/Area specific responses
    else if (userMessage.includes('where') || userMessage.includes('location') || userMessage.includes('country') || 
             userMessage.includes('place') || userMessage.includes('area') || userMessage.includes('region')) {
      const locationResponses = [
        "UGO operates globally, with key projects in Africa, Asia, and South America.",
        "Our environmental initiatives span multiple continents, focusing on areas most in need.",
        "We work in both urban and rural areas, adapting our programs to local needs.",
        "Our projects reach communities worldwide, from rainforests to urban centers.",
        "We have active programs in various ecological zones, including forests, grasslands, and coastal areas.",
        "UGO's work extends across different regions, each with tailored environmental solutions."
      ];
      response = locationResponses[Math.floor(Math.random() * locationResponses.length)];
    }
    // Impact/Achievement specific responses
    else if (userMessage.includes('impact') || userMessage.includes('achieve') || userMessage.includes('done') ||
             userMessage.includes('success') || userMessage.includes('accomplish')) {
      const impactResponses = [
        "Our impact includes planting over 100,000 trees and reaching more than 100K people globally.",
        "UGO has made significant positive changes in ecosystem health and community practices.",
        "We've successfully implemented environmental projects across multiple countries and continents.",
        "Our achievements include obtaining UNCCD accreditation in 2023 and establishing sustainable programs worldwide.",
        "Through our programs, we've helped restore degraded ecosystems and improve community livelihoods.",
        "Our impact extends beyond environmental conservation to community development and education."
      ];
      response = impactResponses[Math.floor(Math.random() * impactResponses.length)];
    }
    // Education/Training responses
    else if (userMessage.includes('education') || userMessage.includes('learn') || userMessage.includes('training') ||
             userMessage.includes('workshop') || userMessage.includes('course')) {
      const educationResponses = [
        "We offer comprehensive environmental education programs for all ages.",
        "Our training workshops cover various aspects of environmental conservation.",
        "UGO provides specialized environmental education for schools and communities.",
        "We conduct regular workshops on sustainable practices and environmental protection.",
        "Our educational programs combine theoretical knowledge with practical experience.",
        "We offer both online and in-person environmental education initiatives."
      ];
      response = educationResponses[Math.floor(Math.random() * educationResponses.length)];
    }
    // Contact specific responses
    else if (userMessage.includes('contact') || userMessage.includes('reach') || userMessage.includes('talk') ||
             userMessage.includes('connect') || userMessage.includes('message')) {
      const contactResponses = [
        "You can reach us through:\n• WhatsApp: https://wa.me/1234567890\n• Email: contact@ugo.org",
        "Connect with us via:\n• Email: contact@ugo.org\n• WhatsApp: https://wa.me/1234567890",
        "Get in touch through your preferred channel:\n• WhatsApp: https://wa.me/1234567890\n• Email: contact@ugo.org",
        "We're available on:\n• Email: contact@ugo.org\n• WhatsApp: https://wa.me/1234567890",
        "For immediate assistance:\n• WhatsApp: https://wa.me/1234567890\n• Email: contact@ugo.org",
        "Contact our team:\n• WhatsApp: https://wa.me/1234567890\n• Email: contact@ugo.org"
      ];
      response = contactResponses[Math.floor(Math.random() * contactResponses.length)];
    }
    // Volunteer/Participation responses
    else if (userMessage.includes('volunteer') || userMessage.includes('join') || userMessage.includes('help') ||
             userMessage.includes('participate') || userMessage.includes('support')) {
      const volunteerResponses = [
        "Join our environmental initiatives through various volunteer programs.",
        "We welcome volunteers for both local and international projects.",
        "Support our mission by participating in our community programs.",
        "There are many ways to get involved with UGO's environmental work.",
        "Volunteer opportunities are available in different areas of environmental conservation.",
        "Join our global community of environmental volunteers and make a difference."
      ];
      response = volunteerResponses[Math.floor(Math.random() * volunteerResponses.length)];
    }
    // Thank you responses
    else if (userMessage.includes('thank') || userMessage.includes('thanks') || userMessage.includes('thx') ||
             userMessage.includes('appreciate') || userMessage.includes('grateful')) {
      const thankResponses = [
        "You're welcome! Feel free to ask if you have any other questions about UGO's environmental initiatives.",
        "Thank you for your interest in UGO! Let me know if there's anything else you'd like to know.",
        "It's my pleasure to help! Don't hesitate to ask more about our environmental programs.",
        "You're welcome! Together we can make a positive environmental impact.",
        "Glad to help! Your interest in environmental conservation is appreciated.",
        "Thank you for caring about the environment! Let me know if you need more information."
      ];
      response = thankResponses[Math.floor(Math.random() * thankResponses.length)];
    }

    return NextResponse.json({
      role: 'assistant',
      content: response
    });
    
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
