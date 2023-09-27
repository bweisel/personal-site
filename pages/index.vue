<template>
  <div class="relative">
    <!-- Page Wrapper-->
    <div class="p-8 relative max-w-screen-xl xs:p-24">
      <Header :profile="profile"></Header>
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
  image: "/headshot.png",
  subLine:
    "Principal software engineer and leader with an expertise in developing advanced data-driven applications of all shapes and sizes.",
  twitter: "https://twitter.com/bweisel",
  github: "https://github.com/bweisel",
  linkedin: "https://www.linkedin.com/in/benweisel/",
});

const about = ref(
  "Currently building cutting-edge NBA Basketball Analytics at Cleaning the Glass. Based in Denver, CO."
);

const skills = ref([
  {
    name: "Languages",
    description: "Python, SQL, JavaScript, TypeScript, Java, HTML, CSS",
  },
  {
    name: "Frameworks",
    description:
      "Flask, FastAPI, SQLAlchemy, Prefect, DBT, Airflow, TailwindCSS, Vue.js, Nuxt.js",
  },
  {
    name: "Databases & Storage",
    description:
      "PostgreSQL, DynamoDB, Redis, ClickHouse, Redshift, BigQuery, Databricks, S3, GCS",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, CloudFormation, GitHub Actions",
  },
  {
    name: "Other",
    description:
      "Product Development, System Design, Data Modeling, Data Pipeline Architecture, Data Warehousing, Data Science & Analytics",
  },
]);

const experiences = ref([
  {
    company: "Cleaning the Glass",
    title: "Principal Software Engineer",
    startDate: "April 2022",
    endDate: "Present",
    link: "https://www.cleaningtheglass.com",
    description:
      "I lead the development of Cleaning the Glass's NBA Basketball Analytics platform.",
  },
  {
    company: "Tall Tree Software",
    title: "Founder",
    startDate: "April 2022",
    endDate: "Present",
    link: "https://benweisel.com",
    description:
      "I provide consulting services for data engineering, software development, and leadership.",
  },
  {
    company: "Uplight",
    title: "Director of Engineering",
    startDate: "March 2020",
    endDate: "April 2022",
    link: "https://www.linkedin.com/company/uplightenergy/",
    description:
      "I led the engineering deparment for Uplight's Demand Side Management (DSM) business unit.",
  },
  {
    company: "Tendril",
    title: "Engineering Manager",
    startDate: "January 2018",
    endDate: "March 2020",
    link: "https://www.linkedin.com/company/tendril/",
    description:
      "I managed two engineering teams: one responsible for Tendril's main data pipelines, and the other a full-stack team responsible for building out Tendril's new customer-facing products.",
  },
  {
    company: "Tendril",
    title: "Lead Software Engineer",
    startDate: "January 2016",
    endDate: "Nov 2018",
    link: "https://www.linkedin.com/company/tendril/",
    description:
      "I led the engineering efforts to launch multiple new products for Tendril, including Online Energy Assessments and an Energy Real Estate API.",
  },
  {
    company: "Publicis Sapient",
    title: "Lead Software Engineer",
    startDate: "September 2012",
    endDate: "January 2016",
    link: "https://www.linkedin.com/company/publicissapient/",
    description:
      "I was the lead engineer on a variety of projects for Samsung, including relaunching Samsung.com and building out the Samsung+ app.",
  },
  {
    company: "Rosetta Marketing Group",
    title: "Software Engineer",
    startDate: "June 2010",
    endDate: "September 2012",
    link: "https://www.linkedin.com/company/rosetta/",
    description:
      "I worked on large-scale eCommerce projects for a variety of clients, most notably Scholastic Books.",
  },
]);

const projects = ref([
  {
    name: "NFL Margins",
    description: "Host free NFL Margin pools with your friends.",
    link: "https://www.nflmargins.com",
  },
]);
</script>
