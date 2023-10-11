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
  image: "headshot.png",
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
    description: `I work across the backend, data pipelines, and infrastructure for our NBA analytics platform, with a small amount of full-stack work mixed in as well.
      Our software is used daily by NBA teams, media, and fans to better understand the game of basketball.`,
    bullets: [
      "I lead the development and operations of our data pipelines that process large-scale (100M+ data points per game) NBA player tracking data through PostgreSQL and ClickHouse.",
      "This pipeline powers Cleaning the Glass's NBA player tracking web application, used by NBA teams to analyze their own players and opponents.",
      "Implement advanced analytics models to derive new and proprietary metrics only available on Cleaning the Glass.",
      "Manage cloud infrastructure for the company, and have accountability for our cloud budget to ensure we're operating as efficiently as possible.",
      "Work full stack on Cleaning the Glass's web application, built with Vue.js and Nuxt.js. As well as the backend Flask API.",
    ],
  },
  {
    company: "Tall Tree Software",
    title: "Founder",
    startDate: "Apr. 2022",
    endDate: "Present",
    link: "https://benweisel.com",
    description: `I provide consulting services for data engineering, software development, and leadership.
      Reach out using the links at the top of the page if you'd like to work together!`,
  },
  {
    company: "Uplight",
    title: "Director of Engineering",
    startDate: "Mar. 2020",
    endDate: "Apr. 2022",
    link: "https://www.linkedin.com/company/uplightenergy/",
    description:
      "I led the engineering deparment for Uplight's Orchestrated Energy (Demand Response) product line. In July of 2019, Tendril and Simple Energy merged to form Uplight.",
    bullets: [
      "Scaled the engineering staff to 30+ engineers and 5 teams located around the world.",
      "Achieved 100% YoY revenue growth in 2020 & 2021.",
      "Guided the release of new major product features, including deploying new machine learning models, overhauling data pipelines, and launching new customer-facing applications.",
      "Led the purchase and adoption of Databricks into Uplight's data platform, enabling greater developer and data science productivity, in addition to considerable cost savings.",
      "Worked closely with external vendors such as Google Nest, ecobee, and Emerson to integrate their smart thermostats into Uplight's platform.",
      "Led the efforts to integrate the engineering group from a recent acquisition into Uplight's engineering organization, and traveled weekly for months to be on-site with the new team.",
    ],
  },
  {
    company: "Tendril",
    title: "Software Engineering Manager",
    startDate: "Nov. 2017",
    endDate: "Mar. 2020",
    link: "https://www.linkedin.com/company/tendril/",
    description: `I managed two engineering teams and a total of 12 engineers, working on a variety of products at Tendril.`,
    bullets: [
      "Led an effort to dramatically improve how customers were onboarded to Tendril's software platform, saving the company over $500k annually.",
      "Managed the launch of a new product used by utility company personnel to manage their energy efficiency programs.",
    ],
  },
  {
    company: "",
    title: "Lead Software Engineer",
    startDate: "Jan. 2016",
    endDate: "Nov. 2017",
    link: "https://www.linkedin.com/company/tendril/",
    description:
      "I was the lead developer on a team of 5 engineers where we launched two new products for Tendril.",
    bullets: [
      "Launched an energy real-estate API that allowed customers to get energy scores for any address in the United States and Australia.",
      "Built a new home energy audit web application that leveraged Tendril's propriety energy simulation models to generate a custom energy report for each user.",
    ],
  },
  {
    company: "Publicis Sapient",
    title: "Lead Software Engineer",
    startDate: "Nov. 2014",
    endDate: "Jan. 2016",
    link: "https://www.linkedin.com/company/publicissapient/",
    description:
      "Led a team of 5 engineers to relaunch Samsung.com on a new CMS platform.",
    bullets: [
      "Worked extensively with Samsung's internal development team and regularly traveled to their offices to ensure a smooth project and transition.",
      "This architecture was later used as the basis for Samsung's new global CMS platform.",
    ],
  },
  {
    company: "",
    title: "Senior Software Engineer",
    startDate: "Oct. 2012",
    endDate: "Nov. 2014",
    link: "",
    description:
      "I was a senior backend developer focused on building a variety of projects for Samsung, notably the Samsung+ app.",
    bullets: [
      "Helped develop a custom content personalization engine that drove a majority of the content displayed in the Samsung+ app.",
      "Built out a location-based rewards platform using iBeacons and geofencing to drive in-event engagement for Samsung at all AEG sports and concert venues in the US.",
    ],
  },
  {
    company: "",
    title: "Software Engineer",
    startDate: "Jun. 2010",
    endDate: "Oct. 2012",
    link: "",
    description:
      "Worked as a full-stack Java developer on large-scale eCommerce projects for a variety of clients, most notably Scholastic Books.",
    bullets: [
      "Developed major site features, including product search, the coupon engine, and the checkout flow.",
    ],
  },
]);

const projects = ref([
  {
    name: "NFL Margins",
    description: "Host free NFL Margin pools with your friends.",
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
      "Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, CloudFormation, GitHub Actions, Serverless Architectures",
  },
  {
    name: "Other",
    description:
      "Product Development, System Design, Data Modeling, Data Pipeline Architecture, Data Warehousing, Data Science & Analytics, OAuth",
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
