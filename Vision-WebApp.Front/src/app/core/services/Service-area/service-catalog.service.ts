import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';

interface Service {
  title: string;
  name: string;
  description: string;
  HowWeCanHelp: string;
  icon: string;
  shape: string;
  image: string;
  defaultImage: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ServiceCatalogService {
  private services: Service[] = [
    {
      title: 'Digital Transformation',
      name: 'Digital-Transformation',
       description: 'Drive innovation and efficiency by transitioning to digital processes and solutions. We focus on optimizing workflows, reducing redundancies, and leveraging the latest technologies to enhance your organization\'s overall productivity and agility. Our tailored approach ensures a smooth and effective transformation aligned with your specific business goals and industry demands.',
      HowWeCanHelp: 'Our team will guide you through each phase of digital transformation, from evaluating your current processes to implementing and optimizing new digital solutions. We help identify the best technologies, ensure staff training, and provide continuous support to ensure your organization achieves sustained benefits from its transformation journey.',
      icon: 'assets/images/icon/Digital-Transformation2-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/digital-transformation.webp',
      defaultImage: 'assets/images/service/digital-transformation-blur.webp',
      benefits: [
        'Enhanced operational efficiency',
        'Improved customer experience',
        'Data-driven decision making',
        'Scalability and growth'
      ],
      faq: [
        {
          question: 'What is digital transformation?',
          answer: 'Digital transformation involves integrating digital technology into all areas of a business to improve operations and deliver value to customers.'
        },
        {
          question: 'How long does digital transformation take?',
          answer: 'The timeline varies depending on the scope and objectives but typically ranges from several months to a few years.'
        }
      ]
    },
    {
      title: 'Digital Solutions',
      name: 'Digital-Solutions',
      description: 'Customized digital tools to streamline your business processes, improve productivity, and enhance operational efficiency. Our solutions are built to adapt to the specific requirements of your business, ensuring that they integrate seamlessly with your existing workflows and systems. By automating repetitive tasks and providing real-time data insights, we empower your team to focus on what matters most.',
      HowWeCanHelp: 'We’ll work with you to analyze your operational challenges and develop digital tools that address those needs. Whether it’s a custom software application, workflow automation, or a productivity suite, we provide hands-on support from concept to deployment, including training and ongoing maintenance.',
      icon: 'assets/images/icon/Digital-Solutions-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/digital-solutions.webp',
      defaultImage: 'assets/images/service/digital-solutions-blur.webp',
      benefits: [
        'Tailored software solutions',
        'Process automation',
        'Cost reduction',
        'Increased productivity'
      ],
      faq: [
        {
          question: 'What types of digital solutions do you offer?',
          answer: 'We offer custom software development, CRM systems, and automation tools tailored to your business needs.'
        },
        {
          question: 'How can digital solutions benefit my business?',
          answer: 'Digital solutions help automate routine tasks, reduce errors, and improve efficiency across operations.'
        }
      ]
    },
    {
      title: 'Search Engine Optimization',
      name: 'Search-Engine-Optimization',
      description: 'Boost your online presence and rank higher in search results to reach a larger audience and increase engagement. Our SEO strategies are data-driven and tailored to align with the latest search engine algorithms, ensuring sustained improvement in organic visibility. With a focus on both on-page and off-page SEO tactics, we help your brand gain prominence in the digital space.',
      HowWeCanHelp: 'Our SEO experts will perform a thorough analysis of your website and online presence, identifying areas for improvement and opportunities to enhance visibility. We will implement effective keyword strategies, optimize content, and build quality backlinks, all aimed at driving traffic and boosting your search engine rankings.',
      icon: 'assets/images/icon/seo-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/Search-Engine-Optimization.webp',
      defaultImage: 'assets/images/service/Search-Engine-Optimization-blur.webp',
      benefits: [
        'Increased website traffic',
        'Better brand visibility',
        'Improved search engine ranking',
        'Higher conversion rates'
      ],
      faq: [
        {
          question: 'What is SEO?',
          answer: 'Search Engine Optimization (SEO) is the process of improving the quality and quantity of website traffic from search engines.'
        },
        {
          question: 'How long does it take to see SEO results?',
          answer: 'SEO is a long-term strategy; initial results can be seen within 3-6 months, with more significant outcomes after 6-12 months.'
        }
      ]
    },
    {
      title: 'Digital Consultant',
      name: 'Digital-Consultant',

      description: 'Expert guidance to help navigate digital challenges and leverage technology for growth. Our consulting services are designed to help you make informed decisions and implement strategies that maximize your technology investments. From strategic planning to project management, we offer end-to-end support to empower your business with the right tools and insights.',
      HowWeCanHelp: 'We provide personalized consultation services to help your organization set clear digital goals and develop a roadmap for achieving them. Our team is committed to helping you stay ahead of technology trends, improve operational efficiency, and create a robust digital foundation for future growth.'
    ,
      icon: 'assets/images/icon/Digital-Consultant-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/Digital-Consultant.webp',
      defaultImage: 'assets/images/service/Digital-Consultant-blur.webp',
      benefits: [
        'Expert advice',
        'Strategic technology planning',
        'Optimized digital processes',
        'Enhanced business agility'
      ],
      faq: [
        {
          question: 'What does a digital consultant do?',
          answer: 'A digital consultant helps businesses develop and implement strategies to leverage technology effectively.'
        },
        {
          question: 'Do you provide ongoing consulting?',
          answer: 'Yes, we offer both one-time consultations and ongoing support for digital strategy implementation.'
        }
      ]
    },
    {
      title: 'Artificial Intelligence',
      name: 'Artificial-Intelligence',

      description: 'Innovative AI solutions designed to automate tasks, analyze data, and create smarter systems that improve your business outcomes. We provide comprehensive AI services, including machine learning, data analytics, and natural language processing, to unlock actionable insights and create efficiencies across various business processes.',
      HowWeCanHelp: 'We’ll guide you through the process of identifying where AI can have the greatest impact on your business, from enhancing customer experiences to optimizing back-office operations. Our team offers full-cycle AI development and integration, ensuring that you can leverage the power of AI to stay competitive and innovative.'
    ,

     icon: 'assets/images/icon/ai-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/Artificial-Intelligence.webp',
      defaultImage: 'assets/images/service/Artificial-Intelligence-blur.webp',
      benefits: [
        'Automation of repetitive tasks',
        'Data analysis and insights',
        'Enhanced customer experience',
        'Predictive analytics'
      ],
      faq: [
        {
          question: 'What AI solutions do you offer?',
          answer: 'We provide AI solutions such as machine learning models, natural language processing, and predictive analytics.'
        },
        {
          question: 'Is AI suitable for small businesses?',
          answer: 'Yes, AI solutions can be tailored to fit businesses of all sizes and can offer valuable efficiency gains.'
        }
      ]
    },
    {
      title: 'Management Consulting',
      name: 'Management-Consulting',

      description: 'Strategic guidance focused on improving management practices, optimizing resource allocation, and achieving business objectives. Our management consulting services provide expert advice on operational efficiency, financial planning, and organizational alignment, all aimed at helping your business reach its full potential.',
      HowWeCanHelp: 'Our consultants will conduct an in-depth assessment of your management and operational processes, identify areas for improvement, and provide actionable strategies for growth. We work closely with your leadership team to implement best practices that drive sustainable success and long-term profitability.',
      icon: 'assets/images/icon/Management-Consulting-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/Management-Consulting.webp',
      defaultImage: 'assets/images/service/Management-Consulting-blur.webp',
      benefits: [
        'Improved operational efficiency',
        'Enhanced leadership strategies',
        'Data-driven decision making',
        'Increased profitability'
      ],
      faq: [
        {
          question: 'What is management consulting?',
          answer: 'Management consulting involves advising businesses on best practices and strategies to improve performance and achieve goals.'
        },
        {
          question: 'How can management consulting benefit my business?',
          answer: 'Management consulting helps streamline operations, improve decision-making, and align business goals with actionable strategies.'
        }
      ]
    },
     {
      title: 'Developing Creative Ideas',
      name: 'Developing-Creative-Ideas',
      description: 'We bring innovation and creativity to the forefront, transforming abstract ideas into tangible solutions. Our team collaborates closely with you to explore fresh perspectives, push boundaries, and unlock new opportunities that align with your business goals. By fostering a creative approach, we help you stay competitive and differentiate your brand in the market.',
      icon: 'assets/images/icon/Developing-Creative-Ideas-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
       image: 'assets/images/service/creative-ideas.webp',
      defaultImage: 'assets/images/service/creative-ideas-blur.webp',
      benefits: [
        'Innovative problem-solving',
        'Enhanced brand identity',
        'Market differentiation',
        'Increased customer engagement'
      ],
       HowWeCanHelp: 'Our experts work alongside you to generate and refine creative concepts that align with your brand vision. We conduct market research, brainstorm innovative solutions, and develop prototypes, ensuring each idea has a clear path from concept to execution. Our goal is to empower you with creative solutions that make a lasting impact.',
      faq: [
        {
          question: 'How do you develop creative ideas for businesses?',
          answer: 'We combine industry research, brainstorming sessions, and collaborative workshops to generate creative ideas that align with your brand and target audience.'
        },
        {
          question: 'Can creativity really make a difference in business success?',
          answer: 'Absolutely. Creative ideas differentiate your brand, capture attention, and foster unique customer experiences, which can lead to increased engagement and loyalty.'
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      name: 'Emerging-Technologies',
      description: 'Stay ahead of the curve by adopting the latest technologies that drive business innovation. We help you navigate and implement emerging technologies like blockchain, IoT, augmented reality, and more, giving your business a competitive edge in an increasingly tech-driven world. Our solutions are tailored to provide strategic advantages and adapt to future advancements.',
      icon: 'assets/images/icon/Emerging-Technologies-icon.png',
      shape: 'assets/images/shape/service-item-shape.png',
      image: 'assets/images/service/Emerging-Technologies.webp',
      defaultImage: 'assets/images/service/Emerging-Technologies-blur.webp',
      benefits: [
        'Future-proof technology solutions',
        'Enhanced operational capabilities',
        'Improved customer experiences',
        'Strategic competitive advantage'
      ],
      HowWeCanHelp: 'We assess the potential of various emerging technologies to enhance your business operations and strategy. Our team provides guidance on integration, scalability, and long-term impact, ensuring that new technologies align with your goals and resources. By implementing the latest advancements, we help you position your business for sustained growth and innovation.',
       faq: [
        {
          question: 'What are emerging technologies?',
          answer: 'Emerging technologies are new, innovative tech advancements, such as blockchain, artificial intelligence, and IoT, that have the potential to impact industries significantly.'
        },
        {
          question: 'How do you determine which technologies suit my business?',
          answer: 'We analyze your business needs, goals, and industry trends to identify which emerging technologies can offer the most benefit and create a competitive advantage.'
        }
      ]
    }
  ];

  getServiceByName(name: string): Observable<Service> {
    return of(this.services.find(service => service.name === name)).pipe(
      map(service => {
        if (!service) {
          throw new Error(`Service with name '${name}' not found.`);
        }
        return service;
      }),
      catchError(error => throwError(() => `Error: ${error.message}`))
    );
  }

  getAllServices(): Observable<Service[]> {
    return of(this.services);
  }
}
