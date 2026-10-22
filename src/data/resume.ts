export const resume = {
  summary:
    'Data Analyst with experience building and maintaining data pipelines, transforming data, and developing reporting solutions. Skilled in SQL, Python, Snowflake, and dbt, with a focus on data analysis, automation, and business reporting. Experienced in improving data quality and making information more accessible across an organization.',
  experience: [
    {
      organization: 'Mountain Land Physical Therapy Partners',
      location: 'Cottonwood Heights, UT',
      role: 'Data Analyst',
      dates: '2024 - Present',
      highlights: [
        'Develop and maintain data pipelines, SQL-based dbt models, stored procedures, and scheduled tasks in Snowflake to integrate data from multiple sources.',
        'Build and maintain Domo dashboards, KPIs, and reporting datasets to track performance, analyze trends, and support business decisions across 9 support service departments and more than 80 clinics.',
        'Investigate data quality issues, troubleshoot pipeline failures, and reconcile reporting discrepancies across Snowflake, dbt, Domo, and source systems.',
        'Develop Python-based automation using Azure Functions and Power Automate, including clinical document processing that reduced preparation time from 15-20 minutes to 2-5 minutes per case.',
        'Develop and validate SQL-based financial reporting for cash collections, revenue attribution, and compensation calculations across multiple data sources.',
        'Develop and maintain internal business applications using Domo Pro Code Apps, Power Apps, Power Automate, and SharePoint to automate business workflows.',
      ],
    },
  ],
  education: [
    {
      school: 'Weber State University',
      location: 'Ogden, UT',
      degree: 'B.S. Computer Science',
      date: 'Expected December 2026',
    },
    {
      school: 'Salt Lake Community College',
      location: 'Taylorsville, UT',
      degree: 'A.S. Computer Science',
      date: '2024',
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: ['SQL', 'Python', 'JavaScript', 'C#', 'Java'],
    },
    {
      category: 'Data & BI',
      items: ['Snowflake', 'dbt', 'Domo', 'Excel', 'ETL/ELT', 'Data Modeling', 'Data Validation'],
    },
    {
      category: 'Development & Automation',
      items: [
        'Git',
        'GitHub',
        'Azure',
        'REST APIs',
        'Domo Pro Code Apps',
        'Power Apps',
        'Power Automate',
        'SharePoint',
      ],
    },
  ],
  projectsAndLeadership: [
    {
      title: 'RVPark',
      context: 'Class Project, Software Engineering II',
      date: '2026',
      highlights: [
        'Collaborated on a C# and ASP.NET MVC web application for RV park reservations, campsite management, and administrative reporting. Developed application models and date-filtered reservation reports.',
      ],
    },
    {
      title: 'AI and Technical Task Force',
      context: 'Mountain Land Physical Therapy Partners, Cottonwood Heights, UT',
      date: '2026',
      highlights: [
        'Collaborate with representatives across departments to identify business needs, evaluate technology solutions, and coordinate projects from planning through implementation.',
        'Serve in both project planning and technical development roles, contributing to a clinical mentorship application and Python-based automation for organizing images and preparing documents.',
      ],
    },
  ],
} as const
