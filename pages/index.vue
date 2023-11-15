<template>
  <div class="relative">
    <!-- Page Wrapper-->
    <div class="p-8 relative max-w-screen-xl xs:p-24">
      <!-- Header-->
      <Header :profile="profile" />

      <!-- About Me-->
      <Section :title="'About Me'">
        <About :about="about" />
      </Section>

      <!-- Experience -->
      <Section :title="'Experience'">
        <ExperienceItem
          v-for="experience in experiences"
          :key="experience.name"
          :experience="experience"
        />
      </Section>

      <!-- Projects -->
      <Section :title="'Projects'">
        <ProjectItem
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </Section>

      <!-- Skills -->
      <Section :title="'Skills'">
        <SkillItem v-for="skill in skills" :key="skill.name" :skill="skill" />
      </Section>
    </div>
  </div>
</template>

<script setup>
const profile = ref({
  name: "Ben Weisel",
  email: "ben@talltreesoftware.io",
  title: "Software Engineer",
  image: "headshot.png", // Put any image in the public dir to reference here
  subLine:
    "Software engineer and leader with an expertise in developing advanced data-driven applications of all shapes and sizes.",
  twitter: "https://twitter.com/bweisel",
  github: "https://github.com/bweisel",
  linkedin: "https://www.linkedin.com/in/benweisel/",
});

const about = ref(
  "Currently building cutting-edge NBA Basketball analytics at Cleaning the Glass. Based in Denver, CO."
);

const experiences = ref([
  {
    company: "Cleaning the Glass",
    title: "Principal Software Engineer",
    startDate: "Apr. 2022",
    endDate: "Present",
    link: "https://www.cleaningtheglass.com",
    companyLogo: "/company_logos/ctg.png",
    description: `At Cleaning the Glass, I develop significant components of our NBA analytics platform, leveraging my expertise in backend engineering, data pipelines, and cloud infrastructure management.`,
    bullets: [
      "Lead the development and maintenance of data pipelines, processing over 100 million data points per game, and transforming raw data into actionable insights for team strategy and performance analysis.",
      "Played a critical role in designing and launching an advanced NBA player tracking web application, now a key tool for several NBA teams in scouting and game analysis.",
      "Develop innovative NBA analytics models, creating proprietary metrics that distinguish Cleaning the Glass in the industry.",
      "Responsible for the company's cloud infrastructure, optimizing for cost-efficiency and performance, and ensuring high availability and scalability during peak demand periods.",
      "Contribute to full-stack development using Vue.js, Nuxt.js, and a Flask-based API, enhancing user experience and functionality for a diverse client base, including NBA teams, media, and enthusiasts.",
    ],
  },
  {
    company: "Tall Tree Software",
    title: "Founder",
    startDate: "Apr. 2022",
    endDate: "Present",
    link: "https://benweisel.com",
    companyLogo: "/company_logos/tall_tree.png",
    description: `I provide consulting services for data engineering, software development, and leadership.
      Reach out using the links at the top of the page if you'd like to work together!`,
  },
  {
    company: "Uplight",
    title: "Director of Engineering",
    startDate: "Mar. 2020",
    endDate: "Apr. 2022",
    link: "https://www.linkedin.com/company/uplightenergy/",
    companyLogo: "/company_logos/uplight.png",
    description:
      "I steered Uplight's Orchestrated Energy product line through a transformative period, scaling the engineering team globally and driving significant revenue growth amidst the formation of Uplight through mergers.",
    bullets: [
      "Scaled the engineering division to over 30 engineers across 5 international teams, fostering a high-performing global unit.",
      "Drove 100% year-over-year revenue growth in 2020 & 2021, aligning product development with strategic business objectives.",
      "Orchestrated the release of major product features, including deploying new machine learning models, revamping data pipelines, and launching customer-centric applications.",
      "Pioneered the integration of Databricks into Uplight's data platform, enhancing developer and data science productivity while achieving significant cost savings.",
      "Collaborated with key external vendors like Google Nest, ecobee, and Emerson for smart thermostat integrations, expanding Uplight's ecosystem.",
      "Led integration efforts for engineering teams from newly acquired companies, involving extensive travel and hands-on leadership to ensure seamless transitions.",
    ],
  },
  {
    company: "Tendril",
    title: "Software Engineering Manager",
    startDate: "Nov. 2017",
    endDate: "Mar. 2020",
    link: "https://www.linkedin.com/company/tendril/",
    companyLogo: "/company_logos/tendril.png",
    description:
      "Managed two engineering teams at Tendril, focusing on product development and data engineering, which helped lay the groundwork for Tendril's evolution into Uplight.",
    bullets: [
      "Championed a significant improvement in customer onboarding processes, saving the company over $500k USD annually and enhancing client satisfaction.",
      "Oversaw the launch of a utility program management product, streamlining energy efficiency programs and bolstering client engagement.",
    ],
  },
  {
    company: "",
    title: "Lead Software Engineer",
    startDate: "Jan. 2016",
    endDate: "Nov. 2017",
    link: "https://www.linkedin.com/company/tendril/",
    description:
      "Led a team of 5 engineers in the development and launch of innovative energy-related products, contributing significantly to Tendril's market expansion.",
    bullets: [
      "Developed an energy real-estate API, providing comprehensive energy scores across the United States and Australia.",
      "Created a home energy audit web application, utilizing Tendril's unique energy simulation models to deliver personalized energy reports.",
    ],
  },
  {
    company: "Publicis Sapient",
    title: "Lead Software Engineer",
    startDate: "Nov. 2014",
    endDate: "Jan. 2016",
    link: "https://www.linkedin.com/company/publicissapient/",
    companyLogo: "/company_logos/publicis.png",
    description:
      "Led a team of 5 engineers in the strategic relaunch of Samsung.com on a new CMS platform, laying the groundwork for Samsung's global digital infrastructure.",
    bullets: [
      "Collaborated closely with Samsung's internal development team, involving regular travel for seamless project coordination and transition.",
      "The architecture developed became the foundation for Samsung's new global CMS platform, influencing the company's digital presence worldwide.",
    ],
  },
  {
    company: "Rosetta",
    title: "Senior Software Engineer",
    startDate: "Oct. 2012",
    endDate: "Nov. 2014",
    link: "https://www.linkedin.com/company/rosetta/",
    companyLogo: "/company_logos/rosetta.png",
    description:
      "As a senior backend developer at Rosetta, I focused on innovating digital solutions for Samsung, including the pivotal Samsung+ app.",
    bullets: [
      "Developed a bespoke content personalization engine that powered the majority of Samsung+ app content, enhancing user experience and engagement.",
      "Engineered a location-based rewards platform using iBeacons and geofencing, driving in-event engagement for Samsung at AEG sports and concert venues nationwide.",
    ],
  },
  {
    company: "",
    title: "Software Engineer",
    startDate: "Jun. 2010",
    endDate: "Oct. 2012",
    link: "https://www.linkedin.com/company/rosetta/",
    description:
      "Full-stack Java developer at Rosetta, focused on large-scale eCommerce projects, notably for Scholastic Books, enhancing online retail experiences.",
    bullets: [
      "Developed key site features for Scholastic's eCommerce platform, including product search, the coupon engine, and the checkout flow.",
    ],
  },
]);

const projects = ref([
  {
    name: "NFL Margins",
    logo: "/company_logos/nflmargins.png",
    description: `A web application for hosting NFL Margin Pools, similar to survivor pools. Players gain or lose points based on the margin of victory of the team they pick each week. 
    Built with Flask, Postgres, Bootstrap, and deployed on Heroku.`,
    link: "https://www.nflmargins.com",
  },
]);

const skills = ref([
  {
    name: "Languages",
    description: "Python, SQL, JavaScript, TypeScript, Java, HTML, CSS",
  },
  {
    name: "Frameworks & Libraries",
    description:
      "Flask, FastAPI, SQLAlchemy, Prefect, DBT, Spark, Airflow, TailwindCSS, Vue.js, Nuxt.js",
  },
  {
    name: "Databases & Storage",
    description:
      "PostgreSQL, DynamoDB, Redis, ClickHouse, Redshift, BigQuery, Databricks, S3, GCS",
  },
  {
    name: "Cloud & DevOps",
    description:
      "AWS, GCP, Docker, CloudFormation, GitHub Actions, Serverless Architectures",
  },
  {
    name: "Other",
    description:
      "Product Development, System Design, Data Modeling, Data Pipeline Architecture, Data Warehousing, Data Science & Analytics, SSO, OAuth",
  },
]);

useSeoMeta({
  title: () => `${profile.value.name} - ${profile.value.title}`,
  ogTitle: () => `${profile.value.name} - ${profile.value.title}`,
  description: () => `${profile.value.subLine}`,
  ogDescription: () => `${profile.value.subLine}`,
  ogImage: () => `https://benweisel.com${profile.value.image}`,
  twitterCard: "summary",
});
</script>
