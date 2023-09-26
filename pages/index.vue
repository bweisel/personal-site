<template>
  <div class="relative">
    <!-- Page Wrapper-->
    <div class="p-8 relative max-w-screen-xl xs:p-24">
      <!-- About Me-->
      <div class="block pt-12 md:flex">
        <div class="pb-6 md:w-full md:max-w-150 md:p-0">
          <h2
            class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase"
          >
            About Me
          </h2>
        </div>
        <div
          class="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20"
        >
          <div class="mb-6">
            <p>{{ about }}</p>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <div class="block pt-12 md:flex">
        <div class="pb-6 md:w-full md:max-w-150 md:p-0">
          <h2
            class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase"
          >
            Experience
          </h2>
        </div>
        <div
          class="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20"
        >
          <ExperienceItem
            v-for="experience in experiences"
            :key="experience.name"
            :experience="experience"
          />
        </div>
      </div>

      <!-- Skills -->
      <div class="block pt-12 md:flex">
        <div class="pb-6 md:w-full md:max-w-150 md:p-0">
          <h2
            class="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase"
          >
            Skills
          </h2>
        </div>
        <div
          class="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20"
        >
          <SkillItem v-for="skill in skills" :key="skill.name" :skill="skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const about = ref(
  "Currently building advanced NBA Analytics for Cleaning the Glass. Based in Denver, CO."
);

const skills = ref([
  {
    name: "Languages",
    description: "Python, SQL, JavaScript, TypeScript, Java, HTML, CSS",
  },
  {
    name: "Frameworks",
    description:
      "Flask, FastAPI, SQLAlchemy, Prefect, DBT, TailwindCSS, Vue.js, Nuxt.js",
  },
  {
    name: "Databases & Storage",
    description:
      "PostgreSQL, DynamoDB, Redis, ClickHouse, Redshift, BigQuery, Databricks, S3, GCS",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, Terraform, CI / CD",
  },
  {
    name: "Other",
    description:
      "Data Pipeline (ETL/ELT) Development, Microservices, API Design, Data Modeling, Data Warehousing, Data Science & Analytics",
  },
]);

const experiences = ref([
  {
    name: "Cleaning the Glass",
    description: "Software Architect; April 2022 - Present",
    link: "https://www.cleaningtheglass.com",
  },
  {
    name: "Tall Tree Software",
    description: "Founder; April 2022 - Present",
    link: "https://www.benweisel.com",
  },
  {
    name: "Uplight",
    description: "Director of Engineering; March 2020 - April 2022",
    link: "https://www.linkedin.com/company/uplightenergy/",
  },
  {
    name: "Tendril",
    description: "Engineering Manager; January 2016 - March 2020",
    link: "https://www.linkedin.com/company/tendril/",
  },
  {
    name: "Publicis Sapient",
    description: "Lead Software Engineer; September 2012 - January 2016",
    link: "https://www.linkedin.com/company/publicissapient/",
  },
  {
    name: "Rosetta Marketing Group",
    description: "Software Engineer; June 2010 - September 2012",
    link: "https://www.linkedin.com/company/rosetta/",
  },
]);
</script>
