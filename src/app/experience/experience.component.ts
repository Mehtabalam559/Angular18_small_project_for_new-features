import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  heading = "Experienced Full Stack Developer Crafting Innovative Solutions for the Digital Age.."
  experiences = [
    {
      company: 'Persistent System',
      position: 'Lead Software Engineer',
      duration: 'Jul 2025 - Pesent',
      details: 'As a seasoned web application developer, I excel in creating dynamic and responsive web applications utilizing the Django framework, along with HTML, CSS, and JavaScript. My expertise includes developing and implementing Ajax functions to enable dynamic and interactive web experiences.I have architected and designed a sophisticated SharePoint Syncing application, leveraging AWS components such as S3 for scalable storage, AWS Lambda for serverless computing, and Autoscaling for dynamic resource management. My role also involved managing the migration of applications from Azure to AWS, ensuring seamless transitions with optimized performance and minimal downtime.In addition to cloud-based application development, I have implemented advanced data warehousing solutions using Snowflake, designing and managing various schemas to support the Eranova project. This project utilizes Large Language Models (LLMs) for efficient and accurate structured and unstructured data searches. My contributions have significantly enhanced data retrieval capabilities and overall system performance, showcasing my ability to handle complex, large-scale technical projects.'
    },
    {
      company: 'Intellect Design Arena',
      position: 'Associate Consultant',
      duration: 'Nov 2023 - Jul 2025',
      details: 'Impact driving force behind the development of a cutting-edge JavaScript framework, serving as a robust wrapper over jQuery and AJAX to streamline UI configuration widgets. Managed critical operational tasks and addressed on-demand support requests from tenant applications, safeguarding against any mission-critical application outages stemming from the workflow engine. Worked collaboratively with Business Analysts and Quality Assurance professionals in analyzing requirements from existing documentation, including liaising with 6 architects to design and implement tailored technical cloud solutions. Crafted J2EE backend code and executed comprehensive unit tests, ensuring alignment with specified acceptance criteria and compliance requirements.'
    },
    {
      company: 'Comunus Technologies',
      position: 'Software Engineer',
      duration: 'Jul 2023 - Nov 2023',
      details: 'Catalyzed positive changes by leveraging AWS CLI to establish scalability for application servers, administering the AWS DNS system through Route53, and efficiently managing users and groups using Amazon Identity and Access Management (IAM). Integrated social media plugins seamlessly into the website using Angular, dynamically updating the homepage with daily news feeds through newsfeed APIs. Engineered responsive chatbot APIs complete with authentication and authorization mechanisms. Instituted and executed automated unit testing frameworks, resulting in a substantial monthly time savings of 8-man hours.'
    },
    {
      company: 'Root Tronics Technologies',
      position: 'Junior software Engineer',
      duration: 'Apr 2021 - jun 2023',
      details: 'Recruited to design, develop, and rigorously test HTML5, CSS, and jQuery components that adhere to web browser accessibility standards, while executing the MEAN stack architecture (AngularJS, Express, Node.js, MongoDB) for cutting-edge web applications. Implemented robust Transaction History, Payment details, and Saved-cards APIs using the Spring MVC Framework and J2EE, ensuring seamless functionality. Utilized JavaScript to validate user inputs, dynamically manipulate HTML elements, and create reusable external JavaScript modules, enhancing functionality across multiple web pages.'
    }
  ];

  showContent: boolean[] = Array.from({ length: this.experiences.length }, () => true);

  toggleContent(index: number):void {
    this.showContent[index] = !this.showContent[index];
  }

}
