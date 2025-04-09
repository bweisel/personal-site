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
  email: "bweisel@gmail.com",
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
    description:
      "Our NBA analytics platform helps teams, media, and fans better understand basketball. As the second full-time hire, I do a bit of everything, but mostly handle data pipelines, backend development, and cloud infrastructure.",
    bullets: [
      "Architect, develop, and operate all data pipelines for the company; processing high-resolution NBA player tracking data and turning raw data into advanced analytics for team strategy",
      "Create innovative analytics models and metrics that set our company apart in the industry.",
      "Manage DevOps and cloud infrastructure for the company, balancing cost, performance, and reliability.",
      "Work across the stack using Vue.js, Nuxt.js, and Flask, among other tools.",
    ],
  },
  {
    company: "Uplight",
    title: "Director of Engineering",
    startDate: "Mar. 2020",
    endDate: "Apr. 2022",
    link: "https://www.linkedin.com/company/uplightenergy/",
    companyLogo: "/company_logos/uplight.png",
    description:
      "Led Uplight's Orchestrated Energy product through a period of rapid growth, expanding our team globally and boosting revenue as the company formed through mergers.",
    bullets: [
      "Grew engineering team from 5 to 30+ members across 5 global teams, fostering a high-performance culture.",
      "Achieved 100% year-over-year revenue growth in both 2020 and 2021 by aligning product development with key business goals.",
      "Launched major features including new AI models, revamped data systems, and user-friendly apps to meet customer needs.",
      "Introduced Databricks to our data stack, boosting productivity and cutting costs.",
      "Partnered with smart home leaders like Google Nest and ecobee to expand our product ecosystem.",
      "Smoothly integrated engineering teams from acquired companies, involving extensive travel and hands-on leadership.",
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
      "Managed product development and data engineering teams, setting the stage for Tendril's evolution into Uplight.",
    bullets: [
      "Streamlined customer onboarding, saving over $500k annually and boosting client satisfaction.",
      "Launched a utility program management tool that simplified energy efficiency initiatives and increased client engagement.",
    ],
  },
  {
    company: "",
    title: "Lead Software Engineer",
    startDate: "Jan. 2016",
    endDate: "Nov. 2017",
    link: "https://www.linkedin.com/company/tendril/",
    description:
      "Led a 5-person engineering team in creating innovative energy products, helping Tendril expand its market reach.",
    bullets: [
      "Developed an API providing energy scores for properties across the US and Australia, used by real estate companies.",
      "Built a web app for home energy audits, using our unique energy models to give homeowners personalized reports.",
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
      "Spearheaded the relaunch of Samsung.com on a new content management system, setting up Samsung's global digital infrastructure.",
    bullets: [
      "Worked closely with Samsung's in-house team, often traveling to ensure smooth project coordination and handover.",
      "The architecture we developed became the foundation for Samsung's new global CMS, shaping their worldwide digital presence.",
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
      "Focused on creating cutting-edge digital solutions for Samsung, including the key Samsung+ app.",
    bullets: [
      "Created a custom content personalization system powering most of the Samsung+ app's content, enhancing user engagement.",
      "Built a location-based rewards platform using iBeacons and geofencing, boosting Samsung's presence at AEG sports and concert venues across the US.",
    ],
  },
  {
    company: "",
    title: "Software Engineer",
    startDate: "Jun. 2010",
    endDate: "Oct. 2012",
    link: "https://www.linkedin.com/company/rosetta/",
    description:
      "Worked as a full-stack Java developer on major e-commerce projects, notably for Scholastic Books.",
    bullets: [
      "Developed core features for Scholastic's online store, including product search, coupon system, and checkout process, improving the overall shopping experience.",
    ],
  },
]);

const projects = ref([
  {
    name: "Data Toolkit",
    logo: "/company_logos/datatoolkit.png",
    description: `This is a simple set of tools I made for data engineers to help with mundane tasks like data cleaning, list manipulation, etc. 
    Built with Vue/Nuxt and deployed on Netlify.`,
    link: "https://www.datatoolkit.io",
  },
  {
    name: "NFL Margins",
    logo: "/company_logos/nflmargins.png",
    description: `This was a web app I built for hosting NFL Margin Pools, similar to survivor pools. Players gain or lose points based on the margin of victory of the team they pick each week. 
    Built with Flask, Postgres, Bootstrap, and deployed on Heroku. Shut down in after the 2023-24 season.`,
    link: "https://www.nflmargins.com",
    startDate: "2016",
    endDate: "2024",
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
