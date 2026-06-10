export const resume = {
  name: "Frank J Montel IV",
  location: "Lansing, MI (willing to relocate)",
  phone: "231-881-3296",
  email: "frank.montel@gmail.com",
  linkedin: "linkedin.com/in/frankmontel",
  linkedinUrl: "https://linkedin.com/in/frankmontel",
  tagline: "Technology & Analytics Leader | Platform Development & Configuration | Intelligence at Scale",
  summary:
    "Technology and analytics leader with 13+ years delivering enterprise data platforms, application development, and analytics solutions across regulated financial services and global manufacturing. Currently lead two teams: Analytics Platform and Analytics Engineering. Collectively, my Enterprise Analytics function is responsible for everything downstream of the Silver layer: the Platform team owns and operates the curated Gold layer of our medallion architecture and runs it as an internal product for teams across IT, and the Engineering team delivers automated reporting on that platform, extending the Bronze and Silver layers when needed. I use AI to create tools that shorten the delivery time of complex projects, and coach my teams to do the same. I'm at my best developing people: helping team members and peers navigate uncomfortable next steps required for their growth, and steering them towards work that genuinely interests them while offering development opportunities.",
  skills: [
    {
      category: "Platforms & Tools",
      items:
        "Microsoft Fabric, Power BI, Azure, Databricks, SQL Server, Tableau, Python, IBM DB2, Jira, Confluence; familiar with Snowflake",
    },
    {
      category: "Data & Architecture",
      items:
        "Medallion datalakes, data warehousing, data virtualization, multi-source integration, star-schema and AI-ready data modeling, semantic models and ontologies",
    },
    {
      category: "Delivery & Governance",
      items:
        "CI/CD, GitHub, data security, regulated data protection, Agile (Scrum & Kanban), portfolio and budget oversight, vendor management, executive communication",
    },
  ],
  experience: [
    {
      title: "Manager, Data Analytics",
      company: "Jackson National Life",
      location: "Lansing, MI",
      start: "May 2024",
      end: "Present",
      bullets: [
        "Own analytics strategy, architecture, roadmaps, and milestone reporting to senior Data and AI leadership.",
        "Direct enterprise analytics as manager-of-managers across multiple teams (scrum, kanban, vendor-led) to deliver the analytics layer of Jackson's cloud Enterprise Data Platform. This gold layer of our medallion architecture curates 1,000+ fields and hundreds of millions of rows from multiple functional enterprise applications into Data Products that serve multiple analytics teams and consumers across the business. I balance concurrent vendor data engineering and report development teams alongside my internal analytics platform and data engineering teams to accelerate roadmap delivery.",
        "Delivered regulatory compliance reporting on this platform as a flagship use case: governed end-to-end pipelines and Power BI reporting replacing manual Excel/Access processes that previously took hours to days, shifting the compliance function to near real-time self-service with traceable lineage, audit-defensible outputs, and KPI/threshold-based alerting for compliance leadership.",
        "Architected and stood up the enterprise Microsoft Fabric platform, designing workspace topology, configuring tenant-level security patterns, building medallion-zone lakehouse architecture for non-IT business analytics teams, and automating workspace and dataset configuration.",
        "Led cross-functional team including Data Governance, Privacy, Security, and Infrastructure teams to establish the governance and onboarding framework on top of the platform: naming conventions, a business-team onboarding template, and deployment-pipeline patterns.",
        "Lead migration of legacy analytics solutions onto Microsoft Fabric and Power BI, replacing SAP Business Objects, Tableau, and custom reporting infrastructure with a common governed, configuration-driven self-service platform, eliminating the need for redundant Analytics infrastructure spend of $1.5M+ annually.",
        "Designed an AI-accelerated framework for documenting legacy analytics artifacts at scale using Cursor. Built parsers (SAS Enterprise Guide, MS Access, R/Python, Tableau, Business Objects, Data Services) that extract common metadata from hundreds of UDAs. Output drives gap analysis against current-state modernized solutions, accelerating migration and decommissioning of legacy analytics platforms.",
        "Designed and presented a star-schema / AI-ready data-model framework to a mixed business and technical audience, accelerating shared understanding of the value of semantic-layer design and ontologies for downstream AI/ML enablement.",
      ],
    },
    {
      title: "Lead Data Visualization and Analytics Engineer",
      company: "Jackson National Life",
      location: "Lansing, MI",
      start: "Feb 2023",
      end: "May 2024",
      bullets: [
        'Drove enterprise adoption of analytics through quarterly Community of Practice sessions reaching 250+ associates, showcasing successful projects and platform capabilities; established "Analytics Office Hours" for this community as a recurring cross-business support forum.',
        "Advanced automation maturity within the team by configuring dataset security through code with Power BI REST APIs from GitHub, and standardizing tooling around DAX Studio and Tabular Editor.",
        "Led platform-migration work moving existing Tableau reports from Cloudera to Azure Databricks data sources, upskilled peers through Azure Data, Azure Security Fundamentals, and Power BI certifications.",
      ],
    },
    {
      title: "Sr. Data Visualization and Analytics Engineer",
      company: "Jackson National Life",
      location: "Lansing, MI",
      start: "Mar 2022",
      end: "Feb 2023",
      bullets: [
        "Contributed to enterprise-scale Power BI operationalization, demonstrating platform suitability, setting development standards, coaching teams transitioning to Power BI, and implementing a new dashboard development process that shortened cycle time and minimized rework.",
      ],
    },
    {
      title: "Director, IT",
      company: "Belwith Keeler Decor Solutions",
      location: "Grand Rapids, MI",
      start: "Feb 2021",
      end: "Feb 2022",
      bullets: [
        "Led a multi-function technology organization with the ERP Development Manager and external workforce-augmentation teams reporting to me; owned the technology roadmap, $1M annual IT budget, and vendor portfolio across application development, analytics, and IT operations.",
        "Owned the technology roadmap and budget for a mid-market manufacturer, advancing infrastructure modernization and establishing business-led citizen development; established a cross-functional Power BI Report Design Team, focusing IT efforts on creating quality, self-service data models and enabling analysts within business units to develop their own reports.",
      ],
    },
    {
      title: "Manager, Systems & Application Development",
      company: "Belwith Keeler Decor Solutions",
      location: "Grand Rapids, MI",
      start: "Sep 2019",
      end: "Feb 2021",
      bullets: [
        "Modernized pick-pack-ship operation, replacing a customized and error-prone JDE inventory module and paper pick slips with a standard, configuration-based solution: Standard JDE shipping module driven pick logic, pick lists surfaced directly to handheld Zebra scanners, dimension-capturing ship scales feeding more accurate carrier rate shopping, and QR-coded virtual packing lists. Result: zero paper on the distribution floor, elimination of mis-picks, 50% increase in ship station throughput and daily capacity.",
        "Fortified core IT infrastructure: migrated from tape to cloud backups, instituted annual DR drills, deployed redundant firewalls, launched a cybersecurity awareness program, migrated Exchange server to the cloud.",
        "Led IT through the COVID transition from 10% to 100% remote workforce with zero security incidents in less than two weeks. Rapidly deploying VPN, Teams, and home-enabled VoIP call center and office phones while sustaining IT service levels.",
      ],
    },
    {
      title: "Business Information Systems Analyst",
      company: "Belwith Keeler Decor Solutions",
      location: "Grand Rapids, MI",
      start: "Apr 2013",
      end: "Sep 2019",
      bullets: [
        "Led a 12-year leapfrog upgrade of the enterprise platform from Oracle JD Edwards 8.12 on IBM AS/400 to JDE 9.2 on virtualized Windows. Designed target architecture, led the configuration and validation, and commissioned the cutover with minimal business disruption. Materially improved system stability (multiple crashes per week to zero) and positioned the platform for sustained operational use and modernization.",
        "Migrated an MS Access–based data warehouse to SQL Server with a Power BI / Excel front-end, establishing the company's first governed reporting layer.",
      ],
    },
  ],
  earlierExperience: [
    "Excel VBA Developer (contract) at Magna Mirrors (2012–2013)",
    "Database Coordinator (contract) at Hart and Cooley (2012)",
    "Economics Tutor at GVSU Tutoring Center (2010–2011)",
    "WDW College Program (2007)",
    "Eagle Scout Award (2006)",
  ],
  education: {
    degree: "BBA, Business Economics and Finance",
    institution: "Grand Valley State University",
    graduated: "Aug 2011",
    notes:
      "GPA 3.4, Economic Honors Society. Economics Capstone: Hedonic price model on hundreds of thousands of Des Moines, IA real-estate transactions using multivariate regression in STATA to predict the increase in overall home value different home renovations would have.",
  },
  additionalCoursework: [
    "Data Engineering in Databricks",
    "Apache Spark Programming in Databricks (2022)",
    "ETL with SSIS, BI Reports with SSRS, Relational Data Warehousing (2018)",
    "Analytics in Python (2017)",
  ],
  certifications: [
    "Power BI Data Analyst Associate (2023)",
    "Azure Fundamentals (2022)",
    "Security, Compliance & Identity Fundamentals (2022)",
    "Azure Data Fundamentals (2022)",
  ],
};
